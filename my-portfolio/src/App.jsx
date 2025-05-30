import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import "./index.css";
import CodeNovaPage from './pages/codeNova/codeNovaPage';
import EcofundiaPage from './pages/ecofundia/EcofundiaPage';
import KeullagPage from './pages/keullag/keullagPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/codenova" element={<CodeNovaPage/>}/>
        <Route path="/ecofundia" element={<EcofundiaPage/>}/>
        <Route path="/keullag" element={<KeullagPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
