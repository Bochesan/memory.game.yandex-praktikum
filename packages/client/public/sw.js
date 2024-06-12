const CACHE_NAME = 'memory-game-cache-v1'

self.addEventListener('install', async () => {
  await caches.open(CACHE_NAME)
})

self.addEventListener('fetch', async event => {
  if (event.request.url.startsWith('chrome-extension://')) return

  const cacheResponse = await caches.match(event.request)

  if (cacheResponse) return cacheResponse

  const cloneRequest = event.request.clone()
  const response = await fetch(cloneRequest)
  if (!response || response.status !== 200 || response.type !== 'basic')
    return response

  const responseToCache = response.clone()
  const cache = await caches.open(CACHE_NAME)
  cache.put(event.request, responseToCache)
  return response
})

self.addEventListener('activate', () => {
  caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(name => {
        if (name !== CACHE_NAME) {
          caches.delete(name)
        }
      })
    )
  })
})
