/**
 * Resilient FormSubmit client helper:
 * 1. Tries CORS-preflight-free FormData AJAX POST first.
 * 2. Falls back to JSON AJAX POST if needed.
 * 3. Provides a standard form submit helper as a 1-click fallback (also handles initial activation).
 */
export async function submitToFormSubmit({ recipientEmail, fields, timeoutMs = 20000 }) {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`;
  const cleanPayload = {
    _url: typeof window !== 'undefined' ? window.location.href : '',
    _template: 'table',
    _captcha: 'false',
  };

  Object.entries(fields || {}).forEach(([key, val]) => {
    if (key === '_honey') return;
    if (val !== undefined && val !== null && String(val).trim() !== '') {
      cleanPayload[key] = String(val);
    }
  });

  // Attempt 1: FormData POST (avoids CORS preflight OPTIONS)
  const formData = new FormData();
  Object.entries(cleanPayload).forEach(([k, v]) => formData.append(k, v));

  const tryFetch = async (options, ms) => {
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = controller ? setTimeout(() => controller.abort(), ms) : null;
    try {
      const res = await fetch(endpoint, {
        ...options,
        signal: controller ? controller.signal : undefined,
      });
      const data = await res.json().catch(() => ({}));
      return { res, data, networkError: false };
    } catch {
      return { res: null, data: {}, networkError: true };
    } finally {
      if (timer) clearTimeout(timer);
    }
  };

  const attempt1 = await tryFetch(
    {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    },
    timeoutMs
  );

  if (attempt1.res?.ok && attempt1.data.success !== false && attempt1.data.success !== 'false') {
    return { ok: true, data: attempt1.data };
  }

  const msg1 = typeof attempt1.data?.message === 'string' ? attempt1.data.message : '';
  if (/activat/i.test(msg1)) {
    return { ok: false, needsActivation: true, message: msg1, networkError: false };
  }

  // Attempt 2: JSON POST fallback
  const attempt2 = await tryFetch(
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(cleanPayload),
    },
    15000
  );

  if (attempt2.res?.ok && attempt2.data.success !== false && attempt2.data.success !== 'false') {
    return { ok: true, data: attempt2.data };
  }

  const msg2 = typeof attempt2.data?.message === 'string' ? attempt2.data.message : '';
  const finalMsg = msg2 || msg1;
  return {
    ok: false,
    needsActivation: /activat/i.test(finalMsg),
    message: finalMsg,
    networkError: attempt1.networkError && attempt2.networkError,
  };
}

export function submitViaStandardForm({ recipientEmail, fields }) {
  if (typeof document === 'undefined') return;
  const form = document.createElement('form');
  form.action = `https://formsubmit.co/${encodeURIComponent(recipientEmail)}`;
  form.method = 'POST';
  form.target = '_blank';
  form.rel = 'noopener noreferrer';
  form.style.display = 'none';

  const payload = {
    _next: typeof window !== 'undefined' ? window.location.href : '',
    _template: 'table',
    _captcha: 'false',
    ...fields,
  };

  Object.entries(payload).forEach(([key, val]) => {
    if (key === '_honey') return;
    if (val === undefined || val === null || String(val).trim() === '') return;
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = String(val);
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
