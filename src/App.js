import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import HomePage from "./pages/Home";
import TeamPage from './pages/Team';
import ServicesPage from './pages/Services';
function App() {
  

  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/teams' element={<TeamPage />} />
          <Route path='/services' element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
