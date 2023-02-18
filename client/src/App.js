import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/Home';
import Hackathons from './components/Hackathons';
import OrganizeHacki from './components/OrganizeHacki';
import HackiDisplay from './components/HackiDisplay';
import Register from './components/Register';
import { Routes,Route } from 'react-router-dom';
// import MultiStepForm from './components/MultiStepForm2';
import MultiStepForm2 from './components/MultiStepForm2';
import MultiStepFormHacki from './components/MultiStepFormHacki';
import HackiReport from './components/HackiReport';

function App() {
  const user = localStorage.getItem("token");
  const isVerified = localStorage.getItem("isVerified");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login-signup" element={<Login />}></Route>
        <Route path="/all-hackathons" element={<Hackathons />}></Route>
        <Route path="/hackathons/organize" element={<MultiStepFormHacki />}></Route>
        <Route path="/hackathons/display" element={<HackiDisplay />}></Route>
        <Route path="/hackathons/register" element={<MultiStepForm2 />}></Route>
        <Route path="/admin" element={<HackiReport />}></Route>
      </Routes>
    </div>
  );
}

export default App;
