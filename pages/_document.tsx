import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  name: 'Software Developer',
  datePosted: '2020/01/01',
  title: 'Software Developer',
  industry: 'Software Development',
  description: 'Software Factory',
  employmentType: 'Contractor',
  validThrough: '2020/01/07',
  jobLocation: {
    '@type': 'Place',
    name: 'Globy Solutions | Software Factory',
    email: 'info@globy-solutions.tech',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chacabuco 1565',
      addressLocality: 'Buenos Aires',
      addressRegion: 'CABA',
      postalCode: 'B1066',
    },
  },
}
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }
  render() {
    return (
      <Html lang="es" className="dark">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossOrigin="anonymous"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}