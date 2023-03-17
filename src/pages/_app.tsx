import '@/styles/globals.css';
import { useRouter } from "next/router";

// import "../components/BranchesCard/BranchesCard.css"
import type { AppProps } from 'next/app'
import Layout from "@/common/Layout/Layout";
export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  console.log(asPath)
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
