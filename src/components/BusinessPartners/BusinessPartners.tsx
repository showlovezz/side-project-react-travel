import React from 'react'
import { Row, Col, Typography, Divider } from 'antd'

import image1 from '../../assets/images/microsoft-80658_640.png'
import image2 from '../../assets/images/icon-720944_640.png'
import image3 from '../../assets/images/follow-826033_640.png'
import image4 from '../../assets/images/facebook-807588_640.png'

import styles from './BusinessPartners.module.css'

const companies = [
  { src: image1, title: 'Microsoft' },
  { src: image2, title: 'YouTube' },
  { src: image3, title: 'Ins' },
  { src: image4, title: 'Facebook' },
]

const BusinessPartners: React.FC = () => {
  return (
    <div className={styles.content}>
      <Divider orientation='left'>
        <Typography.Title level={3}>合作企業</Typography.Title>
      </Divider>
      <Row>
        {companies.map((company, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Col span={6} key={`business-partner-${index}`}>
            <img
              alt='business-partner'
              src={company.src}
              className={styles['image-content']}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default BusinessPartners
