import React, { useEffect, useRef, useState } from 'react';

export const Reveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isVisible) return;
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    );

    observer.observe(node);

    // Fallback check in case element is already in viewport on mount
    const timer = setTimeout(() => {
      if (node) {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
          observer.disconnect();
        }
      }
    }, 150);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [isVisible]);

  const hiddenTransform = {
    up: 'translate-y-6 opacity-0',
    left: '-translate-x-6 opacity-0',
    right: 'translate-x-6 opacity-0',
    scale: 'scale-95 opacity-0',
    none: 'opacity-0',
  }[direction] || 'translate-y-6 opacity-0';

  return (
    <div
      ref={ref}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : hiddenTransform
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
