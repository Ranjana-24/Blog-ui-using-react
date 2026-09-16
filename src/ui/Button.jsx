const variants = {
  primary: "bg-green-600 hover:bg-green-700",
  danger: "bg-red-700 hover:bg-red-800",
  secondary: "bg-gray-500 hover:bg-gray-600",
  success: "bg-green-600 hover:bg-green-700"
};
export default function Button({
  children,
  className = "",
  variant = "success",
  onClick,
  disabled,
}) {
  return (
    <button
      className={`mt-3 inline-block rounded-full px-3 py-2
                  text-sm sm:text-base transition-transform duration-200
                  hover:-translate-y-1 cursor-pointer  text-white
                  ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}