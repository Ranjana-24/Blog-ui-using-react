import { TbFaceIdError } from "react-icons/tb";

export default function NoPosts() {
  return (
    <div className="flex w-full flex-col items-center 
    justify-center bg-green-100 px-4 py-16 text-center sm:px-6 sm:py-20 md:px-10 md:py-24">
      
      <TbFaceIdError className="mb-5 text-5xl sm:text-6xl" />

      <p className="text-xl font-semibold sm:text-2xl md:text-3xl">
        No Posts Found
      </p>

    </div>
  );
}