import React from "react";
import { Layout, Menu } from "antd";
import careator_logo from "../../../images/careator-logo.svg";
import { NavLink } from "react-router-dom";
import sidebarOptions from "./SidebarOptions";
import "./PageSideBar.css";

const { Sider } = Layout;

type Props = {
  collapsed: boolean;
  role: string;
};

const PageAppBar: React.FC<Props> = ({ collapsed, role }) => {
  let imageClasses = "sidebar__img";
  if (collapsed) {
    imageClasses = "sidebar__img hide";
  }
  var index = sidebarOptions.findIndex((item) => item.role === role);

  const item_array = [1, 2, 3];

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          className="sidebar__menu"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="image" className="sidebar__item image">
            <img
              src={careator_logo}
              alt="careator-logo"
              id="logo"
              key="logo"
              className={imageClasses}
            />
          </Menu.Item>
          {/* if you write separate component to display menu Item, <Menu.Item></Menu.Item> should be written in that component
          that menu item will remain selected once it is selected. The ant default class will not be changed even though you select another menu item.
          So if you give background color for selected class that won't be changed even if you select other menu item
          So it is better to write in map function than writing separate component and then importing it inside <Menu></Menu>*/}
          {item_array.map(function (item, i) {
            console.log("i", i);
            console.log(sidebarOptions[index].routes[i].route);
            return (
              <Menu.Item
                id={sidebarOptions[index].routes[i].option}
                className="sidebar__item"
                icon={sidebarOptions[index].routes[i].icon}
                key={item}
              >
                <NavLink
                  className="sidebar__item navlink"
                  exact
                  to={sidebarOptions[index].routes[i].route}
                >
                  {sidebarOptions[index].routes[i].option}
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    </>
  );
};

export default PageAppBar;
