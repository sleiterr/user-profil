// Profile

import React from "react";
import "./profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="w-lg m-auto">
      <div className="pt-[60px] rounded-2xl pb-[40px] bg-white/20 backdrop-blur-md shadow-xl/30">
        <div className="flex items-center justify-center w-full">
          <div className="border border-solid border-white rounded-full p-[60px] bg-white/20 ">
            <img src={image} alt={name} className="w-[320px] h-auto" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full ">
          <ul className="flex flex-col items-center justify-center gap-[6px] w-auto pt-[30px] pb-[25px] text-white font-normal text-[26px] tracking-wide">
            <li>
              <p className="font-medium text-5xl text-shadow-red-50">{name}</p>
            </li>
            <li>
              <p>@ {tag}</p>
            </li>
            <li>
              <p>{location}</p>
            </li>
          </ul>
        </div>
        <ul className="flex items-center justify-center gap-[20px] text-[18px] text-gray tracking-[0.06em]">
          <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Profile;
