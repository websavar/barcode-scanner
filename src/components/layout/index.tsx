import Head from 'next/head'
import Navbar from 'components/layout/Navbar'

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Supply Chain Management</title>
        <meta name="description" content="Frontend Coding Challenge" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <footer></footer>
    </>
  );
}

export default Layout;