import React, { Component } from "react";
import axios from "axios";
import Ticket from "../Ticket";
import EmptyMolecule from "../molecules/EmptyMolecule";
import TaskDropDownHeaderMolecule from "../molecules/TaskDropDownHeaderMolecule";
const ls = require("local-storage");

class Engineer extends Component {
  state = {
    tickets: [],
    showTickets: ls("viewTickets") === null ? false : ls("viewTickets"),
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

  onHandleClickViewTickets = () => {
    this.setState({ viewTickets: !this.state.viewTickets });
    ls.set("viewTickets", !this.state.viewTickets);
  };

  render() {
    const loggedInUser = ls.get("user");
    const { tickets, viewTickets } = this.state;
    console.log("the user's full name is " + loggedInUser.fullName);
    return (
      <React.Fragment>
        <TaskDropDownHeaderMolecule
          label="View Your Tickets"
          onClickChevron={this.onHandleClickViewTickets}
        />
        {viewTickets ? (
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
        ) : null}
      </React.Fragment>
    );
  }
}
export default Engineer;
