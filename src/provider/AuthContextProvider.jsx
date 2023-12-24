import React, { useState } from "react";
import api from "./api";
import useLocalStorage from "../hooks/UseLocalStorage";
import AuthContext from "../context/AuthContext";

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (data) => {
    api({
      method: "post",
      url: "https://api.escuelajs.co/api/v1/auth/login",
      data: data,
    })
      .then((res) => {
        setAuth({ ...auth, ...res.data });
        setIsLoggedIn(true);
        console.log("res", res);
        console.log(res.email);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logout = () => {
    setAuth({});
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, auth, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
