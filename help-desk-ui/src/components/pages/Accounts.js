import React, { Component } from "react";
import Account from "./Account";
import axios from "axios";
import EmptyMolecule from "../molecules/EmptyMolecule";
class Accounts extends Component {
  state = {
    accounts: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8081/gateway/users")
      .then((response) => this.setState({ accounts: response.data }));
  }

  deleteAccount = (id) => {
    axios.delete("http://localhost:8081/gateway/users/" + id);
  };
  render() {
    const { accounts } = this.state;
    return (
      <React.Fragment>
        {accounts.length > 0 ? ( // if there are accounts, show them
          <React.Fragment>
            {accounts.map((account) => (
              <Account
                key={account.id}
                account={account}
                handleDeleteAccount={this.deleteAccount.bind(this, account.id)}
              />
            ))}
          </React.Fragment>
        ) : (
          <EmptyMolecule label="No accounts to show" /> // if there are no accounts, show this message
        )}
      </React.Fragment>
    );
  }
}

export default Accounts;
