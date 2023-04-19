import type { AppProps } from 'next/app'
import { fetcher } from '@/util/fetcher'
import { SWRConfig } from 'swr'
import './styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}
