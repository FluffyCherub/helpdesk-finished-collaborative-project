import React from "react";
import LabelAtom from "../atoms/LabelAtom";
import MessageBodyAtom from "../atoms/MessageBodyAtom";

const MessageMolecule = (props) => {
  const { author, body, id } = props;
  return (
    <React.Fragment>
      <div>{author}</div>
      <MessageBodyAtom body={body} />
    </React.Fragment>
  );
};

export default MessageMolecule;
