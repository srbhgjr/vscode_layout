import React, { useState } from "react";
import "../nav.css";
import WindowIcon from "@mui/icons-material/Window";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const OuterSidebar = () => {
  const navigate = useNavigate();
  const { defaults } = useSelector((state) => state.layoutStore);
  const { sidebarRight } = defaults;

  const goToPage = (page) => {
    navigate(page);
  };

  const display_on_hover = sidebarRight
    ? "display-on-hover-right"
    : "display-on-hover-left";

  return (
    <div className="outer-sidebar-container">
      {/* default */}
      <div className="outer-sidebar-general">
        <div className="animate-on-hover" onClick={() => goToPage("/")}>
          <WindowIcon />
          <div className={display_on_hover}>Home</div>
        </div>
        <div className="outer-sidebar-divider"></div>
        <div
          className="animate-on-hover"
          onClick={() => goToPage("/preferences")}
        >
          <PersonIcon />
          <div className={display_on_hover}>Personal preferences</div>
        </div>
        <div className="animate-on-hover" onClick={() => goToPage("/admin")}>
          <AdminPanelSettingsIcon />
          <div className={display_on_hover}>Administrator</div>
        </div>
      </div>

      {/* settings */}
      <div className="outer-sidebar-general">
        <div className="outer-sidebar-divider"></div>
        <div className="animate-on-hover">
          <SettingsIcon />
          <div className={display_on_hover}>Settings</div>
        </div>
      </div>
    </div>
  );
};
