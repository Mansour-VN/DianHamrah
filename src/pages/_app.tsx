import '@/styles/globals.css'
import "../components/BranchesCard/BranchesCard.css"
import type { AppProps } from 'next/app'
import Layout from "./../components/Layout/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
