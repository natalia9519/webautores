import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import AdminView from './Views/HomeView/HomeView.jsx';
import AuthorView from './Views/AuthorView/AuthorView.jsx';
import BooksView from './Views/BooksView/BooksView.jsx';
import ContactView from './Views/ContactView/ContactView.jsx';
import EventsView from './Views/EventsView/EventsView.jsx';
import HomeView from './Views/HomeView/HomeView.jsx';
import LoginView from './Views/LoginView/LoginView.jsx';
import NotFoundView from './Views/NotFoundView/NotFoundView.jsx';
import WorkView from './Views/WorkView/WorkView.jsx';



function App() {

  const checkAuth = (roles) => {
    const userRole = localStorage.getItem('role');
    return userRole && roles.includes(userRole);
  };
  const redirectToLogin = () => <Navigate to="/home-view" replace />;

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<HomeView />} />
            <Route path="/our-dream" element={checkAuth(['admin']) ? <AdminView /> : redirectToLogin()} />
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
      </div>
    </>
  )
}

export default App