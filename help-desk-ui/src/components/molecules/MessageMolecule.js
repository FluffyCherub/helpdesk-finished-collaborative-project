import React from "react";
import MessageBodyAtom from "../atoms/MessageBodyAtom";

const MessageMolecule = (props) => {
  const { author, body } = props;
  return (
    <React.Fragment>
      <div>{author}</div>
      <MessageBodyAtom body={body} />
    </React.Fragment>
  );
};

export default MessageMolecule;
