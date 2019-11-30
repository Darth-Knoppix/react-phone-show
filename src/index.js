import React from "react";
import "./index.css";

export default function Workspace({ title, children, info }) {
  return (
    <div className="workspace">
      <header className="title">{title}</header>
      <div className="phone-container">
        <div className="phone">{children}</div>
      </div>
      <aside className="info">{info}</aside>
    </div>
  );
}
