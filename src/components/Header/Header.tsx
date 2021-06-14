import React from 'react'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { useHistory, Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import styles from './Header.module.css'

const Header: React.FC = () => {
  const history = useHistory()

  return (
    <div className={styles['app-header']}>
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>讓旅遊更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>英文</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            語言
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => history.push('register')}>註冊</Button>
            <Button onClick={() => history.push('signIn')}>登入</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <Link to='/'>
          <img src={logo} alt='' className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>
            React 旅遊網
          </Typography.Title>
        </Link>
        <Input.Search
          placeholder='請輸入旅遊目的地、主題或關鍵字'
          className={styles['search-input']}
        />
      </Layout.Header>
      <Menu mode='horizontal' className={styles['main-menu']}>
        <Menu.Item key='1'>旅遊首頁</Menu.Item>
        <Menu.Item key='2'>周末游</Menu.Item>
        <Menu.Item key='3'>跟團游</Menu.Item>
        <Menu.Item key='4'>自由行</Menu.Item>
        <Menu.Item key='5'>私家團</Menu.Item>
        <Menu.Item key='6'>郵輪</Menu.Item>
        <Menu.Item key='7'>飯店+景點</Menu.Item>
        <Menu.Item key='8'>當地玩樂</Menu.Item>
        <Menu.Item key='9'>主题游</Menu.Item>
        <Menu.Item key='10'>客製游</Menu.Item>
        <Menu.Item key='11'>游學</Menu.Item>
        <Menu.Item key='12'>簽證</Menu.Item>
        <Menu.Item key='13'>企業游</Menu.Item>
        <Menu.Item key='14'>高端游</Menu.Item>
        <Menu.Item key='15'>愛玩户外</Menu.Item>
        <Menu.Item key='16'>保險</Menu.Item>
      </Menu>
    </div>
  )
}

export default Header
