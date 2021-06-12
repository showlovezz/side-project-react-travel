import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomePage from './pages'
import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path='/' component={HomePage} />
      </BrowserRouter>
    </div>
  )
}

export default App
