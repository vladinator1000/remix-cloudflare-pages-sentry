## Remix + Cloudflare + Sentry

To reproduce bug, please

1. Install deps

```
pnpm i
```

2. Create a sentry project on https://sentry.io

3. Create a `.dev.vars` file and fill it with Sentry credentials

```
SENTRY_ORG=""
SENTRY_PROJECT=""
SENTRY_DSN=""
```

4. Build and run app

```
pnpm preview
```

5. Go to http://localhost:8788

6. Open your project on https://sentry.io, you should see an error with missing source maps.
