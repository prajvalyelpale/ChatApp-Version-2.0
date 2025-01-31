import React from 'react'
import {Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Chatpage from './Pages/Chatpage'

const App = () => {
  return (
    <div>
      <Route path='/' component={Homepage} exact/>
      <Route path='/chats' component={Chatpage} />
    </div>
  )
}

export default App