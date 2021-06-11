import React from 'react'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'

const SideMenu: React.FC = () => {
  return (
    <Menu mode='vertical' className={styles['side-menu']}>
      {sideMenuList.map((menu, index) => {
        return (
          <Menu.SubMenu
            // eslint-disable-next-line react/no-array-index-key
            key={`side-menu-${index}`}
            title={
              <span>
                <GifOutlined style={{ marginRight: 10 }} />
                {menu.title}
              </span>
            }
          >
            {menu.subMenu.map((subMenu, subIndex) => {
              return (
                <Menu.SubMenu
                  // eslint-disable-next-line react/no-array-index-key
                  key={`sub-menu-${subIndex}`}
                  title={
                    <span>
                      <GifOutlined style={{ marginRight: 10 }} />
                      {subMenu.title}
                    </span>
                  }
                >
                  {subMenu.subMenu.map((subSubMenu, subSubIndex) => {
                    return (
                      <Menu.Item
                        // eslint-disable-next-line react/no-array-index-key
                        key={`sub-sub-menu-${subSubIndex}`}
                      >
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
