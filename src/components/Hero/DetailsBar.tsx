import React from "react";
import Image from "next/image";
import seed from "public/assets/Seed Button.png";
import water from "public/assets/Water Button.png";
import manure from "public/assets/Compost button.png";
import extraSeed from "public/assets/seeds 1.png";



function DetailsBar() {
  return (
    <div className="flex flex-wrap justify-around md:px-28 py-10 bg-[#DEF7E4]">
        <div className="flex flex-wrap">

          <div className="m-2 mx-5">
            <h1>Seed Bag</h1>
            <div className="flex inline-flex items-center ">
              <Image src={seed} alt={""} />
              <h1 className="m-2"> Total : 1</h1>
            </div>
          </div>
          <div className="m-2 mx-5">
            <h1>Water</h1>
            <div className="flex inline-flex items-center ">
              <Image src={water} alt={""} />
              <h1 className="m-2"> Needed <br/> Everyday</h1>

            </div>
          </div>
          <div className="m-2 mx-5">
            <h1>Manure</h1>
            <div className="flex inline-flex items-center ">
              <Image src={manure} alt={""} />
              <h1 className="m-2"> Total : 0</h1>

            </div>
          </div>

      </div>
      <div className="m-3 bg-[#75D63A] inline-flex justify-center text-center items-center rounded-md m-5 px-5 md:w-[380px] w-[250px]"> 
      <Image src={extraSeed} alt="seen-1"  className="md:h-[60px] h-[30px]"/>
      <div className="mx-2">
        <h1 className=" text-[12px] font-medium ">Get Extra and Rare Seeds</h1>
        <p className="text-[8px]">Proceeds go to Planters Organization</p></div>
        <button className="bg-black rounded-md p-2 text-white">
          Buy Now
        </button>
        </div>
    </div>
  );
}

export default DetailsBar;
