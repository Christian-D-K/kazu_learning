import React, { useReducer } from 'react'



export const BasicReducer = () => {
  
  return (
    <div>
      <div>Count:{count}</div>
      <button onClick={() => dispatch('add_1')}>Add+1</button>
      <button onClick={() => dispatch('multiple_3')}>Multiple*3</button>
      <button onClick={() => dispatch('reset')}>RESET</button>
    </div>
  )
}
