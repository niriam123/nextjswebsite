import React from 'react'
import Navbar from './Navbar'
import Heropanel from './Heropanel'
import CustomCursor from './BallCursor'
// import './index.css'

const App = () => {
  return (
    <div>
        <CustomCursor />
      <Navbar />
      <Heropanel />
    </div>
  )
}

export default App
