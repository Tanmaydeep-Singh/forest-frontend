import React from "react";
import Image from "next/image";
import Tree from "public/assets/VirtualForestIcon 1.png";


function Section3() {
  return (
    <div className="flex inline-flex m-2 ">
      <div className="card w-60 h-72 bg-[#E6DA4D] shadow-xl m-2 text-center">
        <div className="card-body">
          <h2 className="card-title text-[24px] font-semibold flex text-center">Total Contribution </h2>
          <div className="text-center w-[100%]">
            <p>Towards Planters</p>
            <p className=" text-[40px] font-semibold ">$169</p>
          </div>
          <button className="btn">Breakdown</button>
        </div>
      </div>
      <div className="card w-60 h-72 bg-[#A7F3D0] shadow-xl m-2">
        <div className="card-body flex inline-flex  ">
        <Image alt="tree" src={Tree} className=""/>
        <Image alt="tree" src={Tree} className=""/>


          <div>
            <p className=" text-[24px] font-semibold flex text-center">Garden NFT</p>
          </div>
          <button className="btn">Mint Now</button>
        </div>
      </div>
      <div className="card w-60 h-72 bg-[#75D63A] shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title text-[34px] text-white leading-[50px] ">ReFi Rewards From Next Level</h2>
         
        </div>
      </div>
    </div>
  );
}

export default Section3;
