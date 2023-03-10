import React, { Component } from "react";

import axios from "axios";
import Ticket from "../Ticket";
import AddTicket from "../AddTicket";

class Client extends Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8081/gateway/tickets/client/" + this.props.user.id) // get the tickets assigned to this client
      .then((response) => this.setState({ tickets: response.data }));
  }

  deleteTicket = (id) => {
    axios.delete("http://localhost:8081/gateway/tickets/" + id);
  };

  render() {
    const { tickets } = this.state;
    const ls = require("local-storage");
    const loggedInUser = ls.get("user");
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
        <AddTicket user={loggedInUser} />
      </React.Fragment>
    );
  }
}
export default Client;
