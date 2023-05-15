import Head from 'next/head'
import Navbar from '@/components/layout/Navbar'
import ScanProduct from './ScanProduct'

export default function HomePage() {

  return (
    <div className=''>
      <Head>
        <title>Supply Chain Management</title>
        <meta name="description" content="Frontend Coding Challenge" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />

      <main className=''>
        <ScanProduct />
      </main>

      <footer className=''>
      </footer>
    </div>
  )
}