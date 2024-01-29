import { FC, ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import client01 from "../../images/clientSay1.png";
import client03 from "../../images/clientSay4.png";
import client02 from "../../images/clientSayMain.png";
import AutoImage from "./AutoImage";
import AutoImage2 from "./AutoImage2";
import "./sectionHero.css";
export interface SectionHeroProps {
  className?: string;
  heading?: ReactNode;
  subHeading?: string;
}

const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  heading = "REAL OR REPLICA? GET INSTANT AUTHENTIFICATION",
  subHeading = "Check the authenticity of all your items by fashion professionals scrutinizing the smallest details.",
}) => {
  const [legitcheckCount, setLegitCheckCount] = useState(0);
  const [pass, setPass] = useState(0);
  const [notpass, setNotPass] = useState(0);
  useEffect(() => {
    const getProducts = async (page: any) => {
      await axios
        .get("/products?page=" + page)
        .then((resp: any) => {
          setLegitCheckCount(resp.data.count);
          console.log(legitcheckCount);
          setPass(resp.data.pass);
          console.log(pass);
          setNotPass(resp.data.notPass);
          console.log(notpass);
        })
        .catch((err: any) => {});
    };
    getProducts(1);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-8 p-2 mt-10  ">
      <div className="flex flex-col lg:flex-row  justify-between gap-5 md:gap-6 ">
        {/* left side */}
        <div className="flex-1 px-2 md:px-4 py-0 md:py-10 justify-between ">
          <div className="py-4 md:py-10">
            <h1 className="text-2xl md:text-2xl lg:text-3xl  font-semibold  md:text-start mb-6">
              Get your Sneakers streetwear luxury clothing and accessories{" "}
              <br /> legit check
            </h1>
            <Link
              to="/page-upload-item"
              className="flex justify-center items-center"
            >
              <button className=" bg-[#4ad218] text-white text-2xl md:text-3xl lg:text-4xl font-bold p-5 flex justify-center  rounded-2xl text-center items-center my-10">
                Legit check now{" "}
              </button>
            </Link>
          </div>
          <div className="flex gap-2 md:gap-6  justify-between  ">
            <div className="flex gap-2  md:gap-4 ">
              <div className="mt-3 flex md:-space-x-2 md:overflow-hidden">
                <img
                  className="inline-block md:h-12 h-4 md:w-12 w-4 rounded-full ring-2 ring-white"
                  src={client01}
                  alt=""
                />
                <img
                  className="inline-block h-4 w-4 md:h-12 md:w-12 rounded-full ring-2 ring-white"
                  src={client02}
                  alt=""
                />
                <img
                  className="inline-block h-4 w-4 md:h-12 md:w-12 rounded-full ring-2 ring-white"
                  src={client03}
                  alt=""
                />
              </div>
              {/* review section 01 */}
              <div className="flex flex-col">
                <div className="flex items-center">
                  <p className=" text-xl md:text-4xl font-bold">4.8</p>

                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://w...content-available-to-author-only...3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://w...content-available-to-author-only...3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://w...content-available-to-author-only...3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://w...content-available-to-author-only...3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://w...content-available-to-author-only...3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                </div>
                <div className="text-xl  text-gray-600">102.4k Reviews</div>
              </div>
            </div>
            {/* review section 02 */}
            <div className="flex flex-col ">
              <div className="flex gap-1">
                <p className="text-xl md:text-4xl font-bold">
                  {legitcheckCount}
                </p>
                <div>
                  <div className="flex gap-1 justify-center items-center">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#22d3ee]"></div>
                    <p className="font-semibold text-gray-400 text-sm">
                      {pass}
                    </p>
                  </div>
                  <div className="flex gap-1 items-center font-semibold">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#e11d48]"></div>
                    <p className="text-gray-400 text-sm">{notpass}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xl text-gray-600 text-start">
                  Sneakers Checked
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex-1  py-0 md:py-10 mt-20 md:mt-0 ">
          <p className="text-xl md:text-3xl lg:text-xl xl:text-3xl font-semibold  text-center">
            <span className="text-blue-700">Real</span> or{" "}
            <span className="text-red-600">fake</span> <br /> you will know it
            now{" "}
          </p>
          <div className="flex gap-2 mt-10">
            {/* card01 */}
            <div className="flex-grow justify-center items-center ">
              <AutoImage />
            </div>
            {/* card 02 */}
            <div className=" flex-grow md:mt- justify-center items-center">
              <AutoImage2 />
              {/* absulate */}
              {/* <div>djd</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className={`nc-SectionHero relative ${className}`}
    //   data-nc-id="SectionHero"
    // >
    //   <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative heroSection-adjust">
    //     <div className="w-screen max-w-full xl:max-w-xl space-y-2 lg:space-y-7">
    //       <h2 className="text-xl sm:text-2xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100 heading-space hero-text">
    //         REAL OR REPLICA? GET INSTANT AUTHENTICATION.
    //       </h2>
    //       <span className="block text-base text-sm xl:text-lg text-neutral-6000 dark:text-neutral-400 max-w-lg desc-space hero-sub-text">
    //         Check the authenticity of all your items by fashion professionals
    //         scrutinizing the smallest details.
    //       </span>
    //       <div className="pt-7 flex  space-x-4 btn-space">
    //         <ButtonForth href="/page-upload-item">
    //           <span>Legit-check now</span>
    //           <svg className="w-5 h-5 ml-2.5" viewBox="0 0 24 24" fill="none">
    //             <path
    //               d="M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z"
    //               stroke="currentColor"
    //               strokeWidth="1.5"
    //               strokeMiterlimit="10"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //             <path
    //               d="M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2"
    //               stroke="currentColor"
    //               strokeWidth="1.5"
    //               strokeMiterlimit="10"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //             <path
    //               d="M3 22H21"
    //               stroke="currentColor"
    //               strokeWidth="1.5"
    //               strokeMiterlimit="10"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //           </svg>
    //         </ButtonForth>
    //       </div>
    //     </div>
    //     {/* <div className="flex-grow">
    //       <img className="w-full" src={rightImg} alt="" />
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default SectionHero;
