import React, { useState, useEffect } from 'react'

export const Basic3 = () => {

  const [count, setCount] = useState(0);
  const [item, setItem] = useState('');

  useEffect(() => {
    console.log('effect')
  }, [item])
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>おせ{count}</button>
      <input value={item} onChange={ev=>setItem(ev.target.value)} />
    </div>
  )
}
