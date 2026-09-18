import facebook from "../assets/facebook.png";
import instagram from "../assets/insta.jpeg";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import cont from "../assets/cont.jpeg";
import email from "../assets/email.png";
export default function Contact() {
  return (
    <>
    <div className="bg-white
    text-text dark:bg-gray-800 dark:text-white border-b border-gray-600 px-3 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5 
    flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between text-sm">
    
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
        <div className="flex items-center gap-2">
            <img src={email} alt="" className="w-6 h-6 rounded-full " />
            <p>contact@example.com</p>
        </div>

        <div className="flex items-center gap-2">
            <img src={cont} alt="contact" className="w-4 h-4 rounded-full" />
            <p>+1 (123) 456-7890</p>
        </div>
    </div>

    <div className="flex items-center gap-2">
        <img src={facebook} alt="Facebook" className="w-6 h-6 rounded-full cursor-pointer" />
        <img src={instagram} alt="Instagram" className="w-4 h-4 rounded-full cursor-pointer" />
        <img src={twitter} alt="Twitter" className="w-4 h-4 rounded-full cursor-pointer" />
        <img src={linkedin} alt="Linkedin" className="w-5 h-5 rounded-full cursor-pointer" />
    </div>

</div>
    </>
  );
}