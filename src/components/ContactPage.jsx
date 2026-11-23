import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
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
    }, 800);
  };

  const collaborateCards = [
    { title: 'Strategic Partnerships', icon: Handshake },
    { title: 'Investment Opportunities', icon: Coins },
    { title: 'Property Acquisition & Development', icon: Building2 },
    { title: 'Portfolio Cooperation', icon: TrendingUp }
  ];

  return (
    <div className="w-full">
      
      {/* 1. TOP BANNER: 4K Executive Building Terrace at Twilight */}
      <section className="relative w-full h-[320px] sm:h-[380px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_contact_terrace_4k.webp" 
          alt="Contact Duland Global"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-10 sm:h-12 bg-[#22c55e] rounded-full"></span>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
                Contact
              </h1>
            </div>
            <p className="text-base sm:text-lg text-slate-200 mt-2 pl-5 font-light">
              Get in Touch with Duland Global
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Form (7 cols) */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900">
                Let's Talk About <br className="hidden sm:inline" /> Investment Opportunities
              </h2>
              <div className="w-16 h-1 bg-[#006400] mt-3 mb-6 rounded-full"></div>
              
              <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
                We welcome inquiries from investors, business partners and property owners who are interested in exploring investment opportunities, partnerships or strategic cooperation.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#006400] mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to Duland Global. Our investment relations team will review your proposal and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '', company: '', email: '', phone: '', subject: 'Investment Partnership', message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2 rounded-lg bg-[#006400] text-white text-xs font-bold hover:bg-[#004d00]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006400] text-sm text-slate-900 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006400] text-sm text-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006400] text-sm text-slate-900 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006400] text-sm text-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div className="relative">
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006400] text-sm text-slate-900 transition-colors bg-white appearance-none cursor-pointer"
                    >
                      <option value="Investment Partnership">Investment Partnership</option>
                      <option value="Real Estate Acquisition">Real Estate Acquisition</option>
                      <option value="Development Cooperation">Development Cooperation</option>
                      <option value="Institutional Financial Allocation">Institutional Financial Allocation</option>
                      <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <textarea
                      required
                      rows={5}
                      placeholder="Message *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006400] text-sm text-slate-900 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#006400] hover:bg-[#004d00] text-white text-sm font-bold tracking-wide shadow-md transition-all cursor-pointer"
                    >
                      <span>{loading ? 'Sending...' : 'Send Message'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Right: Info (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                  Our Contact Information
                </h3>

                <div className="space-y-6 text-sm text-slate-700 relative z-10">
                  
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-[#006400] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-base">Duland Global Kft.</div>
                      <div className="text-slate-600">Budapest, Hungary</div>
                      <div className="text-xs text-slate-500 italic mt-0.5">(Registered Office)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-[#006400] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">+36 1 700 0000</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-[#006400] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <a href="mailto:info@dulandglobal.com" className="font-bold text-[#006400] hover:underline">
                        info@dulandglobal.com
                      </a>
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-sm text-slate-900 mb-2">
                    Business Inquiries
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For investment proposals, partnership opportunities or other business inquiries, please contact us directly or use the contact form.
                  </p>
                </div>
              </div>

              {/* Executive Desk Image */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 h-44 shadow-xs">
                <img 
                  src="/assets/contact_desk_pen.webp" 
                  alt="Executive Desk & Pen"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. HOW WE CAN COLLABORATE (Deep Green Band) */}
      <section className="bg-[#004d00] text-white py-16 border-t border-emerald-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-3xl font-extrabold text-white">
              How We Can Collaborate
            </h3>
            <div className="w-16 h-1 bg-[#22c55e] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborateCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/15 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/15 text-emerald-300 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-white">
                    {card.title}
                  </h4>
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
