import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Handshake, 
  Coins, 
  Building2, 
  TrendingUp, 
  ChevronDown,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { CONTACT_CONFIG } from '../config/contact';
import Reveal from './Reveal';

const COOLDOWN_MS = 30000;
const COOLDOWN_KEY = 'duland_contact_last_submit';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const sanitizeText = (value, maxLength) => {
  return String(value || '')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim()
    .slice(0, maxLength);
};

export const ContactPage = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Investment Partnership',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setErrorMessage('');

    // Silent honeypot trap against automated spam bots
    if (honeypot.trim() !== '') {
      setSubmitted(true);
      return;
    }

    // Check rate-limit cooldown safely
    try {
      const lastSubmit = Number(sessionStorage.getItem(COOLDOWN_KEY) || 0);
      if (lastSubmit && Date.now() - lastSubmit < COOLDOWN_MS) {
        const waitSec = Math.ceil((COOLDOWN_MS - (Date.now() - lastSubmit)) / 1000);
        setErrorMessage(`Please wait ${waitSec}s before sending another message.`);
        return;
      }
    } catch {
      // Ignore storage errors in private browsing
    }

    const cleanName = sanitizeText(formData.name, 100);
    const cleanCompany = sanitizeText(formData.company, 120) || 'Not provided';
    const cleanEmail = sanitizeText(formData.email, 120);
    const cleanPhone = sanitizeText(formData.phone, 40) || 'Not provided';
    const cleanSubject = CONTACT_CONFIG.allowedSubjects.includes(formData.subject)
      ? formData.subject
      : 'General Inquiries';
    const cleanMessage = sanitizeText(formData.message, 3000);

    if (!cleanName || cleanName.length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!EMAIL_REGEX.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!cleanMessage || cleanMessage.length < 5) {
      setErrorMessage('Please enter your inquiry message.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: cleanName,
        company: cleanCompany,
        email: cleanEmail,
        phone: cleanPhone,
        subject: cleanSubject,
        message: cleanMessage,
        _subject: `Duland Global Inquiry: ${cleanSubject} — ${cleanName}`,
        _replyto: cleanEmail,
        _template: 'table',
        _captcha: 'false',
        _honey: '',
      };

      if (Array.isArray(CONTACT_CONFIG.ccEmails) && CONTACT_CONFIG.ccEmails.length > 0) {
        payload._cc = CONTACT_CONFIG.ccEmails.join(',');
      }

      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_CONFIG.recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success !== false && data.success !== 'false') {
        try {
          sessionStorage.setItem(COOLDOWN_KEY, String(Date.now()));
        } catch {
          // Ignore storage errors
        }
        setSubmitted(true);
      } else {
        setErrorMessage(
          data.message ||
            `Unable to send right now. Please try again or email us directly at ${CONTACT_CONFIG.recipientEmail}.`
        );
      }
    } catch {
      setErrorMessage(
        `Network error while sending message. Please try again or write directly to ${CONTACT_CONFIG.recipientEmail}.`
      );
    } finally {
      setLoading(false);
    }
  };

  const collaborateIcons = [Handshake, Coins, Building2, TrendingUp];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER */}
      <section className="relative w-full h-[260px] sm:h-[340px] lg:h-[380px] 2xl:h-[420px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_contact_terrace_4k.webp" 
          alt="Contact Duland Global"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns"
          onError={(e) => { e.target.src = '/assets/banner_contact_3mix.webp'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="border-l-4 sm:border-l-[5px] border-[#22c55e] pl-4 sm:pl-5 mb-2 animate-pageEnter">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {t.contact.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-100 mt-2 font-normal tracking-wide">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* Left: Contact Form (7 cols - Stretches Equally With Right Column) */}
            <Reveal className="lg:col-span-7 flex flex-col h-full">
              <div className="inline-block max-w-full self-start mb-4">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
                  {t.contact.formTitle}
                </h2>
                <div className="w-full h-[3px] bg-[#22c55e] mt-2.5 rounded-full"></div>
              </div>
              
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed max-w-xl">
                {t.contact.formDesc}
              </p>

              {submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 shadow-sm animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#0b3b24] mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage('');
                      setFormData({
                        name: '', company: '', email: '', phone: '', subject: 'Investment Partnership', message: ''
                      });
                    }}
                    className="mt-4 px-5 py-2.5 min-h-[44px] rounded-lg bg-[#0b3b24] text-white text-xs sm:text-sm font-semibold hover:bg-[#072617] cursor-pointer shadow-xs transition-colors"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-4 w-full max-w-2xl">
                  
                  {/* Hidden Bot Honeypot */}
                  <input
                    type="text"
                    name="_honey"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="sr-only"
                  />

                  <div className="flex-1 flex flex-col gap-4">
                    {/* Row 1: Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          maxLength={100}
                          placeholder={t.contact.name}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-300 focus:outline-none focus:border-[#0b3b24] focus:ring-1 focus:ring-[#0b3b24] text-sm text-slate-900 transition-colors bg-white shadow-2xs"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="company"
                          maxLength={120}
                          placeholder={t.contact.company}
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-300 focus:outline-none focus:border-[#0b3b24] focus:ring-1 focus:ring-[#0b3b24] text-sm text-slate-900 transition-colors bg-white shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          maxLength={120}
                          placeholder={t.contact.email}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-300 focus:outline-none focus:border-[#0b3b24] focus:ring-1 focus:ring-[#0b3b24] text-sm text-slate-900 transition-colors bg-white shadow-2xs"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          maxLength={40}
                          placeholder={t.contact.phone}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-300 focus:outline-none focus:border-[#0b3b24] focus:ring-1 focus:ring-[#0b3b24] text-sm text-slate-900 transition-colors bg-white shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Row 3: Subject Dropdown */}
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-300 focus:outline-none focus:border-[#0b3b24] focus:ring-1 focus:ring-[#0b3b24] text-sm text-slate-900 transition-colors bg-white appearance-none cursor-pointer shadow-2xs pr-10"
                      >
                        <option value="Investment Partnership">{t.contact.subjects.partnership}</option>
                        <option value="Real Estate Acquisitions">{t.contact.subjects.acquisitions}</option>
                        <option value="Financial Investments">{t.contact.subjects.financial}</option>
                        <option value="General Inquiries">{t.contact.subjects.general}</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                    </div>

                    {/* Row 4: Message (Expands smoothly to balance right column height) */}
                    <div className="flex-1 flex flex-col">
                      <textarea
                        name="message"
                        required
                        rows={5}
                        maxLength={3000}
                        placeholder={t.contact.message}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full flex-1 min-h-[140px] px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0b3b24] focus:ring-1 focus:ring-[#0b3b24] text-sm text-slate-900 transition-colors resize-y shadow-2xs"
                      ></textarea>
                    </div>
                  </div>

                  {/* Inline Error Alert if FormSubmit fails or rate-limit triggers */}
                  {errorMessage && (
                    <div role="alert" className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3 min-h-[46px] rounded-xl bg-[#0b3b24] hover:bg-[#072617] active:bg-[#041a0f] text-white text-sm font-semibold tracking-wide transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      <span>{loading ? t.common.sending : t.contact.send}</span>
                      <span className="font-bold">&gt;</span>
                    </button>
                  </div>

                </form>
              )}
            </Reveal>

            {/* Right: Contact Information & Headquarters Panel (5 cols) - Fully Balanced */}
            <Reveal delay={100} className="lg:col-span-5 flex flex-col justify-between gap-4 h-full">
              
              {/* Header */}
              <div>
                <div className="inline-block max-w-full">
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {t.contact.contactInfoTitle}
                  </h3>
                  <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-3">
                
                {/* Registered Office Card */}
                <div className="p-4 rounded-xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0b3b24] border border-emerald-200/80 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                      <MapPin className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-0.5">
                        <span className="text-sm font-bold text-slate-900">{t.contact.addressName}</span>
                        <span className="text-[10px] font-semibold text-[#0b3b24] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          {t.common.registeredOffice}
                        </span>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-snug">
                        {t.contact.addressLine1}, {t.contact.addressLine2}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Telephone & Operating Hours Card */}
                <div className="p-4 rounded-xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0b3b24] border border-emerald-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                        <Phone className="w-4 h-4 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Direct Line
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">
                          {t.contact.phoneNum}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      09:00 – 18:00 CET
                    </span>
                  </div>
                </div>

                {/* Email & Investor Inquiries Card */}
                <div className="p-4 rounded-xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0b3b24] border border-emerald-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                        <Mail className="w-4 h-4 stroke-[2]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Investor &amp; Corporate Inquiries
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 break-all">
                          {t.contact.emailAddr}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#0b3b24] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md shrink-0">
                      Official Desk
                    </span>
                  </div>
                </div>

              </div>

              {/* Institutional Delegations & Visiting Policy */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50/70 via-emerald-50/30 to-white border border-emerald-200/70 shadow-2xs flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#0b3b24] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-snug">
                    Institutional Consultations &amp; Delegations
                  </span>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Meetings with corporate leadership are conducted by prior confirmed appointment.
                  </p>
                </div>
              </div>

              {/* Business Inquiries Card */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#0b3b24] text-white p-5 rounded-2xl shadow-sm border border-emerald-800">
                <div className="sm:col-span-7">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                    Partnership Focus
                  </span>
                  <h4 className="font-serif text-sm font-bold text-white mb-1.5 leading-snug">
                    {t.contact.inquiriesTitle}
                  </h4>
                  <p className="text-xs text-emerald-100/90 leading-relaxed font-light">
                    {t.contact.inquiriesDesc}
                  </p>
                </div>
                <div className="sm:col-span-5 h-28 rounded-xl overflow-hidden border border-emerald-700/60 shadow-xs">
                  <img 
                    src="/assets/ref_contact_desk.webp" 
                    alt="Business Inquiries" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/assets/contact_desk_4k.webp'; }}
                  />
                </div>
              </div>

            </Reveal>

          </div>

        </div>
      </section>

      {/* 3. BOTTOM BANNER: HOW WE CAN COLLABORATE */}
      <section className="bg-[#0b3b24] text-white py-12 border-t border-emerald-950">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal className="text-center mb-8">
            <span className="text-xs sm:text-sm font-serif font-bold text-emerald-200 tracking-wider">
              {t.contact.collaborateTitle}
            </span>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {t.contact.collaborate.map((title, idx) => {
              const IconComp = collaborateIcons[idx % collaborateIcons.length];
              return (
                <Reveal key={idx} delay={idx * 70}>
                  <div className="flex flex-col items-center text-center p-3 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 mb-3 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-white/95 leading-snug max-w-[160px]">
                      {title}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
