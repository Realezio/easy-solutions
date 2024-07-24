export default defineAppConfig({
  umami: {
    useDirective: true,
    version: 2,
    ignoreLocalhost: true,
    debug: process.env.NODE_ENV === 'development',
  },
})
