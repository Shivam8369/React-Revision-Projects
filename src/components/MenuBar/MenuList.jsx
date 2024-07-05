import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ menus }) => {
  console.log(menus);

  return (
    <ul>
      {menus.map((menu, index) => (
        <MenuItem key={index} item={menu} />
      ))}
    </ul>
  );
};

export default MenuList;
