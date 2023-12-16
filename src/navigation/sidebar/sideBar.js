import React, { useState } from "react";
import "../nav.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useSelector, useDispatch } from "react-redux";
import { sideNavActions } from "../../store/store";
import { InnerSidebar } from "./innerSidebar";
import { OuterSidebar } from "./outerSidebar";
import { ReactComponent as ArrowRight } from "../../svg/arrow_right.svg";
import { ReactComponent as ArrowLeft } from "../../svg/arrow_left.svg";
import { FloatButton } from "antd";

export const Sidebar = (props) => {
  const { sidebarOpen } = useSelector((state) => state.sideNavStore);
  const dispatch = useDispatch();
  const { defaults } = useSelector((state) => state.layoutStore);
  const { sidebarEnabled, sidebarRight } = defaults;

  const handleSidebarOpen = () => {
    dispatch(sideNavActions.setSidebarOpen());
  };

  const icon = sidebarRight ? (
    <>
      {sidebarOpen ? (
        <ArrowRight
          className="sidebar-icon-right"
          onClick={handleSidebarOpen}
        />
      ) : (
        <ArrowLeft className="sidebar-icon-right" onClick={handleSidebarOpen} />
      )}
    </>
  ) : (
    <>
      {sidebarOpen ? (
        <ArrowLeft className="sidebar-icon-left" onClick={handleSidebarOpen} />
      ) : (
        <ArrowRight className="sidebar-icon-left" onClick={handleSidebarOpen} />
      )}
    </>
  );

  const sidebarPosition = sidebarRight ? (
    <div className="sidebar-container">
      {icon}
      <div className="inner-outer-sidebar-container">
        {props.innerSidebar && <InnerSidebar />}
        {props.outerSidebar && <OuterSidebar />}
      </div>
    </div>
  ) : (
    <div className="sidebar-container">
      {icon}
      <div className="inner-outer-sidebar-container">
        {props.outerSidebar && <OuterSidebar />}
        {props.innerSidebar && <InnerSidebar />}
      </div>
    </div>
  );

  return <>{sidebarEnabled && sidebarPosition}</>;
};
