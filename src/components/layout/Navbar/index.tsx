import Image from 'next/image'
import Link from 'next/link'

const logo = '/logo.png';

const Navbar = () =>
  <header >
    <div className='container mx-auto p-2 '>
      <div className="flex basis-2">
        <Link href='/'>
          <Image
            src={logo}
            alt="logo"
            width={102}
            height={50}
          />
        </Link>
      </div>
    </div>
  </header>;

export default Navbar;