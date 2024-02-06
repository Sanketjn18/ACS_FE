import SysAdminLayout from './Layout/SystemAdmin';
import { Route, Routes } from 'react-router-dom';
import SchoolAdminLayout from './Layout/SchoolAdmin';
import Teacherlayout from './Layout/Teacher';
import Login from './Pages/Login';
import SchoolRegister from './Pages/Register/School';
import TeacherRegister from './Pages/Register/Teacher';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register'>
        <Route path='user' element={<TeacherRegister />} />
        <Route path='school' element={<SchoolRegister />} />
      </Route>
      <Route path='/forgotpassword' element={<ForgetPassword />} />
      <Route path="/sysadmin" element={<SysAdminLayout />}>

    </Route>
    <Route path="/schooladmin" element={<SchoolAdminLayout />}>

    </Route>
    <Route path="/teacher" element={<Teacherlayout />}>

    </Route>

    </Routes>
    
  );
}

export default App;
