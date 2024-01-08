import { useState } from "react";
import Logo from "../UI/components/Logo";
import { Link } from "react-router-dom";
import SignInForm from "../UI/Accounts/SignInForm";
import SignupForm from "../UI/Accounts/SignupForm";

const Accounts = () => {
  const [view, setView] = useState(true);

  return (
    <section className=" bg-primary relative  ">
      {/* decord */}

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
      <div className="  realtive z-20 mx-auto flex min-h-[calc(100vh_-_4rem)]  flex-col items-center justify-center   px-6 py-8 lg:py-0">
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

        <div className=" z-10  w-full rounded-lg border-2 border-black  bg-white  shadow sm:max-w-md md:mt-0 xl:p-0 ">
          <div className="space-y-4  p-6 sm:p-8 md:space-y-6">
            <Link to="/" className=" mx-auto block  w-max ">
              <Logo color="secondary" />
            </Link>
            <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl ">
              {view ? "Sign In" : "Create an account"}
            </h1>
            {/* true ? sigin in : signup*/}
            {view ? <SignInForm /> : <SignupForm />}
            <p className="text-sm font-light ">
              {view ? "Dont have an account yet" : "Open existing account"}
              <button
                onClick={() => {
                  view ? setView(false) : setView(true);
                }}
                className=" text-primary dark:text-primary-500 ml-1 font-semibold hover:underline"
              >
                {view ? "Sign up" : "Sign in "}
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accounts;
