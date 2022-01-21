import './App.css';
import Navbar1 from './components/Navbar';
import Home from './components/Home';
import EnrollNow from './components/EnrollNow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Home/>
      <EnrollNow/>
    </div>
  );
}

export default App;
