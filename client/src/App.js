import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomeView from './Views/HomeView/HomeView.jsx';



function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<HomeView />} />
    
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App