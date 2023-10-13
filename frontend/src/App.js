import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar'
import Home from './screens/Home'
import Typography from './components/Typography'

function App() {
  return (
    <div className="App">
      <AppBar />
      <Typography />
      <Home />
    </div>
  );
}

export default App;
