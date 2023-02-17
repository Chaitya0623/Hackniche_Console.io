import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/Home';
import Hackathons from './components/Hackathons';
import OrganizeHacki from './components/OrganizeHacki';
import HackiDisplay from './components/HackiDisplay';

function App() {
  return (
    <div className="App">
        {/* <Login/> */}
        {/* <Home/> */}
        {/* <Hackathons/> */}
        <OrganizeHacki/>
        {/* <HackiDisplay /> */}
    </div>
  );
}

export default App;
