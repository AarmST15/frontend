import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import StaffHome from './pages/StaffHome';
import ButtonSide from './components/ButtonSide';
import MemberTable from './pages/MemberTable';
import AddMenu from './pages/AddMenu';
import {
  Routes,
  Route,
} from "react-router-dom";
import Menu from './pages/Menu';
import Home from './pages/Home';
import OrderMember from './pages/OrderMember';
import LoginPage from './pages/LoginPage';
import Statement from './pages/Statement';
import Random from './pages/Random';
import LogInStaffPage from './pages/LogInStaffPage';
import StaffList from './pages/StaffList';
import About from './pages/About';
import EnhancedTable from './pages/T';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ButtonSide />} />
        <Route path='/about' element={<About />}/>
        <Route path='/customer' element={<Home />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu-random' element={<Random />} />
        <Route path='/staff-homepage' element={<StaffHome />} />
        <Route path='/staff-login' element={<LogInStaffPage />} />
        <Route path='/menu-setting' element={<AddMenu />}/>
        <Route path='/member-staff-manage' element={<MemberTable/>} />
        <Route path='/staff-list' element={<StaffList />}/>
        <Route path='/order-member-manage' element={<OrderMember/>}/>
        <Route path='/statement' element={<Statement />} />
        <Route path='/test' element={<EnhancedTable/>} />
        

      </Routes>
    </>
  );
}

export default App;
