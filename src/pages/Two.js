import React,{useContext} from 'react'
import { AppContext } from '../Context/Appcontext'
function Two() {
   const {data}=useContext(AppContext)
  return (
    <div>
      <h1>three</h1>
      <p>{data}</p>
    </div>
  )
}

export default Two
