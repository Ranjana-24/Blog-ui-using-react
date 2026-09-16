import { TfiFaceSad } from "react-icons/tfi";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function ErrorMsg() {
     const navigate = useNavigate();
    return(
        <>
        <center className = "flex min-h-screen justify-center">
            <IoHome className="ml-3" 
            onClick={() => navigate("/")}/>
            <h2
            className="mt-0 h-fit w-full max-w-2xl rounded-xl bg-green-700 px-6 py-4 
            text-center text-xl font-bold text-white "
            >Sorry!The page you're loking for is not available 
            <TfiFaceSad className="ml-2"/>           
            </h2>
        </center>
        </>  
    )
}