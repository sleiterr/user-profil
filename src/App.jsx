// App.jsx

import userData from "./data/userData.json";
import friends from "./data/FriendsList.json";
import transaction from "./data/transactionData.json";
import Profile from "./components/Profile/profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
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
      <section>
        <div className="pt-[90px] pb-[90px]">
          <h2 className="text-center p-6">Transaction History</h2>
          <TransactionHistory transaction={transaction} />
        </div>
      </section>
    </main>
  );
}

export default App;
