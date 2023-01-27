import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  // VARIABLES
  const initialState = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  };

  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(initialState);

  const { name, email, username, phone, website } = user;

  // FUNCTIONS
  const onChangeInput = (event) => {
    // console.log(event);
    // console.log(event.target.name);
    // console.log(event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //HOOK TO LOAD PREPOPULATED DATA ONCE fetchUser()
  useEffect(() => {
    fetchUser();
  }, []

  );

  //API CALL TO PREPOPULATE DATA
  const fetchUser = async () =>{
    const response = await axios.get (`http://localhost:5000/users/${userId}`);
    setUser(response.data);
  }

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

    // await axios.post("http://localhost:5000/users", user);  api call to save new user to db after clicking the submit button
    await axios.put(`http://localhost:5000/users/${userId}`, user);  //api call to save updated user in DB
    navigate({ pathname: "/" });  // to navigate back to home after clicking the submit button
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto p-5 shadow-lg">
        <h2 className="text-center mb-4">Edit User</h2>
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
          <button type="submit" className="btn btn-info text-white col-12">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
