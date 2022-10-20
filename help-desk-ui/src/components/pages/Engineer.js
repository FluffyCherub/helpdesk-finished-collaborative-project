import React, { Component } from "react";

import axios from "axios";
import Ticket from "../Ticket";

class Engineer extends Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:8081/gateway/tickets/engineer/" + this.props.user.id // get the tickets assigned to this engineer
      )
      .then((response) => this.setState({ tickets: response.data }));
  }

  deleteTicket = (id) => {
    axios.delete("http://localhost:8081/gateway/tickets/" + id);
  };

  render() {
    const ls = require("local-storage");
    const loggedInUser = ls.get("user");
    const { tickets } = this.state;
    console.log("the user's full name is " + loggedInUser.fullName);
    return (
      <React.Fragment>
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            handleDeleteTicket={this.deleteTicket.bind(this, ticket.id)}
            user={loggedInUser}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Engineer;
