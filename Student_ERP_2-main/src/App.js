import './App.css';
import Navbar1 from './components/Navbar';
import Home from './components/Home';
import EnrollNow from './components/EnrollNow';
import 'bootstrap/dist/css/bootstrap.min.css';import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import CreatePasswordPage from './components/CreatePasswordPage';


function App() {
  return (
    <>
    
    <Router className="App">
      
      <Switch>
      <Route path="/login"> <LoginPage /> </Route>
      <Route path="/create_password"> <CreatePasswordPage /> </Route>
      <Route path="/"> <Navbar1/><Home/><EnrollNow/></Route>
      </Switch>
      
    </Router>
    </>
  );
}

export default App;
