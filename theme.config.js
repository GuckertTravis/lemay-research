export default {
  logo: (
    <span style={{
      fontWeight: 700,
      fontSize: '1rem',
      letterSpacing: '-0.01em',
      fontFamily: "'IBM Plex Sans', sans-serif",
      color: '#111111'
    }}>
      LEMAY RESEARCH
    </span>
  ),
  project: {
    link: 'https://github.com/GuckertTravis/lemay-research'
  },
  docsRepositoryBase: 'https://github.com/GuckertTravis/lemay-research',
  footer: {
    text: (
      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
        © {new Date().getFullYear()} LeMay Inc. Delaware C-Corporation. All rights reserved.
      </span>
    )
  },
  primaryHue: 0,
  darkMode: false,
  nextThemes: {
    defaultTheme: 'light',
    forcedTheme: 'light',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    float: true,
    backToTop: true,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="LeMay Research" />
      <meta property="og:description" content="Technical research and architecture documentation from LeMay Inc." />
      <meta name="color-scheme" content="light only" />
    </>
  )
}
