import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/i18n/content.ts', import.meta.url), 'utf8')
const requiredGreek = ['Αρχική', 'Υπηρεσίες', 'Αποστολή αιτήματος', 'Πολιτική απορρήτου']
const requiredEnglish = ['Home', 'Services', 'Send request', 'Privacy policy']
const missing = [...requiredGreek, ...requiredEnglish].filter((item) => !source.includes(item))

if (missing.length) {
  throw new Error(`Missing localized content: ${missing.join(', ')}`)
}

for (const retiredService of ['Ηλεκτρολογικές εργασίες', 'Πλακάκια και δάπεδα', 'Electrical work', 'Tiles and flooring']) {
  if (source.includes(retiredService)) throw new Error(`Retired service still present: ${retiredService}`)
}

if (!source.includes("localizedPathname === '/el'") || !source.includes('withBasePath(route)')) {
  throw new Error('English is expected to be the default locale at the root path.')
}

const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')
for (const path of ["localizedPath('el'", "localizedPath('en'", 'aria-expanded', 'aria-invalid', 'honeypot']) {
  if (!app.includes(path)) throw new Error(`Expected implementation marker not found: ${path}`)
}

console.log('Localized content and accessibility guards verified.')
