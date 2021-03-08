import './App.css';
import { APIFetch } from './components/APIFetch'
import { AppContext } from './contexts/AppContext'
import { Memo } from './components/Memo';
import { useReducer, useState, useCallback } from 'react';
import CountDisplay from './components/CountDisplay';
import CountClick from './components/CountClick';


const initialState = 0;
const reducer = (currentState, action) => {
  switch(action) {
    case 'add_1':
      return currentState + 1
    case 'multiple_3':
      return currentState * 3
    case 'reset':
      return initialState
    default:
      return currentState
  }
} 

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // const AddCount1 = () => {
  //   setCount1(c => c + 1)
  // }

  // const AddCount2 = () => {
  //   setCount2(c => c + 1)
  // }

  const AddCount1 = useCallback(() => {
    setCount1(c => c + 1)
  }, [])

  const AddCount2 = useCallback(() => {
    setCount2(c => c + 1)
  }, [])

  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{countPro: count, dispatchPro: dispatch}}>
      <div className="App">
        <header className="App-header">
          {/* <APIFetch />
          <B /> */}
          {/* <BasicReducer /> */}
          {/* <Memo /> */}
          <CountDisplay name="count1" count={count1}/>
          <CountClick handleClick={AddCount1}>AddCount1</CountClick>
          <CountDisplay name="count1" count={count2}/>
          <CountClick handleClick={AddCount2}>AddCount2</CountClick>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;

