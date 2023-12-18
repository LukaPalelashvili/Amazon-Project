import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const { login } = useContext(AuthContext);

  return (
    <div>
      <input
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button
        onClick={() => {
          login(data);
          console.log("You are in", data);
        }}
      >
        Log in
      </button>
      <Link to={"/register"}>რეგისტრაცია</Link>
    </div>
  );
};

export default Login;
