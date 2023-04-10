import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Layout from "@/common/Layout/Layout";
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";

import {QueryClient, QueryClientProvider} from "react-query";

import {Provider} from "react-redux";
import {store} from "../../redux/store"

type NextPageWithLayoutAndAuth = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
    auth?: boolean;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayoutAndAuth;
};


export default function App({Component, pageProps}: AppPropsWithLayout) {
    const queryClient = new QueryClient();
    const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

    return getLayout(
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </Provider>
    );
}
