import React from "react";
import IconAtom from "../atoms/IconAtom";
import LabelAtom from "../atoms/LabelAtom";
import TextAreaAtom from "../atoms/TextAreaAtom";
import AddCommentMolecule from "./AddCommentMolecule";
import MessageMolecule from "./MessageMolecule";

const AccountBodyMolecule = (props) => {
  const { username, email, userType} = props;
  return (
    <div className="card-body">
      <ul className="list-group">
        <li className="list-group-item">
          <IconAtom icon="fa fa-map-marker" /> &nbsp;
          <LabelAtom label="username" />
          <LabelAtom label={username} />
        </li>
        <li className="list-group-item">
          <IconAtom icon="fa fa-map-marker" /> &nbsp;
          <LabelAtom label="email" />
          <LabelAtom label={email} />
        </li>
      </ul>
      
    </div>
  );
};

export default AccountBodyMolecule;
