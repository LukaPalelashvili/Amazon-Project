import React, { useEffect, useState } from "react";
import api from "./api";
import useLocalStorage from "../hooks/UseLocalStorage";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (auth && auth.access_token) {
        try {
          const response = await api.get(
            "https://api.escuelajs.co/api/v1/auth/profile",
            {
              headers: {
                Authorization: `Bearer ${auth.access_token}`,
              },
            },
          );

          if (response.status === 200) {
            setAuth(auth);
            setUser(response.data);
            setIsLoadingUser(false);
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
          setIsLoadingUser(false);
          logout();
        }
      }
    };

    fetchProfile();
  }, []);

  const login = async (data) => {
    try {
      const loginResponse = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        { method: "POST", ...data },
      );

      if (loginResponse.status === 201) {
        const { access_token, refresh_token } = loginResponse.data;

        console.log("login", loginResponse.data);

        const profileResponse = await fetch(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
        );

        if (profileResponse.status === 200) {
          console.log("success");
          setAuth({ access_token, refresh_token });
          setUser(loginResponse.data);
          setIsLoadingUser(false);
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setAuth({});
    setUser(null);
    setIsLoadingUser(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ login, isLoadingUser, logout, auth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
