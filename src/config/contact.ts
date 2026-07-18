import { assetPath } from './site'

/** Public contact details and static-form delivery configuration. */
export const contactConfig = {
  email: 'ReginaLaka22@gmail.com',
  phoneByLocale: {
    en: { display: '+34 604 239 291', dial: '+34604239291', whatsapp: '34604239291' },
    el: { display: '+30 694 603 7783', dial: '+306946037783', whatsapp: '306946037783' },
  },
  legalName: '',
  streetAddress: '',
  taxId: '',
  formEndpoint: 'https://formsubmit.co/ajax/ReginaLaka22@gmail.com',
  siteUrl: 'https://tomascavataio.github.io/ionian-repairs/',
} as const

export function getContactDetails(locale: 'en' | 'el') {
  return { email: contactConfig.email, ...contactConfig.phoneByLocale[locale] }
}

export const assetConfig = {
  hero: {
    base: assetPath('images/hero-provisional'),
    width: 1536,
    height: 1024,
  },
  bathroom: {
    base: assetPath('images/bathroom-provisional'),
    width: 1536,
    height: 1024,
  },
} as const
