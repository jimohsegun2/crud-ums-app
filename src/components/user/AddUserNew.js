import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserNew = () => {
  // VARIABLES
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [username, setUsername] = useState("")
  const [website, setWebsite] = useState("")
  const navigate = useNavigate();

  // FUNCTIONS
  const onNameChange = e =>{
    setName(e.target.value);
  }
  const onEmailChange = e =>{
    setEmail(e.target.value);
  }
  const onPhoneChange = e =>{
    setPhone(e.target.value);
  }
  const onUsernameChange = e =>{
    setUsername(e.target.value);
  }
  const onWebsiteChange = e =>{
    setWebsite(e.target.value);
  }

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (!name) {
      alert("Name can't be empty");
      return;
    }
    if (!username) {
      alert("username can't be empty");
      return;
    }
    if (!email) {
      alert("email can't be empty");
      return;
    }
    if (!phone) {
      alert("phone can't be empty");
      return;
    }
    if (!website) {
      alert("website can't be empty");
      return;
    }

      const user = { name: name, email: email, username: username, phone: phone, website: website }
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
              onChange={(event) => onNameChange(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(event) => onUsernameChange(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(event) => onEmailChange(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your phone no."
              name="phone"
              value={phone}
              onChange={(event) => onPhoneChange(event)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your website"
              name="website"
              value={website}
              onChange={(event) => onWebsiteChange(event)}
            />
          </div>
          <button type="submit" className="btn btn-info text-white col-12">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserNew;
