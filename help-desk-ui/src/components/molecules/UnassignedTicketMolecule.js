import React, { Component } from "react";
import Ticket from "../Ticket";

export default class UnassignedTicketMolecule extends Component {
  onHandleDelete = () => {
    this.props.handleDeleteTicket();
  };

  render() {
    const { id, title, onHandleDelete, onClickChevron, ticket } = this.props;
    return <Ticket ticket={ticket} />;
  }
}
