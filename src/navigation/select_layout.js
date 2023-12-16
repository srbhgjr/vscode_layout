import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FloatButton } from "antd";
import Stack from "@mui/material/Stack";
import { layoutActions } from "../store/store";
import { ReactComponent as Layout } from "../svg/layout.svg";
import { ReactComponent as SidebarClose } from "../svg/sidebar_close.svg";
import { ReactComponent as SidebarOpen } from "../svg/sidebar_open.svg";
import { ReactComponent as TopbarOpen } from "../svg/topbar_open.svg";
import { ReactComponent as TopbarClose } from "../svg/topbar_close.svg";
import { ReactComponent as BottombarOpen } from "../svg/bottombar_open.svg";
import { ReactComponent as BottombarClose } from "../svg/bottombar_close.svg";
import { ReactComponent as FullScreen } from "../svg/fullscreen_layout.svg";
import { ReactComponent as FullScreenEsc } from "../svg/esc_fullscreen.svg";
import { ReactComponent as SidebarToRight } from "../svg/sidebar_to_right.svg";
import { ReactComponent as SidebarToLeft } from "../svg/sidebar_to_left.svg";

const SelectLayout = () => {
  const dispatch = useDispatch();
  const { defaults } = useSelector((state) => state.layoutStore);
  const { topbarEnabled, sidebarEnabled, bottombarEnabled, sidebarRight } =
    defaults;

  const topbar = topbarEnabled ? (
    <TopbarOpen style={{ height: "1.35rem", width: "1.35rem" }} />
  ) : (
    <TopbarClose style={{ height: "1.35rem", width: "1.35rem" }} />
  );

  const sidebar = sidebarEnabled ? (
    <SidebarOpen style={{ height: "1.35rem", width: "1.35rem" }} />
  ) : (
    <SidebarClose style={{ height: "1.35rem", width: "1.35rem" }} />
  );

  const bottombar = bottombarEnabled ? (
    <BottombarOpen style={{ height: "1.35rem", width: "1.35rem" }} />
  ) : (
    <BottombarClose style={{ height: "1.35rem", width: "1.35rem" }} />
  );

  const fullscreen = (
    <FullScreen style={{ height: "1.35rem", width: "1.35rem" }} />
  );

  const fullscreenEsc = (
    <FullScreenEsc style={{ height: "1.35rem", width: "1.35rem" }} />
  );

  const sidebarToRight = sidebarRight ? (
    <SidebarToRight style={{ height: "1.35rem", width: "1.35rem" }} />
  ) : (
    <SidebarToLeft style={{ height: "1.35rem", width: "1.35rem" }} />
  );

  const handleChangeLayout = (type) => {
    switch (type) {
      case "topbar":
        dispatch(layoutActions.setLayout({ type: "topbarEnabled" }));
        break;
      case "sidebar":
        dispatch(layoutActions.setLayout({ type: "sidebarEnabled" }));
        break;
      case "bottombar":
        dispatch(layoutActions.setLayout({ type: "bottombarEnabled" }));
        break;
      case "fullscreen":
        dispatch(layoutActions.setLayoutFullScreen());
        break;
      case "fullscreenEsc":
        dispatch(layoutActions.setLayoutFullScreenEsc());
        break;
      case "sidebarToRight":
        dispatch(layoutActions.moveSidebar());
        break;
      default:
        break;
    }
  };

  const groupPosition = sidebarRight
    ? {
        bottom: 40,
        left: 30,
      }
    : {
        bottom: 40,
        right: 30,
      };

  return (
    <>
      <FloatButton.Group
        trigger="hover"
        style={groupPosition}
        icon={<Layout style={{ height: "1.35rem", width: "1.35rem" }} />}
      >
        <FloatButton
          tooltip="toggle topbar"
          onClick={() => handleChangeLayout("topbar")}
          icon={topbar}
        />
        <FloatButton
          tooltip="toggle sidebar"
          onClick={() => handleChangeLayout("sidebar")}
          icon={sidebar}
        />
        <FloatButton
          tooltip="toggle bottombar"
          onClick={() => handleChangeLayout("bottombar")}
          icon={bottombar}
        />
        <FloatButton
          tooltip="toggle fullscreen"
          onClick={() => handleChangeLayout("fullscreen")}
          icon={fullscreen}
        />
        <FloatButton
          tooltip="exit full screen"
          onClick={() => handleChangeLayout("fullscreenEsc")}
          icon={fullscreenEsc}
        />
        <FloatButton
          tooltip="move sidebar"
          onClick={() => handleChangeLayout("sidebarToRight")}
          icon={sidebarToRight}
        />
      </FloatButton.Group>
    </>
  );
};
export default SelectLayout;
