import logo from './logo.svg';
import './App.css';
import Highlight from './Components/Highlight';
import "./CSS/Root.css"
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Highlight/>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
