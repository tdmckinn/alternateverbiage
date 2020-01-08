import * as React from 'react'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  title,
}) => (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/static/favicon.png" />
      </Head>
      <style global jsx>{`
        body {
          margin: 0;
          background: black;
        }

        .hero {
         width: 100vw;
         height: 100vh;
         display: flex;
         justify-content: center;
         align-items: center;
         text-align: center;
         background-image: url(https://yybxmw.bn.files.1drv.com/y4mfnMjZeXuEJpBFQiE3u3B51yIJ7fg1FSgBeAVUhB4DLVeER4tK_hU1NSSZ3u4i6ZA09tJilMZ9UyqextWVuA1yCMtPf6SUcJKzSxI7ze2DIHlMT5Hda11nw5dC6sca4cWouESKcpLe3SpSxPTmoqMq5M_BaichQvkiFvf_u2wDYzswC6tvcOj2hECs7uNlGwGi2QG_8Kxc3yh89q58cfUXw/logo_transparent.png?psid=1);
         background-size: contain;
         background-position: center center;
         background-repeat: no-repeat;
         background-attachment: fixed;
        }
      `}</style>
      <section className="hero">
      </section>
    </div>
  )

export default Layout
