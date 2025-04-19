import React from "react";
import PropTypes from "prop-types";
import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border border-solid border-white rounded-full p-[22px] bg-white/20">
        <img
          src={avatar}
          alt="Avatar"
          width="65"
          className="pb-[8px] flex flex-col items-center justify-center w-[60px] h-[60px]"
        />
      </div>
      <p className="font-normal text-white text-xl tracking-[0.04em] pt-[12px]">
        {name}
      </p>
      <p
        className={`${style.status} ${isOnline ? style.online : style.offline}`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
