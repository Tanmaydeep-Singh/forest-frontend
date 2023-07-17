import React from "react";
import Friends from "@/components/Profile/Friends";
import MyForest from "@/components/Profile/MyForest";
import ProfileBanner from "@/components/Profile/ProfileBanner";
import Badges from "@/components/Profile/Badges";

export default function Profile() {
  return (
    <>
      {" "}
      <div className='bg-white w-[100%] md:px-28 py-10'>
       <ProfileBanner />
       <MyForest/>
       <Friends/>
        <Badges/>
      </div>
    </>
  );
}
