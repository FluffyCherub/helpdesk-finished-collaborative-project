import axios from "axios";
import FormInput from "../molecules/FormInput";
import React, { Component } from "react";
import FormSubmitAtom from "../atoms/FormSubmitAtom";
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
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("entered onHandleSubmit");
    const { userType, username, email, fullName, password, specialism } =
      this.state;
    if (userType === "") {
      this.setState({ errors: { userType: "Usertype is required" } });
      return;
    }
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
    if (specialism === "") {
      this.setState({ errors: { specialism: "Specialism is required" } });
      return;
    }

    const { messages } = [];
    const resolved = false;
    const newAccount = {
      userType,
      username,
      email,
      fullName,
      password,
      specialism,
      resolved: false,
    };
    axios
      .post("http://localhost:8081/gateway/users", newAccount)
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
      });
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
                  label="Fullname"
                  type="text"
                  name="Fullname"
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
                  type="text"
                  name="Password"
                  value={password}
                  onChange={this.onHandleChange}
                  placeholder="Please type a strong password"
                  errors={errors.password}
                />
                <FormInput
                  label="Usertype"
                  type="text"
                  name="UserType"
                  value={userType}
                  onChange={this.onHandleChange}
                  placeholder=""
                  errors={errors.userType}
                />

                <FormInput
                  label="speacialism"
                  type="text"
                  name="specialism"
                  value={specialism}
                  onChange={this.onHandleChange}
                  placeholder=""
                  errors={errors.specialism}
                />

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
