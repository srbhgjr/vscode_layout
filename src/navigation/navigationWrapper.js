import React from "react";
import "./nav.css";
import { Topbar } from "./topBar";
import { Sidebar } from "./sidebar/sideBar";
import { Bottombar } from "./bottomBar";
import { useSelector } from "react-redux";

export const NavigationWrapper = (props) => {
  const { defaults } = useSelector((state) => state.layoutStore);
  const { sidebarRight } = defaults;
  const {
    topbar = true,
    sidebar = true,
    innerSidebar = true,
    outerSidebar = true,
    bottomBar = true,
    topBarName = "",
  } = props;

  const sidebarPosition = sidebarRight ? (
    <>
      {props.children}
      {sidebar && (
        <Sidebar innerSidebar={innerSidebar} outerSidebar={outerSidebar} />
      )}
    </>
  ) : (
    <>
      {sidebar && (
        <Sidebar innerSidebar={innerSidebar} outerSidebar={outerSidebar} />
      )}
      {props.children}
    </>
  );

  return (
    <div className="nav-wrapper-container">
      {topbar && <Topbar topBarName={topBarName} />}
      <div className="nav-content-sidebar-container">{sidebarPosition}</div>
      {bottomBar && <Bottombar />}
    </div>
  );
};
