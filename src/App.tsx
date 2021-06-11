import React from 'react'

import { Header, Footer } from './components'
import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  )
}

export default App
