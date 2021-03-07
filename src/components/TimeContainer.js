import React, { useState } from 'react'
import { Timer } from './Timer';

export const TimeContainer = () => {
  const [disp, setDisp] = useState(true);

  return (
    <div>
      <button onClick={() => setDisp(!disp)}>Switch Timer</button>
      { disp && <Timer /> }
    </div>
  )
}