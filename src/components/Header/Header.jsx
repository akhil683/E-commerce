import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import SearchBox from "./SearchBox";
import Cart from "../Cart";
import { Context } from "../../utils/context";

const Header = () => {

  const [ scrolled, setScrolled ] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
    <header className={`h-16 bg-zinc-900 z-50 text-zinc-100 p-4 ${scrolled ? 'sticky top-0 animate-header' : ''}`}>
      <nav className="flex justify-between items-center max-w-[850px] m-auto">
        <h1 className="text-2xl sm:text-3xl text-green-300">
          OurStore
        </h1>

        <ul className="sm:flex hidden gap-4 text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>

        <div className="flex gap-4">
          <TbSearch className="text-2xl" />
          <AiOutlineHeart className="text-2xl" />
          <span className="relative">
            <CgShoppingCart className="text-2xl" />
            <span className="absolute min-w-[15px] text-center -top-2 -right-2 px-[2.5px] bg-violet-800 rounded-full text-xs">5</span>
          </span>
        </div>

      </nav>
    </header>
    </>
  )
}

export default Header;
