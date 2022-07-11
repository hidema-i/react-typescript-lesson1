import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
export const useAuth = () => {
  ///画面遷移するため
  const history = useHistory();
  const { showMessage } = useMessage();
  //Logingで非活性
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((result) => {
          if (result.data) {
            showMessage({ title: "Login Success!!", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "User not found😅", status: "error" });
          }
        })
        .catch(() => showMessage({ title: "Can't log in...", status: "error" }))
        .finally(() => setLoading(false));
    },
    [history, showMessage]
  );
  return { login, loading };
};
