import { GetLoadContextFunction } from '@remix-run/cloudflare-pages'
import { Toucan } from 'toucan-js'
import { type PlatformProxy } from 'wrangler'

type Cloudflare = Omit<PlatformProxy<Env>, 'dispose'>

declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    cloudflare: Cloudflare
    bindings: Env
    sentry: Toucan
  }
}

export const getLoadContext: GetLoadContextFunction<Env> = async ({
  request,
  context,
}) => {
  const { cloudflare } = context
  const bindings = cloudflare.env

  const sentry = new Toucan({
    dsn: bindings.SENTRY_DSN,
    request,
    context: cloudflare.ctx,
  })

  return {
    cloudflare,
    bindings,
    sentry,
  }
}
