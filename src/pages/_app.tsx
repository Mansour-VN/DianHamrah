import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/common/Layout/Layout";
import { NextPage } from "next";
import { ReactNode, ReactElement } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider, } from "react-query";

type NextPageWithLayoutAndAuth = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayoutAndAuth;
};


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = new QueryClient();
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ToastContainer />
    </QueryClientProvider>
  );
}
