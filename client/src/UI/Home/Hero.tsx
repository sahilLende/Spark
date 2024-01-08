import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" bg-primary  md:gap10  ggap-10 relative  flex  min-h-[calc(100vh_-_4rem)]  flex-col items-center justify-center overflow-hidden    px-5   text-white ">
      {/* decor */}
      <svg
        className="absolute bottom-0  w-full md:h-40 xl:h-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,64L30,101.3C60,139,120,213,180,250.7C240,288,300,288,360,256C420,224,480,160,540,154.7C600,149,660,203,720,234.7C780,267,840,277,900,282.7C960,288,1020,288,1080,261.3C1140,235,1200,181,1260,154.7C1320,128,1380,128,1410,128L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      {/* text-content */}
      <div
        id="hero-text"
        className=" z-10 flex flex-col  items-center justify-center gap-8 rounded-md   p-2 py-4 text-center md:mt-14    md:w-3/4  "
      >
        <h1 className="  text-3xl font-extrabold md:text-6xl  ">
          Unleash Your Brilliance. Showcase Your Genius. On Spark.
        </h1>
        <p className="  text-base font-medium  md:text-lg ">
          The platform where professionals connect, inspire, learn and spark
          change.
        </p>
        {/* make it a link */}
        <div className="flex w-full flex-row justify-center gap-5 ">
          <Link
            className="mb-2  inline-flex w-max items-center  justify-center rounded-md bg-black px-4 py-2  text-sm font-semibold leading-none transition-all  duration-100    hover:scale-105 md:text-lg  "
            to={"accounts"}
          >
            <span className="text-nowrap ">Join Now</span>

            <ChevronRightIcon className="ml-1 w-4 md:w-6 " />
          </Link>
          <Link
            className="mb-2 inline-flex w-max items-center justify-center  rounded-md bg-white  px-4 py-3 text-sm font-semibold leading-none  text-black   outline-1 transition-all  duration-100    hover:scale-105 md:text-lg  "
            to="dashboard"
          >
            <span className="text-nowrap ">Explore</span>

            <ChevronRightIcon className="ml-1 w-4  md:w-6" />
          </Link>
        </div>
      </div>
      {/* image-content */}
      <div className=" relative z-10 flex   w-full  flex-col items-center justify-center  px-4 md:flex-1  ">
        <svg
          className="absolute h-36 w-screen md:h-56 "
          viewBox="0 0 1440 426"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector 32"
            d="M122.412 240.897C24.9415 267.462 -0.894173 347.318 69.4281 387.474C139.75 427.63 151.05 358.064 19.6304 200.08C-66.0316 114.949 -63.3987 -66.0793 151.05 28.7893C419.11 147.375 963.934 215.766 1086.65 122.277C1184.82 47.4869 1295.82 91.1147 1339.04 122.277C1390.03 159.034 1436 274.745 1280.73 377.645C1086.65 506.269 1083.17 329.332 1255.49 301.725C1393.35 279.639 1467.27 326.404 1487 352.547"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
        <img
          src="../../../src/assets/desktop.svg"
          alt="screen-dashboard"
          className=" md: z-10 mt-4 w-full max-w-md rounded-md border-2 border-black "
        />
      </div>
    </section>
  );
};

export default Hero;
