import React, {useContext} from 'react';
import { AppContext } from '../contexts/AppContext';

export const CompC = () => {
  const {dispatchPro} = useContext(AppContext);
  return (
    <div>
      <button onClick={() => dispatchPro('add_1')}>++</button>
    </div>
  )
}