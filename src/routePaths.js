const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

export function routePath(path = '/') {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`
  return `${basePath}${normalizedPath}`
}

export function getCurrentRoute() {
  let path = window.location.pathname

  if (basePath && path.startsWith(basePath)) {
    path = path.slice(basePath.length)
  }

  return path.replace(/\/+$/, '') || '/'
}
