import React, { Component } from "react";
import PropTypes from "prop-types";


class Ticket  extends Component {
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
    title:"",
    id:"",
    errors:{},
  };
  
  render() {
    const { showInfo } = this.state; // destructuring
    const { id, title} = this.props.ticket;
    if (title === "") {
    this.setState({errors: {title:"title is required."}});
    return;
  } 
  if (id === "") {
    this.setState({errors: {id:"id is required."}});
    return;
  } 
    return (
      <div className="card mb-1">
        <div className="card-header">
          <i className="fa fa-building" aria-hidden="true"></i>
          <span className="mx-3">Ticket  ID: {id}</span>
          <i
            className="fa fa-trash float-end"
            aria-hidden="true"
            onClick={this.onHandleDelete}
          ></i>
          <i
            className="fa fa-chevron-down"
            aria-hidden="true"
            onClick={this.onHandleClick}
          ></i>
        </div>
        {showInfo ? (
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fa fa-map-marker" aria-hidden="true">
                  &nbsp;
                </i>
                Title: {title}
              </li>
              <li className="list-group-item">
                <i className="fa fa-globe" aria-hidden="true">
                  &nbsp;
                </i>
                Id: {id}
              </li>
            </ul>
          </div>
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
