import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className="bg-green-400 text-white p-5">
      <ul className="list-none flex flex-row">
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
