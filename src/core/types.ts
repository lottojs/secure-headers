import { ServerResponse } from 'node:http'

export type Params = Record<string, string>

export interface ParsedQuery {
    [key: string]: undefined | string | string[] | ParsedQuery | ParsedQuery[]
}

export interface MatchedGroups extends Record<string, any> {
    query?: string
}

export interface Response<T = unknown> extends ServerResponse {
    /**
     * Send application/json response.
     *
     * Examples:
     *
     *     res.json(null);
     *     res.json({ fruit: 'apple' });
     *     res.status(200).json('oh we are here!');
     * @param body Data to be transformed on JSON.
     * @returns Response
     */
    json: (body?: unknown) => Response<T>

    /**
     * Set status `code`.
     * @param code HTTP status code e.g. 200, 201, 400, 404...
     * @returns Response
     */
    status: (code: number) => Response<T>

    /**
     * Send text/plain response.
     *
     * Examples:
     *
     *     res.text('hello world!');
     *     res.status(200).text('oh we are here!');
     * @param body Data to be transformed on text.
     * @returns Response
     */
    text: (body: unknown) => Response<T>
}

export type NextFunction = (...args: any[]) => void

export type Context = {
    /**
     * Response Object
     */
    res: Response

    /**
     * Next Function, mostly used on middlewares in order to can go ahead
     * to the reqeuest.
     */
    next: NextFunction
}

export type Middleware = (ctx: Context) => void

export interface SecurityHeaders {
    /**
     * Enable content security policy.
     */
    contentSecurityPolicy?: string

    /**
     * Enable strict transport security (only for HTTPS connections).
     */
    strictTransportSecurity?: string

    /**
     * Disable framing to prevent clickjacking.
     */
    xFrameOptions?: string

    /**
     * Prevents MIME-based attacks and forces the browser to use the declared content type.
     */
    xContentTypeOptions?: string

    /**
     * Prevent cross-site scripting attacks.
     */
    xXssProtection?: string

    /**
     * Controls information sent in the Referer header.
     */
    referrerPolicy?: string

    /**
     * Defines the functionalities that can be used in the web page e.g. geolocation, camera, microphone.
     */
    featurePolicy?: string

    /**
     * Enforces Certificate Transparency for a domain's SSL/TLS certificates.
     */
    expectCT?: string

    /**
     * Controls whether the target page can use features like window.opener.
     */
    crossOriginOpenerPolicy?: string

    /**
     * Controls whether a resource can be embedded in another page.
     */
    crossOriginEmbedderPolicy?: string

    /**
     * Defines which origins are allowed to make requests for resources.
     */
    crossOriginResourcePolicy?: string

    /**
     * Sets a policy for a wide range of browser features and APIs.
     */
    permissionsPolicy?: string

    /**
     * Specifies the presentation and file name of a response.
     */
    contentDisposition?: string

    /**
     * Prevent browser from caching and storing sensitive data.
     */
    cacheControl?: string
}
