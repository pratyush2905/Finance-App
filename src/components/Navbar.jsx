import React,{useState} from "react";
import { HiArrowCircleDown, HiArrowLeft, HiArrowRight, HiArrowSmRight, HiMenu, HiMenuAlt1, HiMenuAlt2, HiOutlineAcademicCap, HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";


const Navbar = () => {
  const [nav,setNav]=useState(false);

  const handleNav = () =>{
    setNav(!nav)
  }



  return (
    <div className="text-zinc-50 flex justify-between items-center h-24 mx-auto max-w-[1240px] px-4 ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <HiArrowLeft size={32}/> : <HiMenuAlt1 size={32}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-[#00df9a] bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="p-4">
          <li className="p-4 border-b border-b-[#00df9a]">Home</li>
          <li className="p-4 border-b border-b-[#00df9a]">Company</li>
          <li className="p-4 border-b border-b-[#00df9a]">Resource</li>
          <li className="p-4 border-b border-b-[#00df9a]">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
