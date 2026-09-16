import { useState } from "react";
import NavbarData from "../data/NavbarData"
import {useNavigate} from "react-router-dom";
import Button from "../ui/Button";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
   <>
<nav className="bg-green-800 px-3 py-3 h-17 sm:px-6 sm:py-4 sticky top-0 z-50">
    <div className="flex items-center justify-between">
    <h1 className="text-white text-xl sm:text-2xl font-bold shadow-100 cursor-pointer "
    onClick={() => navigate("/")}>
        BlogNest
    </h1>

    <Button
      className="text-black text-4xl sm:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
      text={menuOpen ? "Close" : "☰"}
    >
      ☰
    </Button>

    <div className="hidden sm:flex items-center gap-3 sm:gap-8 text-gray-50 text-sm">
        {NavbarData.map((item, index) => (
          <p className="text-white cursor-pointer hover:text-gray-300" key={index}>
            {item.name}
          </p>
        ))}
    </div>
    </div>

    {menuOpen && (
    <div className="flex flex-col items-center gap-4 mt-4 sm:hidden">
        {NavbarData.map((item, index) => (
          <p className="text-white cursor-pointer hover:text-gray-300" key={index}>
            {item.name}
          </p>
        ))}
    </div>
    )}
</nav>
   </>
  )
}