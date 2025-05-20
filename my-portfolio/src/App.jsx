import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProjectRoutes from './routes/ProjectRoutes';
import "./index.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/project" element={<ProjectRoutes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
