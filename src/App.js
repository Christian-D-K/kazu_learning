import './App.css';
import { APIFetch } from './components/APIFetch'
import { AppContext } from './contexts/AppContext'
import { B } from './components/B';
import { BasicReducer } from './components/BasicReducer';

function App() {
  return (
    <AppContext.Provider value={'value from App.js'}>
      <div className="App">
        <header className="App-header">
          {/* <APIFetch />
          <B /> */}
          <BasicReducer />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;

