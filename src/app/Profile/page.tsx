"use client"
import React, { useState } from "react";
import Friends from "@/components/Profile/Friends";
import MyForest from "@/components/Profile/MyForest";
import ProfileBanner from "@/components/Profile/ProfileBanner";
import Badges from "@/components/Profile/Badges";
import banner from "public/assets/Rectangle 27.png";
import Image from "next/image";

export default function Profile() {
  const [render,setRender] = useState(0);
  return (
    <>
      {" "}
      <div className="bg-white w-[100%] md:px-28 py-10">
        <Image alt="" src={banner} className=" " />

        <div className=" grid grid-cols-5">
          <div className="col-span-2">
            <h1> <ProfileBanner/> </h1>
          </div>
          <div className=" col-span-3 w-[100%] ">
            <div className=" w-[80%] flex inline-flex justify-around text-[20px] font-medium m-2">
            <button onClick={ () => {setRender(0)}}>My Forest</button>
            <button onClick={ () => {setRender(1)}}>Badges</button>
            <button onClick={ () => {setRender(2)}}>Friends</button>
            </div>

            <div>
              {
                render === 2 ? (<Friends/>) :
                render === 1 ? (<Badges/>) :
                (<MyForest/>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
