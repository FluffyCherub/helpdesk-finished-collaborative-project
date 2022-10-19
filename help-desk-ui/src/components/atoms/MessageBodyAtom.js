import React from "react";

const MessageBodyAtom = (props) => {
  const { body } = props;
  return (
    <div className="card m-3">
      <div className="card-body mx-3">{body}</div>
    </div>
  );
};

export default MessageBodyAtom;
