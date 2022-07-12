import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";
export const useAuth = () => {
  ///画面遷移するため
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  //Logingで非活性
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((result) => {
          if (result.data) {
            const isAdmin = result.data.id === 10 ? true : false;
            setLoginUser({ ...result.data, isAdmin });
            showMessage({ title: "Login Success!!", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "User not found😅", status: "error" });
            setLoading(false);
          }
        })
        .catch(() =>
          showMessage({ title: "Can't log in...", status: "error" })
        );
      setLoading(false);
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
