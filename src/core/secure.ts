import { NextFunction, Response, SecurityHeaders } from '@core/types'
import { camelToKebab } from '@utils/camel-to-kebab'

export interface AbstractCors {
    apply: (res: Response, next: NextFunction) => Promise<void>
}

export class SecureHeaders implements AbstractCors {
    private securityHeaders?: SecurityHeaders

    constructor(securityHeaders?: SecurityHeaders) {
        this.securityHeaders = securityHeaders
    }

    /**
     * Apply secure headers.
     * @param res Response
     * @param next NextFunction
     */
    public async apply(res: Response, next: NextFunction): Promise<void> {
        const defaultHeaders: SecurityHeaders = {
            xContentTypeOptions: 'nosniff',
            xXssProtection: '1; mode=block',
            contentSecurityPolicy: "default-src 'self'",
            strictTransportSecurity:
                'max-age=31536000; includeSubDomains; preload',
            xFrameOptions: 'DENY',
            cacheControl: 'no-store, no-cache, must-revalidate, private',
        }

        const mergedHeaders = { ...defaultHeaders, ...this.securityHeaders }

        Object.entries(mergedHeaders).forEach(([header, value]) => {
            if (value) {
                const kebabCaseHeader = camelToKebab(header)
                res.setHeader(kebabCaseHeader, value)
            }
        })

        next()
    }
}
