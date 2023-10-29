<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![NPM][npm-shield]][npm-url]

</div>

<br />
<div align="center">
  <a href="https://github.com/lottojs/secure-headers">
    <img src=".github/logo.png" alt="Logo" width="100" height="115">
  </a>

  <h3 align="center">@lottojs/secure-headers</h3>

  <p align="center">
    Node.js middleware for implementing secure HTTP headers to fortify web application security.
    <br />
    <br />
    <a href="https://github.com/lottojs/secure-headers/issues">Report Bug</a>
    ·
    <a href="https://github.com/lottojs/secure-headers/issues">Request Feature</a>
  </p>
</div>


## About The Project

A middleware tailored for Node.js applications to set secure HTTP headers, mitigating various web vulnerabilities by enforcing headers for XSS protection, content security policy, strict transport security, MIME type sniffing prevention, and more. Initially created to serve the [@lottojs/lotto](https://github.com/lottojs/lotto) package but nothing excludes it to be also used by the community.

## Documentation
Complete API documentation is available at [lottojs.tech][documentation-url].

## Getting Started

### Installation
   ```sh
    npm i @lottojs/secure-headers
   ```
### Usage

The package provides middleware named `secureHeaders`. This middleware should be applied within your server handlers to set the necessary secure HTTP headers. These headers help in preventing various web vulnerabilities.


```typescript
    import { createServer } from 'node:http';
    import { secureHeaders } from '@lottojs/secure-headers';

    createServer(
        async (req: IncomingMessage, res: ServerResponse) => {
                ...

                const secureHeaders = {
                    ...
                    xContentTypeOptions: 'nosniff',
                    xXssProtection: '1; mode=block',
                    contentSecurityPolicy: "default-src 'self'",
                    strictTransportSecurity:
                        'max-age=31536000; includeSubDomains; preload',
                    xFrameOptions: 'DENY',
                    cacheControl: 'no-store, no-cache, must-revalidate, private',
                    ...
                }

                secureHeaders(secureHeaders)(res, next())
                ...
        },
    )
```
## Contributing

All forms of contributions are more than welcome! You can contribute in the following ways:

- Create an Issue
- Create a Pull Request
- Create third-party middlewares
- Share with your friends
- Make your application with `Lotto`.

For more details, see [Contribution Guide](./CONTRIBUTING.md).

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[contributors-shield]: https://img.shields.io/github/contributors/lottojs/secure-headers.svg?style=for-the-badge
[contributors-url]: https://github.com/lottojs/secure-headers/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lottojs/secure-headers.svg?style=for-the-badge
[forks-url]: https://github.com/lottojs/secure-headers/network/members
[stars-shield]: https://img.shields.io/github/stars/lottojs/secure-headers.svg?style=for-the-badge
[stars-url]: https://github.com/lottojs/secure-headers/stargazers
[issues-shield]: https://img.shields.io/github/issues/lottojs/secure-headers.svg?style=for-the-badge
[issues-url]: https://github.com/lottojs/secure-headers/issues
[license-shield]: https://img.shields.io/github/license/lottojs/secure-headers.svg?style=for-the-badge
[license-url]: https://github.com/lottojs/secure-headers/blob/master/LICENSE.txt
[npm-shield]: https://img.shields.io/npm/v/@lottojs/secure-headers?style=for-the-badge&logo=npm&logoColor=FFFFFF&labelColor=555555&color=CB0001
[npm-url]: https://www.npmjs.com/package/@lottojs/secure-headers
[documentation-url]: https://lottojs.tech
