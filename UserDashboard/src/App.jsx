import { useState } from "react";
import UserCard from "./components/UserCard";
import { usersData } from "./data/usersData";
const App = () => {

  const [users, setUsers] = useState(usersData);

  const handlePromote = (id) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id
          ? { ...user, role: "Senior" }
          : user
      )
    );
  };

  const handleDemote = (id) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id
          ? { ...user, role: "Junior" }
          : user
      )
    );
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onPromote={handlePromote}
          onDemote={handleDemote}
        />
      ))}
    </div>
  );
};

export default App;