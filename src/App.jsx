// App.jsx

import userData from "./data/userData.json";
import friends from "./data/FriendsList.json";
import transaction from "./data/transactionData.json";
import Profile from "./components/Profile/profile";
import FriendList from "./components/FriendList/FriendList";
import "./App.css";

function App() {
  return (
    <main>
      <section>
        <div className="flex flex-row-reverse">
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
          <FriendList friends={friends} />
        </div>
      </section>
    </main>
  );
}

export default App;
