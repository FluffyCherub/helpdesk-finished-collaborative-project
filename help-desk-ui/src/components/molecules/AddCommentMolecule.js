import axios from "axios";
import React, { Component } from "react";
import LabelAtom from "../atoms/LabelAtom";
import TextAreaAtom from "../atoms/TextAreaAtom";

class AddCommentMolecule extends Component {
  state = { body: "", errors: {} };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("entered onHandleSubmit in AddCommentMolecule");
    const { body } = this.state;
    if (body === "") {
      this.setState({ errors: { clientId: "Please enter some text" } });
      // for some reason this occurs
      return;
    }
    const newMessage = {
      body,
      user: {
        // hard coded user
        userType: "Engineer",
        id: 1,
        username: "testEngineer13",
        email: "testengi@gmail.com",
        fullName: "Jane Doe",
        password: "password1",
        specialism: "software",
      },
    };
    axios
      .put(
        "http://localhost:8081/gateway/tickets/addMessage/" +
          this.props.ticketId,
        newMessage
      )
      .then((res) => {
        this.setState({ body: "", clientId: "" });
      });
  };
  render() {
    const { clientId, engineerId, title, errors } = this.state;
    const { author } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.onHandleSubmit}>
          <LabelAtom label={author} />
          <TextAreaAtom
            onChange={this.onHandleChange}
            placeholder="Please enter your reply here..."
            name="body"
            value={this.state.body}
            // errors={errors.message}
          />
        </form>
      </div>
    );
  }
}

export default AddCommentMolecule;
