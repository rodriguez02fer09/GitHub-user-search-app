import React from 'react'
import Layout from './components/Layout/Layout'
import './App.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Layout
        defaultClass={'layout'}
        isDark={false}
        toggleDarkMode={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </div>
  )
}

export default App
