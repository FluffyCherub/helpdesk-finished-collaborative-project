import React from "react";
import IconAtom from "../atoms/IconAtom";
import LabelAtom from "../atoms/LabelAtom";
import AddCommentMolecule from "./AddCommentMolecule";
import MessageMolecule from "./MessageMolecule";

const TicketBodyMolecule = (props) => {
  const { title, id, messages, user, name, username, email, phone } = props;
  return (
    <div className="card-body">
      <ul className="list-group">
        <li className="list-group-item">
          <IconAtom icon="fa fa-map-marker" /> &nbsp;
          <LabelAtom label="Title" />
          <LabelAtom label={title} />
        </li>
        <li className="list-group-item">
          <IconAtom icon="fa fa-map-marker" /> &nbsp;
          <LabelAtom label="ID" />
          <LabelAtom label={id} />
        </li>
      </ul>
      <div className="m-3">
        {messages.map((message) => (
          <MessageMolecule
            key={message.id}
            author={message.user.fullName}
            body={message.body}
            message={message}
            id={message.id}
            //handleDeleteMessage={this.deleteMessage.bind(this, message.id)}
          />
        ))}
      </div>
      <div className="m-3">
        <AddCommentMolecule user={user} ticketId={id} />
      </div>
    </div>
  );
};

export default TicketBodyMolecule;
