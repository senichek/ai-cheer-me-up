import logo from './logo.svg';
import './App.css';

function App() {

  const respond = () => {
    console.log("Responded");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={respond}>Cheer me up!</button>
      </header>
    </div>
  );
}

export default App;
