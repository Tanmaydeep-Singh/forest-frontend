import React from "react";
import profileSkeleton from "public/assets/Rectangle 26.png";
import Image from "next/image";

function ProfileBanner() {
  return (
    <div className="relative grid justify-center justify-items-center align-middle items-center text-center top-[-160px]   m-16  rounded-t-[47%] bordered border-black">
      {" "}
      <Image
        alt=""
        src="https://api.multiavatar.com/Riverr.svg"
        width="96"
        height="96"
        className=" bg-[#DEF7E3]  rounded-[50%] "
      />
      <div className="m-5">
      <h1 className=" text-[14px] font-semibold flex text-center" >Name</h1>
      <h1 className=" text-[14px] font-semibold flex text-center">location</h1>
      </div>
      <div className="flex inline-flex text-[20px] font-semibold flex text-center">
        <div className="m-3 mx-5"> 1 <br/> level</div>
        <div className="m-3 mx-5"> 0 <br/> Trees</div>
        <div className="m-3 mx-5"> 1 <br/> Friend</div>
      </div>

      <button className="btn">Edit Profile</button>
    </div>
  );
}

export default ProfileBanner;
