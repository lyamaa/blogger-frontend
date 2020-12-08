import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
          ></link>
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"
          ></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp