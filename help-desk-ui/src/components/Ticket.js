import React, { Component } from "react";
import PropTypes from "prop-types";
import TextAreaAtom from "./atoms/TextAreaAtom";
import IconAtom from "./atoms/IconAtom";
import LabelAtom from "./atoms/LabelAtom";
import TicketHeaderMolecule from "./molecules/TicketHeaderMolecule";
import TicketBodyMolecule from "./molecules/TicketBodyMolecule";

class Ticket extends Component {
  state = {
    showInfo: false,
  };

  onHandleClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  onHandleDelete = () => {
    this.props.handleDeleteTicket();
  };
  state = {
    title: "",
    id: "",
    errors: {},
  };

  render() {
    const { showInfo } = this.state; // destructuring
    const { id, title } = this.props.ticket;

    return (
      <div className="card mb-1">
        <TicketHeaderMolecule
          id={id}
          title={title}
          onClickDelete={this.onHandleDelete}
          onClickChevron={this.onHandleClick}
        />
        {showInfo ? <TicketBodyMolecule id={id} title={title} /> : null}
        <TextAreaAtom />
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
