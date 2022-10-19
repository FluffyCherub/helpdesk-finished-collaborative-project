import React, { Component } from "react";
import Ticket from "./Ticket";
import axios from "axios";

class Tickets extends Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8081/gateway/tickets")
      .then((response) => this.setState({ tickets: response.data }));
  }

  deleteTicket = (id) => {
    axios.delete("http://localhost:8081/gateway/tickets/" + id);
  };

  render() {
    const { tickets } = this.state;
    return (
      <React.Fragment>
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            handleDeleteTicket={this.deleteTicket.bind(this, ticket.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Tickets;
