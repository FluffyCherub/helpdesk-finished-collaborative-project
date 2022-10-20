import React, { Component } from "react";
import Ticket from "../Ticket";

export default class UnassignedTicketMolecule extends Component {
  onHandleDelete = () => {
    this.props.handleDeleteTicket();
  };

  render() {
    const { user, ticket } = this.props;
    return <Ticket ticket={ticket} user={user} />;
  }
}
