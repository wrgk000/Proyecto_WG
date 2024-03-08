import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PrincipalNavbar from './paginas//PrincipalEstatica/PrincipalNavbar';
import LayoutAutenticacion from './paginas/Autenticacion/LayoutAutenticacion'
import Login from './paginas/Autenticacion/Login'
import Register from './paginas/Autenticacion/Register'
import ForgetPassword from './paginas/Autenticacion/ForgetPassword'
import LayoutAdmin from './paginas/admin/LayoutAdmin'
import Home from './paginas/admin/Home'
import Profile from './paginas/admin/Profile'
import Chat from './paginas/admin/Chat'
import Tickets from './paginas/admin/Tickets'
import Error404 from './paginas/Error404';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrincipalNavbar />} />
        <Route path="/auth" element={<LayoutAutenticacion />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/olvide-password" element={<ForgetPassword />} />
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
