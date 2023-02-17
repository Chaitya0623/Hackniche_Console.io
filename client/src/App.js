import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/Home';
import Hackathons from './components/Hackathons';
import { Route, Routes } from 'react-router-dom';

function App() {
  const user = localStorage.getItem("token");
  const isVerified = localStorage.getItem("isVerified");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login-signup" element={<Login />}></Route>

        {/* <Route path="/password-reset" element={<ForgotPwMail />}></Route>
        <Route path="/pwReset" element={<ResetPw />}></Route> */}

        {/* {user && <Route path="/worker/profile" element={<WorkerDetails />}></Route>}
        {user && <Route path="/worker/profile/edit" element={<WorkerProf />}></Route>}
        {user && isVerified && <Route path="/worker/orders" element={<OrdersTable />}></Route>}
        {user && isVerified && <Route path="/worker/notifications" element={<WorkerOrders />}></Route>} Left To Do

        {user && <Route path="/client/profile" element={<ClientDetails />}></Route>}
        {user && <Route path="/client/profile/edit" element={<ClientProfile />}></Route>}
        {user && <Route path="/client/rquery" element={<ClientQuery />}></Route>}
        {user && <Route path="/client/notifications" element={<ClientOrders />}></Route>} Left To Do

        {user && <Route path="/admin/dashboard" element={<Admin />}></Route>}
        {user && <Route path="/admin/clients" element={<Clients />}></Route>}
        {user && <Route path="/admin/workers" element={<Workers />}></Route>}
        {user && <Route path="/admin/verification" element={<VerificationTable />}></Route>}
        {user && <Route path="/admin/addnewadmins" element={<AddAdminComponent />}></Route>}

        <Route path='/map' element={<MapWithRouting />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
