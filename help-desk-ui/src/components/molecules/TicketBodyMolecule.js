import React from "react";
import IconAtom from "../atoms/IconAtom";
import LabelAtom from "../atoms/LabelAtom";

const TicketBodyMolecule = (props) => {
  const { title, id, name, username, email, phone } = props;
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
    </div>
  );
};

export default TicketBodyMolecule;
