import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'
 const Navbar = () => {

  const router = useRouter();
  return (
    <>
      <nav className='flex flex-wrap items-center p-3 bg-blue-400 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
           
            <span className='flex flex-wrap items-center mt-3 font-sans text-xl font-bold tracking-wide text-white'>
           <span className="mr-3"> <Image src="/terminal.svg" height={43.25}  width={50}  /></span> <h1 className="mt-2">The Linux command line</h1>
            </span>
          </a>
        </Link>
        <button className='inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-green-600 lg:hidden hover:text-white'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='flex flex-col items-start w-full mt-5 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='/'>
          
              <a className={router.pathname == "/" ? "border-b-4 border-blue-800 items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto " : 
              "items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto"}>
                Home
              </a>
            </Link>
            <Link href='/find'>
            <a className={router.pathname == "/find" ? "border-b-4 border-blue-800 items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto " : 
            "items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto"}>
                Find
              </a>
            </Link>
            <Link href='/deleting'>
            <a className={router.pathname == "/deleting" ? "border-b-4 border-blue-800 items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto " : 
            "items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto"}>
                Deleting
              </a>
            </Link>
            <Link href='/permissions'>
            <a className={router.pathname == "/permissions" ? "border-b-4 border-blue-800 items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto " : 
            "items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto"}>
                Permissions
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar