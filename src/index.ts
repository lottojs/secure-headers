import { SecureHeaders } from '@core/secure'
import { Context, Middleware, SecurityHeaders } from '@core/types'

/**
 * Apply Security Headers middleware
 *
 * @param securityHeaders The security headers to be applied.
 * @returns Middleware Function for handling security headers
 */
export function secureHeaders(securityHeaders?: SecurityHeaders): Middleware {
    const secureHeadersInstance = new SecureHeaders(securityHeaders)

    return async ({ res, next }: Context) => {
        await secureHeadersInstance.apply(res, next)
    }
}
