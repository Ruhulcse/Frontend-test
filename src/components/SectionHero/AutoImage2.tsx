import { FC, useEffect, useState } from "react";
import stopthefake from "../../images/3.png";
import notpass from "../../images/NotPass.png";
import pass from "../../images/Pass.png";
import addidas from "../../images/adidus.jpeg";
import gucciImage from "../../images/gucci.jpeg";
import insta from "../../images/instagram.png";
import nike from "../../images/nike.jpeg";
import shoes from "../../images/shoes.jpeg";
import tiktok from "../../images/tiktok.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";

interface Plan {
  ptoken: string;
  id: number;
  name: string;
  price: string;
  featuredImage: string;
  status: string;
}

const plans: Plan[] = [
  {
    id: 1,
    ptoken: "69fec8dbd530dv3",
    price: "$40",
    name: "pagasus",
    status: notpass,
    featuredImage: gucciImage,
  },
  {
    id: 2,
    ptoken: "1ca5f5262f6cf25",
    price: "$50",
    name: "addidus",
    status: pass,
    featuredImage: addidas,
  },
  {
    id: 3,
    ptoken: "742b1f0bca47dcd",
    price: "$55",
    name: "Nike",
    status: notpass,
    featuredImage: nike,
  },
  {
    id: 4,
    ptoken: "57c1cdc2a084f0e",
    price: "$45",
    name: "Sneakers",
    status: pass,
    featuredImage: shoes,
  },
];

const AutoImage2: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % plans.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className=" relative">
        <div className="card lg:w-52 w-44 bg-black p-2">
          <div className="">
            <figure className="p-2 bg-[#0f172a] w-full md:max-h-52 max-h-28  ">
              <img
                src={plans[currentIndex].featuredImage}
                alt={plans[currentIndex].name}
                className="rounded-xl h-28 md:h-52 w-full  object-cover "
              />
            </figure>
          </div>
          {/* <AutoImage /> */}
          <div className="card-body h-[25%] ">
            <h2 className="text-xs border-b-2 text-white py-2 mt-1 md:mt-2">
              {plans[currentIndex].ptoken}
            </h2>
            <div className="flex justify-center items-center py-2 md:py-4 ">
              <p className="xl font-semibold text-start text-white">
                {plans[currentIndex].name}
              </p>
              <img
                className="md:h-12 md:w-12 w-6 h-6 rounded-full  bg-black"
                src={plans[currentIndex].status}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" absolute top-[-80%]   md:top-[-60%]    left-[52%] md:left-[40%] lg:top-[-50%] lg:left-[45%] xl:left-[60%] xl:top-[-65%] bg-gray-200 py-2">
          <div className=" xl:w-36 w-24 md:w-32 custom-style  leading-tight">
            <img src={stopthefake} alt="" />
            <div className=" card-body items-center text-center">
              <p className=" text-[6px] md:text-xs font-semibold">
                Certificate of Authentication <br />
                <span className="text-[6px] md:text-[8px] font-medium">
                  used by
                </span>{" "}
                <span className="uppercase">stopthefake</span>
              </p>
              <p className="text-[6px]  md:text-[8px]">
                {plans[currentIndex].name}{" "}
                <span>
                  is chicago lost and found <br /> {plans[currentIndex].name}
                </span>
              </p>
              <div className="flex justify-center items-center">
                <img
                  className="h-6 md:h-12 w-6 md:w-12 rounded-full"
                  src={plans[currentIndex].status}
                  alt=""
                />
              </div>
              <p className=" text-[6px] md:text-xs my-2">
                {plans[currentIndex].ptoken}
              </p>
              <p className="uppercase text-[8px] md:text-sm">
                checked @ <span className="text-xs">2024-01-27 11:32</span>
              </p>
              <p className=" text-[6px] md:text-xs lg:text-[8px] text-center mt-1">
                only trust the documents that are hosted on{" "}
                <a className="text-blue-800" href="">
                  stopthefake.fr
                </a>{" "}
                all documents will be stored on our domain. other documents will
                be considered forgery.
              </p>
              <div className=" justify-center items-center">
                <div className="flex justify-center items-center">
                  <img
                    className=" w-3 h-3 md:w-6 md:h-6 rounded-full"
                    src={insta}
                    alt=""
                  />
                  <img
                    className="w-3 h-3 md:w-6 md:h-6 rounded-full"
                    src={tiktok}
                    alt=""
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className=" w-3 h-3 md:w-6 md:h-6 rounded-full"
                    src={youtube}
                    alt=""
                  />
                  <img
                    className=" w-3 h-3 md:w-6 md:h-6 rounded-full"
                    src={twitter}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoImage2;
