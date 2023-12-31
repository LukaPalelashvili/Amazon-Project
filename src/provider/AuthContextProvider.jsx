import React, { useEffect, useState } from "react";
import api from "./api";
import useLocalStorage from "../hooks/UseLocalStorage";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
      const loginResponse = await api.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        data,
      );

      if (loginResponse.status === 201) {
        const { access_token, refresh_token } = loginResponse.data;

        setAuth({ access_token, refresh_token });

        const profileResponse = await api.get(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${auth.access_token}`,
            },
          },
        );

        if (profileResponse.status === 200) {
          setUser(loginResponse.data);
          setIsLoadingUser(false);
          navigate("/");
        }
      } else {
        toast.error("Error logging in");
      }
    } catch (error) {
      toast.error("Error logging in");
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
