import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getAllUsers();
    getAllUsersWithAwait();
  }, []);

  const getAllUsersWithAwait = async () => {
    const result = await axios.get("http://localhost:5000/users");
    console.log(result);
    setUsers(result.data.reverse());
    setLoading(false);
    console.log("After Axios Api call");
  };

  // const getAllUsers = () => {
  //   axios
  //     .get("http://localhost:5000/users")
  //     .then(function (response) {
  //       console.log(response.data);
  //       setUsers(response.data.reverse());
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   console.log("After Axios Api call");
  // };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getAllUsersWithAwait();
  };

  return (
    <div className="container">
      {/* {loading ? (
        <Spinner animation="grow" />
      ) : (
        <div> */}
          <h2 className="text-center py-3">User Management System</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Phone</th>
                <th className="text-center">Website</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>
                    <Link
                      to={`/users/view/${user.id}`}
                      className="btn btn-outline-primary me-2"
                    >
                      View
                    </Link>
                    <Link
                      to={`/users/edit/${user.id}`}
                      className="btn btn-outline-info me-2"
                    >
                      Edit
                    </Link>
                    <Button
                      onClick={() => deleteUser(user.id)}
                      variant="outline-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        {/* </div>
      )} */}
    </div>
  );
};

export default HomePage;
