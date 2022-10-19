import React from "react";
import IconAtom from "../atoms/IconAtom";
import LabelAtom from "../atoms/LabelAtom";

const TicketHeaderMolecule = (props) => {
  const { id, title, onClickDelete, onClickChevron } = props;
  return (
    <div className="card-header">
      <LabelAtom label="Issue " />
      <LabelAtom label={id} />
      <LabelAtom label={title} />
      <IconAtom icon="fa fa-chevron-down" onClick={onClickChevron} />
      <div className="float-end">
        <IconAtom icon="fa fa-trash" onClick={onClickDelete} />
      </div>
    </div>
  );
};

export default TicketHeaderMolecule;
