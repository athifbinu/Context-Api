import React, { useState } from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import {AppContext} from './Context/Appcontext'
function App() {


  const [state,setState]=useState(10)
  
  return (
    <div>
    <ul>
     <li><Link to="/">One</Link></li>
     <li><Link to="/two">Two</Link></li>
     <li><Link to="/three">Three</Link></li>
    </ul>

  <AppContext.Provider value={{data:state}}>
  <Routes>
      <Route path='/' element={<One/>}/>
      <Route path='/two' element={<Two/>}/>
      <Route  path='/three' element={<Three/>}/>
    </Routes>

  </AppContext.Provider>





 </div>

 
     
  )


}

export default App
