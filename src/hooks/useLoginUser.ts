import { useContext } from "react";
import {
  LoginUserContenxtType,
  LoginUserContenxt,
} from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContenxtType =>
  useContext(LoginUserContenxt);
