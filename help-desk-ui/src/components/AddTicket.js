import axios from "axios";
import FormInput from "./molecules/FormInput";
import React, { Component } from "react";
import FormSubmitAtom from "./atoms/FormSubmitAtom";
class AddTicket extends Component {
  state = {
    clientId: "",
    engineerId: "",
    title: "",
    errors: {},
    messages: [],
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("entered onHandleSubmit");
    const { clientId, engineerId, title } = this.state;
    if (clientId === "") {
      this.setState({ errors: { clientId: "Client is required" } });
      return;
    }
    if (title === "") {
      this.setState({ errors: { title: "Title is required" } });
      return;
    }
    if (engineerId === "") {
      this.setState({ errors: { engineerId: "Engineer is required" } });
      return;
    }
    const { messages } = [];
    const resolved = false;
    const newTicket = {
      clientId,
      messages: [],
      title,
      engineerId,
      resolved: false,
    };
    console.log("title: " + title);
    console.log("engineerId: " + engineerId);
    console.log("messages: " + messages);
    console.log("clientId: " + clientId);
    axios
      .post("http://localhost:8081/gateway/tickets", newTicket)
      .then((res) => {
        this.setState({ messages: "", clientId: "" });
      });
  };

  render() {
    const { clientId, engineerId, title, errors } = this.state;
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Helpdesk Query
            <div className="card-body">
              <form onSubmit={this.onHandleSubmit}>
                <FormInput
                  label="Clientid"
                  type="number"
                  name="clientId"
                  value={clientId}
                  onChange={this.onHandleChange}
                  placeholder="Please type the ClientID"
                  errors={errors.clientId}
                />
                <FormInput
                  label="Message"
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.onHandleChange}
                  placeholder="Please type the Message"
                  errors={errors.title}
                />
                <FormInput
                  label="Engineerid"
                  type="number"
                  name="engineerId"
                  value={engineerId}
                  onChange={this.onHandleChange}
                  placeholder="Please type the EngineerID"
                  errors={errors.engineerId}
                />

                <FormSubmitAtom label="Add Ticket" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddTicket;
