import { useState, useEffect } from "react";
import DeleteButton from "../../images/5974771.png";

import React from "react";
import "./usersList.css";

const UsersList = () => {
  const url = "https://dummyjson.com/users";
  const [users, setUsers] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchUsers = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("user", res);
        setUsers(res.users);
      });
  };

  const deleteUser = (userId) => {
    if (isDeleting) return;

    setIsDeleting(true);

    fetch(`https://dummyjson.com/users/${userId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        let updatedUsers = users.filter(({ id }) => id !== userId);

        setUsers(updatedUsers);
        setIsDeleting(false);
      });
  };

  //   fetch('https://dummyjson.com/carts')
  // .then(res => res.json())
  // .then(console.log);

  useEffect(() => {
    fetchUsers();
  }, []);

  // useEffect(() => {
  //   deleteUser();
  // }, [users.users]);
  //   fetch("https://dummyjson.com/users")
  //     .then((res) => res.json())
  //     .then(console.log);

  return (
    <div className="usersList">
      {users
        ?.filter(({ isDeleted }) => !isDeleted)
        .map(({ firstName, lastName, id, age, image }) => {
          return (
            <div className="user-card " key={id}>
              <img src={image} alt="" />
              <div className="info">
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{age}</p>
              </div>
              <img
                className="delete-button"
                onClick={() => deleteUser(id)}
                src={DeleteButton}
                alt=""
              />
            </div>
          );
        })}
    </div>
  );
};

export default UsersList;
