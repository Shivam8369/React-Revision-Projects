import React from 'react'
import MenuList from './MenuList';

const MenuTree = ({menu}) => {
  return (
    <div className='Menu-Card'>
        <h1>Navigation-Tree</h1>
        <MenuList menus={menu}/>
    </div>
  )
}

export default MenuTree