import { assetPath } from './site'

/** Replace the empty values below before launch. No fictitious contact details are exposed. */
export const contactConfig = {
  phone: '',
  whatsapp: '',
  email: '',
  legalName: '',
  streetAddress: '',
  taxId: '',
  formEndpoint: '',
  siteUrl: 'https://tomascavataio.github.io/ionian-repairs/',
} as const

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
