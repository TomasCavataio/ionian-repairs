/** Replace the empty values below before launch. No fictitious contact details are exposed. */
export const contactConfig = {
  phone: '',
  whatsapp: '',
  email: '',
  legalName: '',
  streetAddress: '',
  taxId: '',
  formEndpoint: '',
  siteUrl: 'https://example.com',
} as const

export const assetConfig = {
  hero: {
    base: '/images/hero-provisional',
    width: 1536,
    height: 1024,
  },
  bathroom: {
    base: '/images/bathroom-provisional',
    width: 1536,
    height: 1024,
  },
} as const
