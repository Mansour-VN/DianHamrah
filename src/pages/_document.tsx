import { Html, Head, Main, NextScript } from 'next/document'
import HomePage from "@/pages/HomePage";

export default function Document() {
  return (
    <Html lang="en" dir="rtl">
      <Head />
      <body>
        <Main />
        <HomePage/>
        <NextScript />
      </body>
    </Html>
  )
}
