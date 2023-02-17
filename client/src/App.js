import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/Home';
import Hackathons from './components/Hackathons';
import OrganizeHacki from './components/OrganizeHacki';
import HackiDisplay from './components/HackiDisplay';
import Register from './components/Register';

function App() {
  const user = localStorage.getItem("token");
  const isVerified = localStorage.getItem("isVerified");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login-signup" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
