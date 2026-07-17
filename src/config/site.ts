const viteBaseUrl = import.meta.env.BASE_URL || '/'

export const siteBasePath = viteBaseUrl === '/' ? '' : `/${viteBaseUrl.replace(/^\/+|\/+$/g, '')}`

export function withBasePath(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return siteBasePath ? `${siteBasePath}${normalizedPath}` : normalizedPath
}

export function stripBasePath(pathname: string) {
  if (!siteBasePath) return pathname
  if (pathname === siteBasePath) return '/'
  return pathname.startsWith(`${siteBasePath}/`) ? pathname.slice(siteBasePath.length) : pathname
}

export function assetPath(path: string) {
  return `${viteBaseUrl}${path.replace(/^\/+/, '')}`
}
