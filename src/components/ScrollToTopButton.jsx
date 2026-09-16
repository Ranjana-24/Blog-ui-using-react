import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
export default function ScrollToTopButton() {
    const [showbtn, setShowbtn] = useState(false);

    useEffect(() => {
    const handleScroll = () =>{
        if(window.scrollY > 200){
            setShowbtn(true);
        }else{
            setShowbtn(false);
        }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
    },[]);
    
    if(!showbtn) return null;

    // handle scroll btn
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return(
        // <div className="bg-green-100">
        <Button 
        className = "fixed right-4 bottom-5 z-10 bg-green-100 mb-5 ml-390"
        onClick = {scrollToTop}
        >
        <FaArrowUp />
        </Button>
        // </div>
    )
}