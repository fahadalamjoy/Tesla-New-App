import React from 'react'
import News from './components/News'
import './App.css'
import { NewsContextProvider } from './NewsContext'
function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  )
}

export default App
