import Image from 'next/image'
import Link from 'next/link'

const logo = '/logo.png';

const Navbar = () =>
  <header className='relative z-20 shadow-sm shadow-slate-300'>
    <div className='container flex mx-auto p-2 sm:w-full lg:w-[1024px] xl:w-[1080px]'>
      <Link href='/'>
        <Image
          src={logo}
          alt="logo"
          width={102}
          height={50}
        />
      </Link>
      <div className='flex w-full items-center justify-center '>
        <Link href='/'>Find a product</Link>
        <Link href='/add-product'>Add product</Link>
      </div>
    </div>
  </header>;

export default Navbar;