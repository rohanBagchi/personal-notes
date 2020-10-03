# link rel preload, prefetch & preconnect

preload = for resources we will need in the same page

- usecase: load a script and keep it ready in cache for use when required by appending to body
- usecase: load a font and keep it ready in cache for use when required from CSS

prefetch = for resources we will need in the next / subsequent pages.

preconnect = to pre emptively setup a connection to a resource so as to improve perceived page speed. this saves on time spent in redirects etc. Kept for ~10seconds.
