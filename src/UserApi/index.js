import React from "react";
import "./style.css";

export default function UserApi(props) {
  return (
    <div className="api__post-title-parent-container">
      <div className="api__post-title-container">{props.item.title}</div>
      <div className="api__post-body-container">{props.item.body}</div>
      <div className="api__post-username-container">{props.item.username}</div>
    </div>
  );
}
