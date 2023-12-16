import React, { useEffect } from "react";
import "./nav.css";
import moment from "moment";
import { bottomNavActions } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export const Bottombar = () => {
  const dispatch = useDispatch();
  const { dateTime } = useSelector((state) => state.bottomNavStore);
  const { defaults } = useSelector((state) => state.layoutStore);
  const { bottombarEnabled } = defaults;

  useEffect(() => {
    setInterval(() => {
      const updatedDateTime = moment(new Date()).format(
        "MMM DD, YYYY hh:mm:ss a",
      );
      dispatch(bottomNavActions.setDateTime(updatedDateTime));
    }, 1000);
  }, []);

  return (
    <>
      {bottombarEnabled && (
        <div className="bottombar-container">
          <div className="bottombar-container-header">status bar</div>
          <div className="bottombar-container-status">
            <div></div>
            <div>{dateTime}</div>
          </div>
        </div>
      )}
    </>
  );
};
