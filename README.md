# Ιόνια Τεχνική Κεφαλονιάς

Sitio bilingüe (griego/inglés) para una empresa de reparaciones, mantenimiento y reformas con base en Lixouri y servicio en toda Kefalonia.

## Desarrollo

Se recomienda Node.js 22.

```bash
nvm use 22
npm install
npm run dev
```

Validación:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Contenido editable

- Traducciones y contenido: `src/i18n/content.ts`
- Teléfono, WhatsApp, email, endpoint del formulario y datos legales: `src/config/contact.ts`
- Sistema visual y responsive: `src/styles.css`
- Componentes y secciones: `src/App.tsx`

## Fotografías provisionales

Las imágenes actuales están identificadas en la interfaz como material temporal, no como proyectos reales. Para sustituirlas sin cambiar componentes, exporte cada fotografía real en los nombres y tamaños de `public/images`:

- `hero-provisional-768.webp` y `hero-provisional-1536.webp`
- `hero-provisional-768.jpg` y `hero-provisional-1536.jpg`
- `bathroom-provisional-768.webp` y `bathroom-provisional-1536.webp`
- `bathroom-provisional-768.jpg` y `bathroom-provisional-1536.jpg`

El script reproducible `work/optimize_images.py` espera los PNG fuente dentro de `work/image-sources`.

## Antes de publicar

1. Completar `src/config/contact.ts` con teléfono, WhatsApp, email, URL final y endpoint de formulario.
2. Sustituir las fotografías provisionales y actualizar los proyectos en `src/i18n/content.ts`.
3. Reemplazar `https://example.com` en `public/robots.txt` y `public/sitemap.xml` por el dominio definitivo.
4. Completar los datos fiscales y legales de la política de privacidad.
5. Conectar el endpoint del formulario y confirmar su política de retención de datos.
