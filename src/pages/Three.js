import React,{useContext} from 'react'
import { AppContext } from '../Context/Appcontext';


function Three() {

const {data} = useContext(AppContext);
  return (
    <div>
      <h1>two {data}</h1>

    </div>
  )
}

export default Three
