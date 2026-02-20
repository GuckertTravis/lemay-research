import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="color-scheme" content="light only" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --color-white: #ffffff;
            --color-light-gray: #f7f7f7;
            --color-gray: #6b7280;
            --color-dark-gray: #374151;
            --color-text: #111111;
          }
          
          * {
            color-scheme: light only !important;
          }
          
          html, body {
            background-color: #ffffff !important;
            color: #111111 !important;
          }
        ` }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
