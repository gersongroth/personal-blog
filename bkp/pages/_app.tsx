import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/index.css'

function Home({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Home
