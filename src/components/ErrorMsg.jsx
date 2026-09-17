import { TfiFaceSad } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
export default function ErrorMsg() {
     const navigate = useNavigate();
    return(
        <>
     <center className="bg-green-600 rounded-xl mt-50 ml-120 mr-120 py-15 px-30">
        <div>
        <TfiFaceSad className="text-white text-5xl font-bold" />
        <h1 className="text-white text-3xl font-bold mt-4">Sorry</h1>
        <h2 className="text-white text-xl mt-4">The Page You're looking for is not available</h2>
        <Button className="bg-green-800 py-3 mr-5 mt-4" onClick={() => navigate("/")}>
            Go To home</Button>
            <Button onClick={() => navigate(-1)}
                className="bg-green-800 py-3"
                >
   Go Back
            </Button>
            </div>
     </center>
        </>  
    )
}