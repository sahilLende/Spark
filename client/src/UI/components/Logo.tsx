interface logoPropType {
  color?: "primary" | "secondary";
}

const Logo = ({ color }: logoPropType) => {
  return (
    <div
      className={`flex w-max flex-row items-center  text-2xl ${
        color === "secondary" ? "text-black" : "text-white"
      }`}
    >
      <svg
        className="  h-10 w-10 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <path d="M11 18H8a2 2 0 0 1-2-2V9" />
      </svg>

      <h2 className="font-bold ">Spark</h2>
    </div>
  );
};

export default Logo;
