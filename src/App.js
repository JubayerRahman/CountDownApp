import './App.css';
import Dev from './Componenets/Dev/Dev';
import StopWatch from './Componenets/StopWatch/StopWatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StopWatch/>
        <Dev/>
      </header>
    </div>
  );
}

export default App;
