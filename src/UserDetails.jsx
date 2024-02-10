import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <p>
        <strong>Name:</strong> {user.firstName} {user.lastName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Address:</strong> {user.address.address}, {user.address.suite},{" "}
        {user.address.city}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
};

export default UserDetails;
