import Image from "next/image";
import React from "react";
import s21 from "public/assets/Trees Health.png";
import s22 from "public/assets/Tree NFT.png";


function Section2() {
  return (
    <div className="flex inline-flex m-2">
      <div className="card w-60 h-72 bg-[#ffffff] shadow-xl m-2">
        <div className="card-body">
         <Image src={s21} alt='review' className="h-[80%]"/>
        </div>
      </div>
      <div className="card w-60 h-72 bg-[#DEF7E3] shadow-xl m-2">
        <div className="card-body">
        <Image src={s22} alt='TREE NFT' />
        </div>
      </div>
      <div className="card w-60 h-72 bg-[#AAED81] shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title text-[24px]">Total Carbon Offset </h2>
          <div>
            <p className=" text-[40px] font-semibold flex text-center">2.2 T</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
