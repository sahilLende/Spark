import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className=" mt-6  bg-white shadow dark:bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          <ul className=" my-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Spark
          </a>
          . All Rights Reserved. Portfolio -
          <a
            href="https://sahillende.vercel.app"
            className="ml-1  font-bold underline underline-offset-2"
          >
            sahillende.vercel.app
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
