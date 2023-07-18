import Image from "next/image";
import React from "react";
import Tree from "public/assets/VirtualForestIcon 1.png";


function Section1() {
  return (
    <div className="flex inline-flex m-2">
      <div className="card w-60 h-32 bg-[#CEE963] shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title">Total Trees</h2>
          <div className="flex flex-inline">
            <p>{0}</p>
            <Image alt="tree" src={Tree} className="bg-white w-12 h-12 rounded-[50%]  relative top-[-25%] "/>
          </div>
        </div>
      </div>
      <div className="card w-60 h-32 bg-[#A7F3D0] shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title">Total Trees</h2>
          <div className="flex flex-inline">
            <p>Garden</p>
            <Image alt="tree" src={Tree} className="bg-white w-12 h-12 rounded-[50%]  relative top-[-25%] "/>

          </div>
        </div>
      </div>
      <div className="card w-60 h-32 bg-[#AAED81] shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title">Next Stage</h2>
          <div className="flex flex-inline">
            <p>Orchard</p>
            <Image alt="tree" src={Tree} className="bg-white w-12 h-12 rounded-[50%]  relative top-[-25%] "/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
