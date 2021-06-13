import React from 'react'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

import styles from './SideMenu.module.css'
import { sideMenuList } from './data/mockup'

const SideMenu: React.FC = () => {
  return (
    <Menu mode='vertical' className={styles['side-menu']}>
      {sideMenuList.map((menu) => {
        return (
          <Menu.SubMenu
            key={`side-menu-${menu.title}`}
            title={
              <span>
                <GifOutlined style={{ marginRight: 10 }} />
                {menu.title}
              </span>
            }
          >
            {menu.subMenu.map((subMenu) => {
              return (
                <Menu.SubMenu
                  key={`sub-menu-${subMenu.title}`}
                  title={
                    <span>
                      <GifOutlined style={{ marginRight: 10 }} />
                      {subMenu.title}
                    </span>
                  }
                >
                  {subMenu.subMenu.map((subSubMenu) => {
                    return (
                      <Menu.Item key={`sub-sub-menu-${subSubMenu}`}>
                        <span>
                          <GifOutlined style={{ marginRight: 10 }} />
                          {subSubMenu}
                        </span>
                      </Menu.Item>
                    )
                  })}
                </Menu.SubMenu>
              )
            })}
          </Menu.SubMenu>
        )
      })}
    </Menu>
  )
}

export default SideMenu
