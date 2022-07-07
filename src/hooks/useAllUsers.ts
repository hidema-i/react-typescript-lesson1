import axios from "axios";
import { useState } from "react";
import { User } from "../types/api/user";
import { UserProfile } from "../types/userProfile";

//AllUserを一覧に表示
export const useAllUsers = () => {
  const [userProfile, setUserProfile] = useState<Array<UserProfile>>([]);

  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
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
  return { getUsers, userProfile, loading, error };
};
