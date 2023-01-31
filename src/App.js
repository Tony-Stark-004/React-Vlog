import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home/Home'
import Login from './Components/Pages/Login/Login'
import Register from './Components/Pages/Register/Register'
import Setting from './Components/Pages/Setting/Setting'
import Write from './Components/Pages/Writepage/Write'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Singlepost from './Components/Singlepost/Singlepost'

const App = () => {
  const user = false
  return (
   <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home key={1} />} ></Route>
          <Route exact path='/register' element={user? <Home />:<Register key={2}/>} ></Route>
          <Route exact path='/login' element={user? <Home />:<Login key={3}/>} ></Route>
          <Route exact path='/write' element={user? <Write key={4} />: <Register key={2}/>} ></Route>
          <Route exact path='/setting' element={user? <Setting key={5} />: <Register key={2}/>} ></Route>
          <Route exact path='/post/:postId' element={<Singlepost key={6} />} ></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App