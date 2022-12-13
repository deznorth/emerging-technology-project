import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Head from 'next/head'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={inter.className}>
        <h1 className='global-title'>NextJS Demo</h1>
        <Component {...pageProps} />
      </div>
    </>
  )
}
export default MyApp
