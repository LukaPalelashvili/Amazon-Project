import React, { useState } from "react";
import api from "./api";
import useLocalStorage from "../hooks/UseLocalStorage";
import AuthContext from "../context/AuthContext";

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});

  const login = (data) => {
    api({
      method: "post",
      url: "https://ngglobalwebapi20231210182820.azurewebsites.net/api/User/LogIn",
      data: data,
    })
      .then((res) => {
        setAuth({ ...auth, ...res.data });
        console.log("res", res);
      })

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <AuthContext.Provider value={{ login, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
