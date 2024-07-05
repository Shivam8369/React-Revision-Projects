import React from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  console.log(item);

  return (
    <li>
      <div className="menu-item" style={{display:'flex'}}>
        <p>{item.label}</p>
        <span>+</span>
      </div>
      {item.children && item.children.length > 0 ? (
        <MenuList menus={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;

