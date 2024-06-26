import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dotenv from 'dotenv'
import { sentryVitePlugin } from '@sentry/vite-plugin'

import { getLoadContext } from './loadContext'

export default defineConfig(({ mode }) => {
  dotenv.config({
    path: './.dev.vars',
  })

  let { env } = process

  return {
    build: {
      sourcemap: true,
    },
    plugins: [
      remixCloudflareDevProxy({ getLoadContext }),
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
      }),
      tsconfigPaths(),
      sentryVitePlugin({
        org: env.SENTRY_ORG,
        project: env.SENTRY_PROJECT,
        authToken: env.SENTRY_AUTH_TOKEN,
      }),
    ],
  }
})
