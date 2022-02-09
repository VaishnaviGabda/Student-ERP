import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Batches from './components/Batches';
import StudentRequests from './components/StudentRequests';
import Home from './components/Home';

function App() {
  return (
    <Router className="app">
      <Header/>

      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<Home/>} />
      </Routes>

      <Routes>
        <Route path="/student_requests" element={<StudentRequests/>} />
      </Routes>

      <Routes>
        <Route path="/batches" element={<Batches/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
