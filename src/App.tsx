import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomePage, SignInPage, RegisterPage } from './pages'
import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signIn' component={SignInPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route render={() => <h1>不存在的頁面</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
