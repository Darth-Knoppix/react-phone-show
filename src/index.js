import React from "react";
import "./index.css";

export default function Workspace({ title, children, info }) {
  return (
    <div className="rps-workspace">
      <header className="rps-title">{title}</header>
      <div className="rps-phone-container">
        <div className="rps-phone">{children}</div>
      </div>
      <aside className="rps-info">{info}</aside>
    </div>
  );
}
