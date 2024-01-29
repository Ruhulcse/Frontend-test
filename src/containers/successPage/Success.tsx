import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Footer from "shared/Footer/Footer";
import HeaderLogged from "components/Header/HeaderLogged";
import ReactGA from 'react-ga'
import { Link } from "react-router-dom";
import succesImg from "images/success.png";
export interface PageContactProps {
  className?: string;
}

ReactGA.initialize("AW-10831678676")
const successPage: FC<PageContactProps> = ({ className = "" }) => {
  return (
    <>
      <HeaderLogged />
      <div
        className={`nc-PageContact bg-black overflow-hidden ${className}`}
        data-nc-id="PageContact"
      >
        <Helmet>
          <title>Contact || NFT React Template</title>
        </Helmet>
        <div className="mb-24  lg:mb-32 flex flex-col justify-center items-center ">
          <div className="w-[80%] pb-6 md:w-[50%] h-[50%] mt-[5%] flex flex-col justify-center items-center bg-white  rounded-3xl">
         <div className=" flex  gap-6 justify-center items-center px-3">
          <img className=" w-[40px] h-[40px] , md:w-[80px] md:h-[80px] rounded-full bg-white" src={succesImg}alt="" />
         <h2 className="my-10 flex items-center text-2xl leading-[115%] md:text-5xl md:leading-[115%] font-bold text-black justify-center">
          Payment success
          </h2>
         </div>
         <p className=" my-10 text-2xl md:text-3xl font-semibold text-center text-black"><span className="text-blue-800">Real</span> or <span className="text-red-700">Fake</span><br /> you will know it now</p>
          <Link to='/page-upload-item'>
            <button className=" bg-[#4ad218]  px-6 py-4 lg:px-8 lg:py-6 text-2xl md:text-3xl font-semibold text-center px-4 py-3 text-white rounded-full">
            Legit-check now
            </button>
            
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </> 
  );
};

export default successPage;
