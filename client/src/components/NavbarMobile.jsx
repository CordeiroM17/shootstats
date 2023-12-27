/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

const NavbarMobile = ({ show }) => {
    let location = useLocation();
    const [pathname, setPathname] = useState('/dashboard');
    const { logout } = useAuth();
  
    useEffect(() => {
      setPathname(location.pathname);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <aside className={(show ? 'left-0' : '-left-full') + ' asideMobile'}>
      {/* Change for another thing */}
      <div className="flex justify-center items-center">
        <Logo />
      </div>
      <nav className="flex flex-col gap-2">
        <Link to={'/dashboard'} className={pathname === '/dashboard' ? 'activeLink' : 'inactiveLink'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={pathname === '/dashboard' ? 'activeIcon' : 'inactiveIcon'}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Dashboard
        </Link>
        <Link to={'/shooters'} className={pathname === '/products' ? 'activeLink' : 'inactiveLink'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={pathname === '/shooters' ? 'activeIcon' : 'inactiveIcon'}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          Shooters
        </Link>
        <Link to={'/profile'} className={pathname === '/profile' ? 'activeLink' : 'inactiveLink'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={pathname === '/profile' ? 'activeIcon' : 'inactiveIcon'}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
          Profile
        </Link>
        <Link to={'/settings'} className={pathname === '/settings' ? 'activeLink' : 'inactiveLink'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={pathname === '/settings' ? 'activeIcon' : 'inactiveIcon'}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          Settings
        </Link>
        <Link
          to={'/login'}
          onClick={() => {
            logout();
          }}
          className={'inactiveLink justify-self-end'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={'inactiveIcon'}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Logout
        </Link>
      </nav>
    </aside>
  );
};

export default NavbarMobile;
