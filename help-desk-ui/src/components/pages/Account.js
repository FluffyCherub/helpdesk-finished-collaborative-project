import PropTypes from "prop-types";
import React, { Component } from "react";
import TicketHeaderMolecule from "../molecules/TicketHeaderMolecule";
import TicketBodyMolecule from "../molecules/TicketBodyMolecule";
class Account extends Component {
  state = {
    showInfo: false,
  };

  onHandleClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  onHandleDelete = () => {
    this.props.handleDeleteMessage();
  };

  render() {
    const { showInfo } = this.state; // destructuring
    const { userType, username, email, fullName, password, specialism,messages } =
      this.props.account;

    return (
      <div className="card mb-1">
        <TicketHeaderMolecule
          userType={userType}
          username={username}
          email={email}
          fullName={fullName}
          password={password}
          specialism={specialism}
          onClickDelete={this.onHandleDelete}
          onClickChevron={this.onHandleClick}
        />
        {showInfo ? (
          <TicketBodyMolecule
            userType={userType}
            username={username}
            email={email}
            fullName={fullName}
            password={password}
            specialism={specialism}
            account={this.props.account}
            messages={messages}
          />
        ) : null}
      </div>
    );
  }
}

Account.defaultProps = {
  name: "Not Defined",
  username: "Not Defined",
  email: "Not Defined",
  phone: "0000000000",
};

Account.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Account;
