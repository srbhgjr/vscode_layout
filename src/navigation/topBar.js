import React from "react";
import "./nav.css";
import { useSelector } from "react-redux";

export const Topbar = (props) => {
  const { defaults } = useSelector((state) => state.layoutStore);
  const { topbarEnabled } = defaults;

  return (
    <>
      {topbarEnabled && (
        <div className="topbar-container">
          <div>Logo</div>
          <div>{props.topBarName}</div>
          <div>User</div>
        </div>
      )}
    </>
  );
};
