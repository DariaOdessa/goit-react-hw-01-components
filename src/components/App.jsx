import { GlobalStyle } from "./GlobalStyle";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"
import { Profile } from "./Profile/Profile/Profile";
import { Statistics } from "./Statistics/Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionTable/TransactionTable";

// import { Box } from "./Box";

export const App = () => {
  return (
    <>
    
      <Profile user={user} />
      <Statistics stats={data} title="Upload stats"></Statistics>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
      
      
    <GlobalStyle/>
     
    </>
  );
};
