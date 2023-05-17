import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import { useState } from 'react';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleClick() {
    setMenuOpen((current) => !current);
  }
  return (
    <>
      <header className="absolute w-full flex justify-between px-6 py-8">
        <Logo />
        <nav
          className={`md:flex max-md:absolute max-md:top-[100px] max-md:z-50 max-md:w-full max-md:px-4 max-md:left-0 max-md:origin-top-right max-md:duration-300 max-md:transition-all ${
            menuOpen ? 'flex opacity-100' : 'max-md:opacity-0'
          }`}
        >
          <ul className="navbar flex relative font-display md:text-white md:gap-x-12 max-md:flex-col max-md:bg-white max-md:w-full max-md:text-center text-dark-grayish-blue max-md:gap-y-8 max-md:py-12 max-md:before:bg-white max-md:before:h-8 max-md:text-lg max-md:before:w-8 max-md:before:absolute max-md:before:top-[-1.825rem] max-md:before:right-0">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a
                className="transition-colors md:hover:text-white md:hover:bg-white/30 hover:bg-yellow/60 font-body text-black uppercase md:bg-white bg-yellow text-sm rounded-full md:py-3 md:px-6 py-4 px-6"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={handleClick} className="md:hidden">
          <HamburgerIcon />
        </button>
      </header>
    </>
  );
}
