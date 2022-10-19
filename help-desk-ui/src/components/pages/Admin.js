import React, { Component } from "react";

import axios from "axios";
import UnassignedTicketMolecule from "../molecules/UnassignedTicketMolecule";
import MultipleSelectInputMolecule from "../molecules/MultipleSelectInputMolecule";
import FormSubmitAtom from "../atoms/FormSubmitAtom";

class Admin extends Component {
  state = {
    tickets: [],
    users: [],
    user_id: [""],
    selectedTicket: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:8081/gateway/tickets/unassigned")
      .then((response) => this.setState({ tickets: response.data }));
    axios
      .get("http://localhost:8081/gateway/users/")
      .then((response) => this.setState({ users: response.data }));
  }

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.ticket);
  };

  onHandleClick = (ticket) => {
    this.setState({ selectedTicket: ticket }); // this is the ticket that was clicked
  };

  onHandleSubmit = (e, id) => {
    e.preventDefault(); // don't behave like a form, don't refresh yourself
    const { user_id, selectedTicket } = this.state; // get the current values of each field from the state
    console.log(user_id);
    console.log("ticket id:" + selectedTicket.id);
    if (user_id === "") {
      this.setState({ errors: { username: "Engineer ID is required" } });
      return;
    }

    axios.get(
      "http://localhost:8081/gateway/tickets/engineer/" +
        user_id +
        "/addto/" +
        selectedTicket.id
    );
    window.location.reload(false);
  };

  deleteTicket = (id) => {
    axios.delete("http://localhost:8081/gateway/tickets/" + id);
  };

  render() {
    const { tickets, users, user_id } = this.state;
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            <h3>Unassigned Tickets</h3>
          </div>
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="card m-3 p-3"
              onClick={this.onHandleClick.bind(this, ticket)}
            >
              <UnassignedTicketMolecule
                key={ticket.id}
                ticket={ticket}
                handleDeleteTicket={this.deleteTicket.bind(this, ticket.id)}
              />
              <form onSubmit={this.onHandleSubmit}>
                <MultipleSelectInputMolecule
                  label="Engineer"
                  type="text"
                  name="user_id"
                  ticket={ticket}
                  value={user_id}
                  onChange={this.onHandleChange}
                  options={users}
                />
                <FormSubmitAtom
                  label="Assign Engineer"
                  onClick={this.onHandleClick.bind(this, ticket)}
                />
              </form>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Admin;
