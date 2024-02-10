import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data.users);
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  console.log("Users state:", users);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <div className="user-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <div className="user-details">
              <Link to={`/user/${user.id}`}>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      <p>
                        <strong>Name:</strong> {user.firstName} {user.lastName}
                      </p>
                    </h2>
                    <p>
                      <strong>Email:</strong> {user.email} <br />
                      <strong>Address:</strong> {user.address.address},{" "}
                      {user.address.suite}, {user.address.city}
                      <br />
                      <strong>Company:</strong> {user.company.name}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
