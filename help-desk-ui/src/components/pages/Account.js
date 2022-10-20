import PropTypes from "prop-types";
import React, { Component } from "react";
import AccountBodyMolecule from "../molecules/AccountBodyMolecule";
import AccountHeaderMolecule from "../molecules/AccountHeaderMolecule";

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
    const { showInfo } = this.state;
    return (
      <div className="card mb-1">
        <AccountHeaderMolecule
          account={this.props.account}
          onClickDelete={this.onHandleDelete}
          onClickChevron={this.onHandleClick}
        />
        {showInfo ? <AccountBodyMolecule account={this.props.account} /> : null}
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
