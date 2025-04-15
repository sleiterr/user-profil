// App.jsx

import userData from "./data/userData.json";
import friends from "./data/FriendsList.json";
import Profile from "./components/Profile/profile";
import FriendList from "./components/FriendList/FriendList";
import "./App.css";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
