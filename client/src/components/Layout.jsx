/* eslint-disable react/prop-types */
import { useState } from 'react'; 
import Logo from './Logo';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="h-screen">
      <div className="md:hidden flex items-center p-4 text-black">
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <button onClick={() => setShowNav(false)} className={(showNav ? 'fixed' : 'hidden') + ' z-10 top-3 right-5 transition-all text-white'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={'w-8 h-8'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-4">
          <Logo />
        </div>
      </div>
      <div className='flex'>
        <NavbarDesktop />
        <NavbarMobile show={showNav}/>
        <section className="section-container">{children}</section>
      </div>
    </div>
  );
}
