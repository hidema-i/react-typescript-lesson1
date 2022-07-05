import axios from "axios";
import { useState } from "react";
import "./App.css";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userProfile";

function App() {
  const [userProfile, setUserProfile] = useState<Array<UserProfile>>([]);

  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);

  const dataGetButton = () => {
    setLoding(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserProfile(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoding(false);
      });
  };
  return (
    <div className="App">
      <button onClick={dataGetButton}>取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得失敗</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
