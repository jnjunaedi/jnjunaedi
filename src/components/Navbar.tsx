import { useState } from 'react';

function Navbar() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <nav className="flex pt-2 px-3 items-center sm:flex-wrap">
      <ul className={`gap-5 sm:static absolute left-0 right-0 top-12 p-3 sm:flex ${isActive ? 'flex flex-col bg-white' : 'hidden'}`}>
        <li className="cursor-pointer">
          <a href="#" className="sm:underline">
            Home
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#about" className="sm:underline">
            About
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#projects" className="sm:underline">
            Projects
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#experience" className="sm:underline">
            Experience
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#skills" className="sm:underline">
            Skills
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#education" className="sm:underline">
            Education
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#contacts " className="sm:underline">
            Contacts
          </a>
        </li>
      </ul>
      <div className="p-1.5 cursor-pointer sm:hidden" onClick={() => setIsActive(!isActive)}>
        {isActive ? <span className="text-2xl">{'x'}</span> : <span className="text-2xl">{'<>'}</span>}
      </div>
    </nav>
  );
}

export default Navbar;
