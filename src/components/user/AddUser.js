import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  // VARIABLES
  const initialState = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  };
  const [user, setUser] = useState(initialState);

  const { name, email, username, phone, website } = user;
  const navigate = useNavigate();

  // FUNCTIONS
  const onChangeInput = (event) => {
    // console.log(event);
    // console.log(event.target.name);
    // console.log(event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (!user.name) {
      alert("Name can't be empty");
      return;
    }
    if (!user.username) {
      alert("username can't be empty");
      return;
    }
    if (!user.email) {
      alert("email can't be empty");
      return;
    }
    if (!user.phone) {
      alert("phone can't be empty");
      return;
    }
    if (!user.website) {
      alert("website can't be empty");
      return;
    }
    // api call to save new user to db after clicking the submit button
    await axios.post("http://localhost:5000/users", user);
    // to navigate back to home after clicking the submit button
    navigate({ pathname: "/" });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto p-5 shadow-lg">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={(event) => onFormSubmit(event)}>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your phone no."
              name="phone"
              value={phone}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your website"
              name="website"
              value={website}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <button type="submit" className="btn btn-primary text-white col-12">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
