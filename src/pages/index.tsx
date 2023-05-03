import Head from 'next/head';
import {Inter} from '@next/font/google';
import HomePage from "@/pages/HomePage";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>دیان همراه فردا</title>
                <meta name="description" content=" 021-96646 info@dianhamrah.ir با دیان همراه فردا مطمئن قدم بردارید. جهت راهنمایی و دریافت مشاوره رایگان با مشاوران ما تماس حاصل فرمائید. ."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/assets/images/Logos/DianHamrah.jpg"/>
                <meta name="enamad" content="879858"/>
            </Head>
            <main className="main bg-sky-50">
                <HomePage/>
            </main>
        </>
    )
}
