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
  Clock,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

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

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const collaborateIcons = [Handshake, Coins, Building2, TrendingUp];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER */}
      <section className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_contact_terrace_4k.webp" 
          alt="Contact Duland Global"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/assets/banner_contact_3mix.webp'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-stretch gap-3 sm:gap-4 mb-2">
              <span className="w-1.5 bg-[#22c55e] shrink-0 rounded-xs self-stretch my-1"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  {t.contact.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-100 mt-2 font-normal tracking-wide">
                  {t.contact.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
                {t.contact.formTitle}
              </h2>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-3 mb-5"></div>
              
              <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed max-w-xl">
                {t.contact.formDesc}
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 shadow-sm animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#0b3b24] mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '', company: '', email: '', phone: '', subject: 'Investment Partnership', message: ''
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-lg bg-[#0b3b24] text-white text-xs sm:text-sm font-semibold hover:bg-[#072617] cursor-pointer shadow-xs transition-colors"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
                  
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder={t.contact.name}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-300 focus:outline-none focus:border-[#0b3b24] focus:ring-1 focus:ring-[#0b3b24] text-sm text-slate-900 transition-colors bg-white shadow-2xs"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
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
                        required
                        placeholder={t.contact.email}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-300 focus:outline-none focus:border-[#0b3b24] focus:ring-1 focus:ring-[#0b3b24] text-sm text-slate-900 transition-colors bg-white shadow-2xs"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
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
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-300 focus:outline-none focus:border-[#0b3b24] focus:ring-1 focus:ring-[#0b3b24] text-sm text-slate-900 transition-colors bg-white appearance-none cursor-pointer shadow-2xs"
                    >
                      <option value="Investment Partnership">{t.contact.subjects.partnership}</option>
                      <option value="Real Estate Acquisitions">{t.contact.subjects.acquisitions}</option>
                      <option value="Financial Investments">{t.contact.subjects.financial}</option>
                      <option value="General Inquiries">{t.contact.subjects.general}</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <textarea
                      required
                      rows={5}
                      placeholder={t.contact.message}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0b3b24] focus:ring-1 focus:ring-[#0b3b24] text-sm text-slate-900 transition-colors resize-y shadow-2xs"
                    ></textarea>
                  </div>

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
            </div>

            {/* Right: Contact Information & Headquarters Panel (5 cols) - Fully Balanced, No Empty Space */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5 h-full">
              
              {/* Header */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {t.contact.contactInfoTitle}
                </h3>
                <div className="w-12 h-[3px] bg-[#22c55e] mt-2 mb-4"></div>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-3">
                
                {/* Registered Office Card */}
                <div className="p-4 rounded-xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0b3b24] border border-emerald-200/80 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                      <MapPin className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
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
                  <div className="flex items-center justify-between gap-3">
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
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0b3b24] border border-emerald-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                        <Mail className="w-4 h-4 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Investor & Corporate Inquiries
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">
                          {t.contact.emailAddr}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#0b3b24] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
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
                    Institutional Consultations & Delegations
                  </span>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Meetings with corporate leadership are conducted by prior confirmed appointment.
                  </p>
                </div>
              </div>

              {/* Business Inquiries Card - Perfectly Fills Bottom Space */}
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
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/assets/contact_desk_4k.webp'; }}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. BOTTOM BANNER: HOW WE CAN COLLABORATE */}
      <section className="bg-[#0b3b24] text-white py-12 border-t border-emerald-950">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <span className="text-xs sm:text-sm font-serif font-bold text-emerald-200 tracking-wider">
              {t.contact.collaborateTitle}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {t.contact.collaborate.map((title, idx) => {
              const IconComp = collaborateIcons[idx % collaborateIcons.length];
              return (
                <div key={idx} className="flex flex-col items-center text-center p-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 mb-3 border border-white/10">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white/95 leading-snug max-w-[160px]">
                    {title}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
