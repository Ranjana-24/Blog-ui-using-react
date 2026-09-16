import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Hero() {
  
  return (
    <div className="flex flex-col md:flex-row mb-0 md:mb-0 items-center 
   py-18 bg-green-100">
      <LeftSide />
      <RightSide />
    </div>
  );
}
