import { useEffect, useId, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { contactConfig, getContactDetails } from './config/contact'
import { assetPath } from './config/site'
import { Arrow, BrandMark, Check, GreekFlag, Mail, Message, Phone, ServiceIcon, UkFlag } from './components/Icons'
import { kefaloniaOutline, kefaloniaPoints } from './content/kefaloniaMap'
import { content, localeFromPath, localizedPath, type Locale, type SiteContent } from './i18n/content'

type ImageKey = 'hero' | 'bathroom' | 'project-meraki-1' | 'project-meraki-2' | 'project-meraki-3'

function ResponsiveImage({ image, alt, className, eager = false }: { image: ImageKey; alt: string; className?: string; eager?: boolean }) {
  const projectImage = image.startsWith('project-meraki-')
  const base = assetPath(projectImage ? `images/${image}` : `images/${image === 'hero' ? 'hero' : 'bathroom'}-provisional`)
  if (projectImage) {
    return <img className={className} src={`${base}.webp`} width="1360" height="907" loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" alt={alt} />
  }
  return (
    <picture>
      <source type="image/webp" srcSet={`${base}-768.webp 768w, ${base}-1536.webp 1536w`} sizes="(max-width: 800px) 100vw, 60vw" />
      <img
        className={className}
        src={`${base}-1536.jpg`}
        srcSet={`${base}-768.jpg 768w, ${base}-1536.jpg 1536w`}
        sizes="(max-width: 800px) 100vw, 60vw"
        width="1536"
        height="1024"
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        alt={alt}
      />
    </picture>
  )
}

function SectionHeading({ kicker, title, text, inverse = false }: { kicker: string; title: string; text?: string; inverse?: boolean }) {
  return (
    <div className={`section-heading reveal${inverse ? ' inverse' : ''}`}>
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  )
}

function LanguageButton({ locale, t, onChange, className = '' }: { locale: Locale; t: SiteContent; onChange: () => void; className?: string }) {
  return (
    <button className={`language-button ${className}`} type="button" onClick={onChange} aria-label={t.languageSwitch}>
      {locale === 'el' ? <UkFlag label={t.targetFlagAlt} /> : <GreekFlag label={t.targetFlagAlt} />}
      <span>{locale === 'el' ? 'EN' : 'EL'}</span>
    </button>
  )
}

function Header({ locale, t, privacy, onLanguage, onNavigate }: {
  locale: Locale; t: SiteContent; privacy: boolean; onLanguage: () => void; onNavigate: (path: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const link = (hash: string) => `${localizedPath(locale)}${hash}`
  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!privacy) return
    event.preventDefault()
    onNavigate(localizedPath(locale))
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <a className="skip-link" href="#main">{t.skip}</a>
      <div className="nav-shell">
        <a className="brand" href={localizedPath(locale)} onClick={goHome} aria-label={t.company}>
          <BrandMark />
          <span className="brand-name"><strong>{t.companyShort}</strong><small>{t.brandLocality}</small></span>
        </a>
        <nav className="desktop-nav" aria-label={t.navLabel}>
          {t.nav.map((item, index) => <a key={item.href} href={link(item.href)} aria-current={!privacy && index === 0 ? 'page' : undefined}>{item.label}</a>)}
        </nav>
        <div className="nav-actions">
          <LanguageButton locale={locale} t={t} onChange={() => { setOpen(false); onLanguage() }} />
          <a className="button button-small" href={link('#contact')}>{t.quote}<Arrow /></a>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t.menuClose : t.menuOpen} onClick={() => setOpen((value) => !value)}>
            <span /><span />
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label={t.navLabel}>
          {t.nav.map((item, index) => (
            <a key={item.href} href={link(item.href)} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}<Arrow /></a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <p>{t.hero.location}</p>
        </div>
      </div>
    </header>
  )
}

function Hero({ t }: { t: SiteContent }) {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span />{t.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#contact">{t.hero.primary}<Arrow /></a>
            <a className="text-link" href="#services">{t.hero.secondary}<Arrow /></a>
          </div>
          <p className="hero-location"><span className="location-dot" />{t.hero.location}</p>
        </div>
        <figure className="hero-media">
          <ResponsiveImage image="project-meraki-2" alt={t.hero.imageAlt} className="hero-image" eager />
          <div className="hero-arch" aria-hidden="true" />
        </figure>
      </div>
      <div className="plan-line plan-line-one" aria-hidden="true" />
      <div className="plan-line plan-line-two" aria-hidden="true" />
    </section>
  )
}

function TrustStrip({ t }: { t: SiteContent }) {
  return (
    <section className="trust-strip" aria-label={t.sections.whyTitle}>
      <div className="trust-inner">
        {t.trust.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</p>)}
      </div>
    </section>
  )
}

function Services({ t }: { t: SiteContent }) {
  return (
    <section id="services" className="services section-pad">
      <div className="shell">
        <SectionHeading kicker={t.sections.servicesKicker} title={t.sections.servicesTitle} text={t.sections.servicesIntro} />
        <div className="service-editorial">
          {t.services.map((service, index) => (
            <article className="service-item reveal" key={service.title}>
              <div className="service-topline">
                <span className="service-icon"><ServiceIcon kind={service.icon} /></span>
                <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="service-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
            </article>
          ))}
        </div>
        <a className="service-cta reveal" href="#contact"><span>{t.serviceCta}</span><span className="circle-arrow"><Arrow /></span></a>
      </div>
    </section>
  )
}

function Process({ t }: { t: SiteContent }) {
  return (
    <section id="about" className="process section-pad">
      <div className="shell process-grid">
        <div className="process-sticky">
          <SectionHeading inverse kicker={t.sections.processKicker} title={t.sections.processTitle} text={t.sections.processIntro} />
          <div className="material-swatch reveal" aria-hidden="true"><span /><span /><span /></div>
        </div>
        <ol className="process-list">
          {t.process.map((step, index) => (
            <li className="reveal" key={step.title}>
              <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Projects({ t }: { t: SiteContent }) {
  const [filter, setFilter] = useState(0)
  const projects = useMemo(() => {
    if (filter === 0) return t.projects
    const selected = t.filters[filter]
    return t.projects.filter((project) => project.category === selected)
  }, [filter, t])

  return (
    <section id="projects" className="projects section-pad">
      <div className="shell">
        <div className="projects-head">
          <SectionHeading kicker={t.sections.projectsKicker} title={t.sections.projectsTitle} text={t.sections.projectsIntro} />
          <div className="project-filters" role="group" aria-label={t.sections.projectsKicker}>
            {t.filters.map((item, index) => <button className={filter === index ? 'active' : ''} aria-pressed={filter === index} type="button" key={item} onClick={() => setFilter(index)}>{item}</button>)}
          </div>
        </div>
        {projects.length ? (
          <div className={`project-grid count-${projects.length}`} aria-live="polite">
            {projects.map((project, index) => (
              <article className={`project-card project-card-${index + 1} reveal`} key={`${project.title}-${filter}`}>
                <div className="project-media">
                  <ResponsiveImage image={project.image as ImageKey} alt={t.projectAlt} />
                  <span className="demo-badge">{t.projectDemo}</span>
                </div>
                <div className="project-info"><div><p>{project.category}</p><h3>{project.title}</h3></div><span>{project.meta}</span></div>
              </article>
            ))}
          </div>
        ) : <p className="project-empty" aria-live="polite">{t.projectEmpty}</p>}
      </div>
    </section>
  )
}

function Areas({ t }: { t: SiteContent }) {
  return (
    <section id="areas" className="areas section-pad">
      <div className="shell areas-grid">
        <div>
          <SectionHeading kicker={t.sections.areasKicker} title={t.sections.areasTitle} text={t.sections.areasText} />
          <p className="areas-note reveal">{t.areasNote}</p>
        </div>
        <div className="route-graphic reveal">
          <svg className="kefalonia-map" viewBox="0 70 520 465" role="img" aria-label={t.routeLabel}>
            <title>{t.routeLabel}</title>
            <defs>
              <linearGradient id="island-fill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f4f2ec" stopOpacity=".22" />
                <stop offset="1" stopColor="#6bb9df" stopOpacity=".18" />
              </linearGradient>
            </defs>
            <g className="map-grid" aria-hidden="true">
              <path d="M 35 180 H 500 M 20 300 H 505 M 35 420 H 500" />
              <path d="M 150 85 V 525 M 280 75 V 530 M 410 85 V 525" />
            </g>
            <path className="island-halo" d={kefaloniaOutline} aria-hidden="true" />
            <path className="island-shape" d={kefaloniaOutline} aria-hidden="true" />
            <g aria-hidden="true">
              {kefaloniaPoints.map((point, index) => (
                <g className={`map-marker${index === 0 ? ' is-origin' : ''}`} transform={`translate(${point.x} ${point.y})`} key={t.areas[index]}>
                  <circle className="marker-ring" r={index === 0 ? 15 : 11} />
                  <text y="3">{String(index + 1).padStart(2, '0')}</text>
                </g>
              ))}
            </g>
          </svg>
          <ol className="map-location-list" aria-label={t.sections.areasKicker}>
            {t.areas.map((area, index) => (
              <li className={index === 0 ? 'is-origin' : ''} key={area}>
                <span>{String(index + 1).padStart(2, '0')}</span>{area}
              </li>
            ))}
          </ol>
          <a className="map-credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">{t.mapCredit}</a>
        </div>
      </div>
    </section>
  )
}

function Why({ t }: { t: SiteContent }) {
  return (
    <section className="why section-pad">
      <div className="shell why-grid">
        <div className="why-copy"><SectionHeading kicker={t.sections.whyKicker} title={t.sections.whyTitle} text={t.sections.whyIntro} /></div>
        <ul className="why-list">
          {t.why.map((item, index) => <li className="reveal" key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p><Check /></li>)}
        </ul>
      </div>
    </section>
  )
}

function Faq({ t }: { t: SiteContent }) {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()
  return (
    <section className="faq section-pad">
      <div className="shell faq-grid">
        <SectionHeading kicker={t.sections.faqKicker} title={t.sections.faqTitle} />
        <div className="faq-list">
          {t.faqs.map((item, index) => {
            const isOpen = open === index
            const buttonId = `${baseId}-button-${index}`
            const panelId = `${baseId}-panel-${index}`
            return (
              <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <h3><button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? null : index)}><span>{item.q}</span><i aria-hidden="true" /></button></h3>
                <div id={panelId} className="faq-answer" role="region" aria-labelledby={buttonId} hidden={!isOpen}><p>{item.a}</p></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

type FormErrors = Partial<Record<'name' | 'phone' | 'email' | 'location' | 'service' | 'details' | 'method' | 'consent', string>>

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: ReactNode }) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={name}>{label}<span aria-hidden="true"> *</span></label>
      {children}
      {error && <p className="field-error" id={`${name}-error`}>{error}</p>}
    </div>
  )
}

function Contact({ locale, t }: { locale: Locale; t: SiteContent }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const privacyPath = localizedPath(locale, true)
  const contact = getContactDetails(locale)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get('_honey')) { setStatus('success'); return }
    const next: FormErrors = {}
    const required = ['name', 'phone', 'email', 'location', 'service', 'details', 'method'] as const
    required.forEach((name) => { if (!String(data.get(name) ?? '').trim()) next[name] = t.contact.required })
    const email = String(data.get('email') ?? '')
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = t.contact.emailError
    if (data.get('consent') !== 'on') next.consent = t.contact.consentError
    setErrors(next)
    if (Object.keys(next).length) {
      const first = form.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }
    setStatus('loading')
    try {
      data.set('_subject', locale === 'el' ? 'Νέο αίτημα — Ιόνια Τεχνική' : 'New enquiry — Ionian Technical')
      data.set('_template', 'table')
      data.set('_url', window.location.href)
      data.set('language', locale === 'el' ? 'Greek' : 'English')
      const response = await fetch(contactConfig.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      })
      if (!response.ok) throw new Error('Form submission failed')
      setStatus('success')
      setErrors({})
      formRef.current?.reset()
    } catch {
      setStatus('error')
    }
  }

  const inputProps = (name: keyof FormErrors) => ({ 'aria-invalid': Boolean(errors[name]), 'aria-describedby': errors[name] ? `${name}-error` : undefined })
  return (
    <section id="contact" className="contact section-pad">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <p className="section-kicker">{t.contact.kicker}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <div className="direct-contact">
            <p>{t.contact.direct}</p>
            <div>
              <a href={`tel:${contact.dial}`}><Phone />{t.contact.call}</a>
              <a href={`https://wa.me/${contact.whatsapp}`}><Message />{t.contact.whatsapp}</a>
              <a href={`mailto:${contact.email}`}><Mail />{t.contact.fields.email}</a>
            </div>
          </div>
        </div>
        <form ref={formRef} className="contact-form" onSubmit={submit} noValidate>
          <div className="form-grid">
            <Field label={t.contact.fields.name} name="name" error={errors.name}><input id="name" name="name" autoComplete="name" placeholder={t.contact.placeholders.name} {...inputProps('name')} /></Field>
            <Field label={t.contact.fields.phone} name="phone" error={errors.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder={t.contact.placeholders.phone} {...inputProps('phone')} /></Field>
            <Field label={t.contact.fields.email} name="email" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" placeholder={t.contact.placeholders.email} {...inputProps('email')} /></Field>
            <Field label={t.contact.fields.location} name="location" error={errors.location}><input id="location" name="location" autoComplete="address-level2" placeholder={t.contact.placeholders.location} {...inputProps('location')} /></Field>
            <Field label={t.contact.fields.service} name="service" error={errors.service}>
              <select id="service" name="service" defaultValue="" {...inputProps('service')}><option value="" disabled>{t.contact.placeholders.select}</option>{t.contact.services.map((item) => <option key={item}>{item}</option>)}</select>
            </Field>
            <Field label={t.contact.fields.method} name="method" error={errors.method}>
              <select id="method" name="method" defaultValue="" {...inputProps('method')}><option value="" disabled>{t.contact.placeholders.select}</option>{t.contact.methods.map((item) => <option key={item}>{item}</option>)}</select>
            </Field>
            <div className="field field-wide">
              <Field label={t.contact.fields.details} name="details" error={errors.details}><textarea id="details" name="details" rows={5} placeholder={t.contact.placeholders.details} {...inputProps('details')} /></Field>
            </div>
            <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" /></div>
            <div className={`consent field-wide${errors.consent ? ' has-error' : ''}`}>
              <input id="consent" name="consent" type="checkbox" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} />
              <label htmlFor="consent">{t.contact.fields.consent} <a href={privacyPath}>{t.contact.privacyLink}</a></label>
              {errors.consent && <p className="field-error" id="consent-error">{errors.consent}</p>}
            </div>
          </div>
          <button className="button form-submit" type="submit" disabled={status === 'loading'}>{status === 'loading' ? t.contact.sending : t.contact.send}<Arrow /></button>
          <p className="integration-note">{t.contact.integration}</p>
          {status === 'success' && <p className="form-status success" role="status"><Check />{t.contact.success}</p>}
          {status === 'error' && <p className="form-status error" role="alert">{t.contact.error}</p>}
        </form>
      </div>
    </section>
  )
}

function Footer({ locale, t, onLanguage }: { locale: Locale; t: SiteContent; onLanguage: () => void }) {
  const home = localizedPath(locale)
  const contact = getContactDetails(locale)
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand"><a className="brand" href={home}><BrandMark /><span className="brand-name"><strong>{t.companyShort}</strong><small>{t.brandLocality}</small></span></a><p>{t.footer.text}</p></div>
        <div><h2>{t.footer.navigation}</h2><ul>{t.nav.slice(0, 4).map((item) => <li key={item.href}><a href={`${home}${item.href}`}>{item.label}</a></li>)}</ul></div>
        <div><h2>{t.footer.services}</h2><ul>{t.services.slice(0, 4).map((item) => <li key={item.title}><a href={`${home}#services`}>{item.title}</a></li>)}</ul></div>
        <div><h2>{t.footer.contact}</h2><p>{t.footer.location}</p><div className="footer-contact-links"><a href={`tel:${contact.dial}`}>{contact.display}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></div><LanguageButton locale={locale} t={t} onChange={onLanguage} className="footer-language" /></div>
      </div>
      <div className="shell footer-base"><p>© {new Date().getFullYear()} {t.company}. {t.footer.rights}</p><div><a href={localizedPath(locale, true)}>{t.contact.privacyLink}</a><a href="#home">{t.footer.backTop} ↑</a></div></div>
    </footer>
  )
}

function MobileContact({ locale, t }: { locale: Locale; t: SiteContent }) {
  const contact = getContactDetails(locale)
  return (
    <aside className="mobile-contact" aria-label={t.footer.contact}>
      <a href={`tel:${contact.dial}`}><Phone />{t.contact.call}</a>
      <a href={`https://wa.me/${contact.whatsapp}`}><Message />{t.contact.whatsapp}</a>
      <a href="#contact"><Arrow />{t.quote}</a>
    </aside>
  )
}

function Privacy({ locale, t }: { locale: Locale; t: SiteContent }) {
  return (
    <main id="main" className="privacy-page">
      <div className="shell privacy-shell">
        <nav className="breadcrumb" aria-label={t.privacy.title}><a href={localizedPath(locale)}>{t.privacy.breadcrumbHome}</a><span>/</span><span aria-current="page">{t.privacy.title}</span></nav>
        <p className="section-kicker">{t.privacy.updated}</p>
        <h1>{t.privacy.title}</h1>
        <p className="privacy-intro">{t.privacy.intro}</p>
        <div className="privacy-sections">{t.privacy.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}</div>
      </div>
    </main>
  )
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) { element = document.createElement('meta'); document.head.appendChild(element) }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value))
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let link = document.head.querySelector<HTMLLinkElement>(selector)
  if (!link) { link = document.createElement('link'); link.rel = rel; document.head.appendChild(link) }
  link.href = href
  if (hreflang) link.hreflang = hreflang
}

function usePageMetadata(locale: Locale, t: SiteContent, privacy: boolean) {
  useEffect(() => {
    const origin = window.location.origin
    const path = localizedPath(locale, privacy)
    const socialImage = `${origin}${assetPath('images/hero-provisional-1536.jpg')}`
    const title = privacy ? `${t.privacy.title} | ${t.companyShort}` : t.seo.title
    const description = privacy ? t.privacy.intro : t.seo.description
    document.documentElement.lang = locale
    document.title = title
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: locale === 'el' ? 'el_GR' : 'en_GB' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: `${origin}${path}` })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: socialImage })
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: t.seo.imageAlt })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: socialImage })
    upsertLink('canonical', `${origin}${path}`)
    upsertLink('alternate', `${origin}${localizedPath('el', privacy)}`, 'el')
    upsertLink('alternate', `${origin}${localizedPath('en', privacy)}`, 'en')
    upsertLink('alternate', `${origin}${localizedPath('en', privacy)}`, 'x-default')
    let schema = document.head.querySelector<HTMLScriptElement>('#local-business-schema')
    if (!schema) { schema = document.createElement('script'); schema.id = 'local-business-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema) }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness', name: t.company,
      url: `${origin}${localizedPath(locale)}`, address: { '@type': 'PostalAddress', addressLocality: 'Lixouri', addressRegion: 'Kefalonia', addressCountry: 'GR' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Kefalonia' },
    })
  }, [locale, privacy, t])
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname)
  const locale = localeFromPath(pathname)
  const t = content[locale]
  const privacy = pathname.endsWith('/privacy')
  usePageMetadata(locale, t, privacy)

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    if (privacy) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [locale, privacy])

  function navigate(path: string) {
    window.history.pushState({}, '', path)
    setPathname(path)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  function changeLanguage() {
    const y = window.scrollY
    const next = locale === 'el' ? 'en' : 'el'
    const path = localizedPath(next, privacy)
    window.history.pushState({}, '', path)
    setPathname(path)
    window.requestAnimationFrame(() => window.scrollTo(0, y))
  }

  return (
    <>
      <Header locale={locale} t={t} privacy={privacy} onLanguage={changeLanguage} onNavigate={navigate} />
      {privacy ? <Privacy locale={locale} t={t} /> : (
        <main id="main"><Hero t={t} /><TrustStrip t={t} /><Services t={t} /><Process t={t} /><Projects t={t} /><Areas t={t} /><Why t={t} /><Faq t={t} /><Contact locale={locale} t={t} /></main>
      )}
      <Footer locale={locale} t={t} onLanguage={changeLanguage} />
      {!privacy && <MobileContact locale={locale} t={t} />}
    </>
  )
}
