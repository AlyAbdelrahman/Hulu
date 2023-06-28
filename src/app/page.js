import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import './globals.css'

export const metadata = {
  title: 'Hulu 2.0',
  description: 'new Hulu is here',
}
export default function Home() {
  return (
    <div>
      <Head>
        <title>hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}
