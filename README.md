## Remix + Cloudflare + Sentry

To reproduce bug, please

1. Install deps

```
pnpm i
```

2. Create a sentry project on https://sentry.io

3. Create an `.env` file and fill it with Sentry credentials

```
SENTRY_ORG=""
SENTRY_PROJECT=""
SENTRY_DSN=""
SENTRY_AUTH_TOKEN=""
```

4. Copy the `.env` file to an `.dev.vars` file for wrangler to pick them up when running the app

5. Build and run the app

```
pnpm preview
```

6. Go to http://localhost:8788

7. Open your project on https://sentry.io, you should see an error with wrong source maps.
