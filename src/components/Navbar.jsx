import { useState, useContext} from "react";
import NavbarData from "../data/NavbarData"
import {useNavigate} from "react-router-dom";
import Button from "../ui/Button";
import { MdNightlight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
   <>
<nav className="bg-white text-black dark:bg-gray-800 dark:text-white 
 px-3 py-3 h-17 sm:px-6 sm:py-4 sticky top-0 z-50  ">
    <div className="flex items-center justify-between">

    <h1 className="text-black dark:text-white  text-xl sm:text-2xl font-bold shadow-100 cursor-pointer "
    onClick={() => navigate("/")}>
        BlogNest
    </h1>
   
   <div>
    <button onClick={toggleDarkMode}>
      <MdLightMode className="text-black  ml-245 dark:text-white mt-2 text-lg" />
    </button>
{/* 
    <button>
      <MdNightLight className="text-black text-2xl ml-50 dark:text-white " />
    </button> */}

    <Button
      className="text-white text-4xl sm:hidden  dark:text-white"
      onClick={() => setMenuOpen(!menuOpen)}
      text={menuOpen ? "Close" : "☰"}
    >
      ☰
    </Button>
    </div>

    <div className="hidden sm:flex items-center gap-3 sm:gap-8 text-gray-50 text-sm">
        {NavbarData.map((item, index) => (

          <p className="text-black cursor-pointer hover:text-gray-300 dark:text-white 
        " key={index} onClick={() => navigate(item.path)}>
            {item.name}
          </p> 
        ))}
    </div>
    </div>

    {menuOpen && (
      
    <div className="flex flex-col items-center gap-4 mt-4 sm:hidden">
        {NavbarData.map((item, index) => (
          <p className="text-black cursor-pointer hover:text-gray-900  dark:text-white"
           key={index}>
            {item.name}
          </p>
        ))}
    </div>
    )}
</nav>
   </>
  )
}