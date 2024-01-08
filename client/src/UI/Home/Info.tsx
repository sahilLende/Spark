import {
  NewspaperIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
const Info = () => {
  return (
    <section className="  mb-20 mt-10 px-2 py-4">
      <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
        How It Works?
      </h2>
      <div className=" flex h-max flex-col gap-10 md:flex-row md:justify-evenly">
        <div className="flex flex-col  items-center  text-center md:w-1/3 ">
          <NewspaperIcon className=" mb-4 h-16 w-16" />
          <h3 className="mb-2 text-nowrap text-2xl font-semibold md:text-[1.65rem] lg:text-3xl">
            Showcase Feed
          </h3>
          <p className="text-base md:text-base  lg:text-lg">
            Showcase your work in a dedicated feed .
          </p>
        </div>
        <div className="flex  flex-col items-center  text-center md:w-1/3  ">
          <QuestionMarkCircleIcon className="mb-4 h-16 w-16" />
          <h3 className="mb-2 text-nowrap text-2xl font-semibold md:text-[1.65rem] lg:text-3xl">
            QNA Feed
          </h3>
          <p className="text-base md:text-base lg:text-lg ">
            Seek expert advice and share knowledge in a Q&A feed.
          </p>
        </div>
        <div className="flex flex-col items-center  text-center md:w-1/3  ">
          <ChatBubbleLeftRightIcon className="mb-4 h-16 w-16" />
          <h3 className="mb-2 text-nowrap text-2xl font-semibold md:text-[1.65rem] lg:text-3xl">
            Connect and Chat
          </h3>
          <p className="text-base md:text-base lg:text-lg ">
            Connect with inspiring individuals and build your network.
          </p>
        </div>
      </div>
    </section>
  );
};

const Info2 = () => {
  return (
    <section className="  -2 -green-500 mb-10  mt-10 flex flex-col px-2 py-4  md:flex-row-reverse">
      <div className="  -orange-500  flex flex-col items-center  justify-center">
        <h2 className="mb-8  text-center text-4xl font-bold md:text-5xl">
          Ignite your Career
        </h2>
        <p className="p-2  text-center text-base md:w-4/5  md:text-lg ">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullamcorper.
        </p>
      </div>

      <div className="  flex justify-center gap-4 p-5   md:w-1/2 md:min-w-96 ">
        <div className="  flex w-1/2 flex-col gap-5  ">
          <div className=" relative h-max max-w-max gap-2  rounded-[10px] border-2 border-slate-900 bg-white p-3 px-2 pt-2">
            <img
              src="../../../src/assets/circles.svg"
              alt="people discussing"
              className=" absolute top-[110%] z-[-1]  w-3/4 "
            />
            <div className="  rounded-md bg-blue-100 px-1 py-2 text-[0.5rem] font-normal leading-tight text-blue-800 md:text-xs">
              Popular
            </div>
            <div className="  mt-1 text-[0.5rem] font-semibold leading-snug text-slate-900 md:text-xs">
              Discuss with people on QNA or Dm
              <div className=" hidden  text-[0.5rem] font-normal leading-tight text-slate-600 md:text-xs lg:block">
                Aliquam ut euismod condimentum elementum ultricies volutpat sit
                non.
              </div>
            </div>
          </div>
          <img
            src="../../../src/assets/pic2.png"
            alt="people discussing"
            className="ml-auto  w-3/4"
          />
        </div>
        <div className=" relative m-auto">
          <svg
            className=" absolute  top-1/2 z-[-1] h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 244 295"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Rectangle 43"
              d="M222.147 83.2026C215.335 43.5077 211.928 23.6603 197.965 11.8891C184.001 0.11792 163.864 0.11792 123.588 0.11792H100C52.8596 0.11792 29.2893 0.11792 14.6447 14.7626C1.90735e-06 29.4072 1.90735e-06 52.9775 1.90735e-06 100.118V187.08C1.90735e-06 241.874 1.90735e-06 269.271 17.68 284.249C35.36 299.227 62.3845 294.725 116.433 285.72L153.876 279.482C200.584 271.701 223.938 267.81 235.977 250.87C248.016 233.93 244.011 210.596 236.002 163.926L222.147 83.2026Z"
              fill="#e9e50b"
              fillOpacity="0.91"
            />
          </svg>
          <img
            src="../../../src/assets/Picture.png"
            alt="people discussing"
            className="  h-3/4 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export { Info, Info2 };
