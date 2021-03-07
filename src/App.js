import './App.css';
import { TimeContainer } from './components/TimeContainer';
import { APIFetch } from './components/APIFetch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <APIFetch />
      </header>
    </div>
  );
}

export default App;
