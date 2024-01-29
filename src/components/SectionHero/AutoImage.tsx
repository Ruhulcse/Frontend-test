import { FC, useEffect, useState } from "react";
import addidas from "../../images/adidus.jpeg";
import gucciImage from "../../images/gucci.jpeg";
import nike from "../../images/nike.jpeg";
import shoes from "../../images/shoes.jpeg";

interface Plan {
  id: number;
  name: string;
  price: string;
  featuredImage: string;
}

const plans: Plan[] = [
  {
    id: 1,
    price: "450.00",
    name: "pagasus",
    featuredImage: gucciImage,
  },
  {
    id: 2,
    price: "599.00",
    name: "addidus",
    featuredImage: addidas,
  },
  {
    id: 3,
    price: "550.00",
    name: "Nike",
    featuredImage: nike,
  },
  {
    id: 4,
    price: "679.00",
    name: "Sneakers",
    featuredImage: shoes,
  },
];

const AutoImage: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % plans.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="card lg:w-52   w-44">
        <figure className="pl-2 bg-[#0f172a] w-full max-h-28 md:max-h-52 ">
          <img
            src={plans[currentIndex].featuredImage}
            alt={plans[currentIndex].name}
            className="rounded-xl h-28 md:h-52 w-full object-cover"
          />
        </figure>
        <div className="card-body  text-start p-2 md:p-4">
          <div className="flex justify-between text-xl">
            <h1 className="font-semibold">{plans[currentIndex].price}€</h1>
            <p>
              12 <span className="text-sm">＜</span>3
            </p>
          </div>
          <p className="text-xl font-semibold text-start">
            {plans[currentIndex].name}
          </p>
        </div>

        <div className="card-actions justify-center items-center mt-4 md:mt-6">
          <button className=" px-2 py-1 md:px-6 md:py-2 text-white text-xl  font-semibold bg-teal-700 w-[80%]">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default AutoImage;
