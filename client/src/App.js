import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import AdminView from './Views/AdminView/AdminView.jsx';
import SuperAdminView from './Views/SuperAdminView/SuperAdminView.jsx';
import AuthorView from './Views/AuthorView/AuthorView.jsx';
import BooksView from './Views/BooksView/BooksView.jsx';
import ContactView from './Views/ContactView/ContactView.jsx';
import EventsView from './Views/EventsView/EventsView.jsx';
import HomeView from './Views/HomeView/HomeView.jsx';
import LoginView from './Views/LoginView/LoginView.jsx';
import NotFoundView from './Views/NotFoundView/NotFoundView.jsx';
import WorkView from './Views/WorkView/WorkView.jsx';
import EditBook from './Views/EditBook/EditBook.jsx';
import EditEvent from './Views/EditEvent/EditEvent.jsx';
import EditUser from './Views/EditUser/EditUser.jsx';
import './App.css'


function App() {

   const checkAuth = (roles) => {
     const userRole = localStorage.getItem('role');
     return userRole && roles.includes(userRole);
   };
   const redirectToLogin = () => <Navigate to="/" replace />;

  return (
    <>
  
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<HomeView />} />
            <Route path="/EditBook/:id" element={checkAuth(['user']) ? <EditBook /> : redirectToLogin()} /> 
            <Route path="/EditEvent/:id" element={checkAuth(['user']) ? <EditEvent /> : redirectToLogin()} /> 
           <Route path="/our-dream" element={checkAuth(['user']) ? <AdminView /> : redirectToLogin()} /> 
          {/*  <Route path="/our-dream" element={<AdminView />} />*/}
          <Route path="/EditUser/:id" element={checkAuth(['admin']) ? <EditUser /> : redirectToLogin()} />          
          <Route path="/user-manage" element={checkAuth(['admin']) ? <SuperAdminView /> : redirectToLogin()} />  
            {/* <Route path="/user-manage" element={<SuperAdminView />} />   */}
            <Route path="/Autores" element={<AuthorView />} />
            <Route path="/Libros" element={<BooksView />} />
            <Route path="/Contactanos" element={<ContactView />} />            
            <Route path="/Eventos" element={<EventsView />} />
            <Route path="/start-our-dream" element={<LoginView />} />
            <Route path="*" element={<NotFoundView />} />
            <Route path="/pagina-en-construcion" element={<WorkView />} />

          </Routes>
          <Footer />
        </BrowserRouter>
   
    </>
  )
}

export default App