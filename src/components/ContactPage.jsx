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
  ChevronDown 
} from 'lucide-react';

export const ContactPage = () => {
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

  const collaborateCards = [
    { title: 'Strategic Partnerships', icon: Handshake },
    { title: 'Investment Opportunities', icon: Coins },
    { title: 'Property Acquisition & Development', icon: Building2 },
    { title: 'Portfolio Cooperation', icon: TrendingUp }
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER: Matching Reference Image 5 */}
      <section className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_contact_terrace_4k.webp" 
          alt="Contact Duland Global"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/assets/banner_contact_3mix.webp'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-start gap-3 sm:gap-4 mb-2">
              <span className="w-1.5 h-14 sm:h-16 bg-[#22c55e] shrink-0 mt-1"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Contact
                </h1>
                <p className="text-xs sm:text-sm text-slate-100 mt-2 font-normal tracking-wide">
                  Get in Touch with Duland Global
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Let's Talk About <br /> Investment Opportunities
              </h2>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2 mb-4"></div>
              
              <p className="text-xs sm:text-[13px] text-slate-600 mb-6 leading-relaxed max-w-xl">
                We welcome inquiries from investors, business partners and property owners who are interested in exploring investment opportunities, partnerships or strategic cooperation.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#0b3b24] mx-auto" />
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you for contacting Duland Global. Our investment relations team will review your inquiry and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '', company: '', email: '', phone: '', subject: 'Investment Partnership', message: ''
                      });
                    }}
                    className="mt-3 px-4 py-1.5 rounded bg-[#0b3b24] text-white text-xs font-semibold hover:bg-[#072617] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 max-w-xl">
                  
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0b3b24] text-xs text-slate-900 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0b3b24] text-xs text-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0b3b24] text-xs text-slate-900 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0b3b24] text-xs text-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Subject Dropdown */}
                  <div className="relative">
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0b3b24] text-xs text-slate-900 transition-colors bg-white appearance-none cursor-pointer"
                    >
                      <option value="Investment Partnership">Subject: Investment Partnership</option>
                      <option value="Real Estate Acquisitions">Subject: Real Estate Acquisitions & Proposals</option>
                      <option value="Financial Investments">Subject: Financial Instruments & Co-Investment</option>
                      <option value="General Inquiries">Subject: General Corporate Inquiries</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <textarea
                      required
                      rows={4}
                      placeholder="Message *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0b3b24] text-xs text-slate-900 transition-colors resize-y"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-5 py-2 rounded-md bg-[#0b3b24] hover:bg-[#072617] text-white text-xs font-semibold tracking-wide transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-50"
                    >
                      <span>{loading ? 'Sending...' : 'Send Message'}</span>
                      <span className="font-bold">&gt;</span>
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Right: Contact Information & Desk Photo (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  Our Contact Information
                </h3>
                <div className="w-10 h-[3px] bg-[#22c55e] mt-2 mb-6"></div>

                {/* Contact List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-[#0b3b24] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Duland Global Kft.</div>
                      <div className="text-xs text-slate-600">Budapest, Hungary</div>
                      <div className="text-[11px] text-slate-400 italic">(Registered Office)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-[#0b3b24] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-medium text-slate-800">+36 1 700 0000</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-[#0b3b24] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-medium text-slate-800">info@dulandglobal.com</span>
                  </div>
                </div>

                {/* Business Inquiries & Desk Image exactly like Reference */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#fafcfb] p-4 rounded-xl border border-slate-200">
                  <div className="sm:col-span-7">
                    <h4 className="font-bold text-xs text-slate-900 mb-1">
                      Business Inquiries
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      For investment proposals, partnership opportunities or other business inquiries, please contact us directly or use the contact form.
                    </p>
                  </div>
                  <div className="sm:col-span-5 h-28 rounded-lg overflow-hidden border border-slate-200">
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

        </div>
      </section>

      {/* 3. BOTTOM BANNER: HOW WE CAN COLLABORATE */}
      <section className="bg-[#0b3b24] text-white py-10 border-t border-emerald-950">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <span className="text-xs sm:text-sm font-serif font-bold text-white tracking-wider">
              — How We Can Collaborate —
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {collaborateCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-2">
                  <div className="w-10 h-10 flex items-center justify-center text-white mb-2">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="text-xs font-medium text-white/95 leading-tight max-w-[140px]">
                    {card.title}
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