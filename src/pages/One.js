import React from 'react'

function One() {
    const arr=[50,500,8,60];

    const initial=0;

    const current=(one,two)=>one+two;
     
    const result=arr.reduce(current,initial)

    console.log(result)
    
  return (
    <div>
      <h1>one</h1>
    </div>
  )
}

export default One
