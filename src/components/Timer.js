import React, { useState, useEffect } from 'react'

export const Timer = () => {

  const [count, setCount] = useState(0)

  const time = () => {
    setCount(c => c + 1);
  }

  useEffect(() => {
    const interval = setInterval(time, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}