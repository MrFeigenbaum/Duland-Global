import { CONTACT_CONFIG } from './contact';

export const SITE_CONFIG = {
  brandName: 'Duland Global',
  brandMonogram: 'DG',
  legalEntity: CONTACT_CONFIG.companyName,
  contactEmail: CONTACT_CONFIG.displayEmail,
  recipientEmail: CONTACT_CONFIG.recipientEmail,
  ccEmails: CONTACT_CONFIG.ccEmails,
  allowedSubjects: CONTACT_CONFIG.allowedSubjects,
  formSubmitBaseUrl: 'https://formsubmit.co/ajax',
  introSessionKey: 'duland_intro_shown',
  contactCooldownKey: 'duland_contact_last_submit',
  contactCooldownMs: 30000,
  limits: {
    name: 100,
    company: 120,
    email: 120,
    phone: 40,
    message: 3000,
  },
  routes: {
    home: 'home',
    about: 'about',
    investments: 'investments',
    approach: 'approach',
    contact: 'contact',
    notFound: '404',
  },
  languages: [
    { code: 'EN', name: 'English', region: 'International' },
    { code: 'HU', name: 'Magyar', region: 'Magyarország' },
    { code: 'DE', name: 'Deutsch', region: 'DACH / Europa' },
    { code: 'UZ', name: "O‘zbekcha", region: "O‘zbekiston" },
  ],
};

export default SITE_CONFIG;
