import {useState} from 'react';
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px] cursor-pointer"/>

      <ul className="list-none md:flex hidden justify-end items-center flex-1 text-white">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`ml-10 font-epilogue font-normal cursor-pointer text-[16px] hover:text-red-400 transition-all ${index === navLinks.length - 1 ? 'mr-0' : 'mr-20'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}  
      </ul> 

      <div className="md:hidden">
        <img src={toggle ? close : menu} alt="menu" className="w-[38px] h-[38px] object-contain" onClick={() => setToggle((prev) => !prev)}/>
        
        <div className={`${toggle ? 'flex' : 'hidden'} border-[0.5px] border-gray-800 flex bg-red-400 absolute top-20 right-0 mx-0 my-[-10px] min-w-[140px] h-[500px] rounded-xl p-[100px] py-20 z-10 sidebar`}>
          <ul className={`list-none flex justify-end flex-col flex-4`}>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`relative left-[-80px] top-[-100px] mb-[40px] font-epilogue font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar