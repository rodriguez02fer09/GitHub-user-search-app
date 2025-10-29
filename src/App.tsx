import React from 'react'
import Layout from './components/Layout/Layout'
import './App.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Layout defaultClass={'layout'} isDark={false} />
    </div>
  )
}

export default App
