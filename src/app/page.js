import Header from '@/components/header'
import Head from 'next/head'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'

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
      <Navbar/>
    </div>
  )
}
