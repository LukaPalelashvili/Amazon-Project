import React, { useState } from "react";
import api from "../provider/api";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    // avatar: "https://picsum.photos/800",
  });

  const handleChange = (fieldName) => {
    return (e) => {
      setFormData({
        ...formData,
        [fieldName]: e.target.value,
      });
    };
  };

  // fetch("https://dummyjson.com/users/add", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     firstName: "Muhammad",
  //     lastName: "Ovi",
  //     age: 250,
  //     /* other user data */
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then(console.log);

  const handleRegister = () => {
    api({
      method: "post",
      url: "https://ngglobalwebapi20231210182820.azurewebsites.net/api/user/registerUser",
      data: formData,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: "",
        email: "",
        password: "",
        /* other user data */
      }),
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="text"
        value={formData.userName}
        onChange={handleChange("userName")}
      />
      <input
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={handleChange("email")}
      />
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange("password")}
      />
      <button onClick={handleRegister}>register</button>
    </div>
  );
};

export default Register;
