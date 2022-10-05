import React from "react";

const Message = (props) => {
  return (
    <li>
      <div>{props.message}</div>
    </li>
  );
};

export default Message;