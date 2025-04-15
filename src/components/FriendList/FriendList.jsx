import React from "react";
import PropType from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
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
  friends: PropType.arrayOf(
    PropType.shape({
      avatar: PropType.string.isRequired,
      name: PropType.string.isRequired,
      isOnline: PropType.bool.isRequired,
      id: PropType.number.isRequired,
    })
  ),
};

export default FriendList;
