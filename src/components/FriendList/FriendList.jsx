import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <div className="bg-green-400 w-[220px] h-full pb-[60px] pt-[60px]">
      <ul className="list-none flex flex-col items-center justify-center gap-[45px] h-full">
        {friends.map((friends) => {
          return (
            <li key={friends.id}>
              <FriendListItem
                avatar={friends.avatar}
                name={friends.name}
                isOnline={friends.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.PropType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
