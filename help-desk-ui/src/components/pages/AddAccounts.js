import axios from "axios";
import FormInput from "../molecules/FormInput";
import React, { Component } from "react";
import FormSubmitAtom from "../atoms/FormSubmitAtom";
import MultipleSelectInputMolecule from "../molecules/MultipleSelectInputMolecule";
class AddAccount extends Component {
  state = {
    userType: "",
    username: "",
    email: "",
    fullName: "",
    password: "",
    specialism: "",
    errors: {},
    messages: [],
  };

  onHandleChange = (e) => {
    console.log([e.target.name]);
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("entered onHandleSubmit");
    const { userType, username, email, fullName, password, specialism } =
      this.state;
    if (username === "") {
      this.setState({ errors: { username: "Username is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (fullName === "") {
      this.setState({ errors: { fullName: "Fullname is required" } });
      return;
    }

    if (password === "") {
      this.setState({ errors: { password: "Password is required" } });
      return;
    }
    if (userType === "none") {
      this.setState({ errors: { specialism: "User Type is required" } });
      return;
    }

    if (userType === "Enigneer" && specialism === "") {
      this.setState({
        errors: { specialism: "Specialism is required for Engineers" },
      });
      return;
    }
    console.log("passed validation");

    var newAccount = {};
    if (userType === "Engineer") {
      newAccount = {
        username,
        email,
        fullName,
        password,
        userType,
        specialism,
      };
      console.log("new engineer Account", newAccount);
    } else {
      newAccount = {
        userType,
        username,
        email,
        fullName,
        password,
      };
      console.log("new other Account", newAccount);
    }
    if (userType === "Admin") {
      axios
        .post("http://localhost:8081/gateway/users/admin", newAccount)
        .then((res) => {
          this.setState({
            messages: "",
            clientId: "",
            userType: "",
            username: "",
            email: "",
            fullName: "",
            password: "",
            specialism: "",
          });
          window.location.reload(true);
        });
    } else if (userType === "Client") {
      axios
        .post("http://localhost:8081/gateway/users/client", newAccount)
        .then((res) => {
          this.setState({
            messages: "",
            clientId: "",
            userType: "",
            username: "",
            email: "",
            fullName: "",
            password: "",
            specialism: "",
          });
          window.location.reload(true);
        });
    } else if (userType === "Engineer") {
      console.log("entered engineer");
      console.log(newAccount.specialism);
      console.log(newAccount);
      axios
        .post("http://localhost:8081/gateway/users/engineer", newAccount)
        .then((res) => {
          this.setState({
            messages: "",
            clientId: "",
            userType: "",
            username: "",
            email: "",
            fullName: "",
            password: "",
            specialism: "",
          });
          window.location.reload(true);
        });
    } else {
      this.setState({
        messages: "",
        clientId: "",
        userType: "",
        username: "",
        email: "",
        fullName: "",
        password: "",
        specialism: "",
      });
      window.location.reload(false);
    }
  };

  render() {
    const {
      userType,
      username,
      email,
      fullName,
      password,
      specialism,
      errors,
    } = this.state;
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Create Account
            <div className="card-body">
              <form onSubmit={this.onHandleSubmit}>
                <FormInput
                  label="Name"
                  type="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={this.onHandleChange}
                  placeholder="Please type fullname"
                  errors={errors.fullName}
                />
                <FormInput
                  label="username"
                  type="username"
                  name="username"
                  value={username}
                  onChange={this.onHandleChange}
                  placeholder="Please type username"
                  errors={errors.username}
                />
                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.onHandleChange}
                  placeholder="Please type the email"
                  errors={errors.username}
                />
                <FormInput
                  label="Create Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.onHandleChange}
                  placeholder="Please type a strong password"
                  errors={errors.password}
                />

                <div className="form-group">
                  <label htmlFor="multipleSelectInputMolecule">type</label>
                  <select
                    name="userType"
                    value={userType}
                    onChange={this.onHandleChange}
                  >
                    <option value="Admin">Admin</option>
                    <option value="Client">Client</option>
                    <option value="Engineer">Engineer</option>
                  </select>
                </div>

                {userType === "Engineer" ? (
                  <FormInput
                    label="speacialism"
                    type="text"
                    name="specialism"
                    value={specialism}
                    onChange={this.onHandleChange}
                    placeholder=""
                    errors={errors.specialism}
                  />
                ) : null}

                <FormSubmitAtom label="Add Account" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddAccount;
