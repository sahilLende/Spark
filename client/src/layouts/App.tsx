import Logo from "../UI/components/Logo";
import Footer from "../UI/Home/Footer";

import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header className=" bg-primary  w-full px-5  ">
        {/* home header */}
        {/*  according  to user render contents */}

        <nav className=" flex  h-16 w-full  items-center  justify-between">
          <Logo />
          <h3 className="text-lg font-semibold text-white"> SignUp</h3>
        </nav>
      </header>
      <main className="">
        <Outlet />
      </main>
      {pathname === "/" && <Footer />}
    </>
  );
};

export default App;
