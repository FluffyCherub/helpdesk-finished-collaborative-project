import React, { Component } from "react";
import PropTypes from "prop-types";
import TicketHeaderMolecule from "./molecules/TicketHeaderMolecule";
import TicketBodyMolecule from "./molecules/TicketBodyMolecule";
const ls = require("local-storage");

class Ticket extends Component {
  state = {
    showInfo:
      ls("isOpen" + this.props.ticket.id) === null
        ? false
        : ls("isOpen" + this.props.ticket.id),
  };

  onHandleClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
    console.log("isOpen" + this.props.ticket.id);
    ls.set("isOpen" + this.props.ticket.id, !this.state.showInfo);
  };

  onHandleDelete = () => {
    this.props.handleDeleteMessage();
  };

  render() {
    const { showInfo } = this.state;
    const { id, title, messages } = this.props.ticket;
    return (
      <div className="card mb-1">
        <TicketHeaderMolecule
          id={id}
          title={title}
          onClickDelete={this.onHandleDelete}
          onClickChevron={this.onHandleClick}
        />
        {showInfo ? (
          <TicketBodyMolecule
            id={id}
            title={title}
            ticket={this.props.ticket}
            messages={messages}
            user={this.props.user}
          />
        ) : null}
      </div>
    );
  }
}

Ticket.defaultProps = {
  name: "Not Defined",
  username: "Not Defined",
  email: "Not Defined",
  phone: "0000000000",
};

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Ticket;
