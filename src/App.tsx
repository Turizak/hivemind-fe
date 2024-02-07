import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Content from './pages/Content';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="content/uuid/:uuid" element={<Content />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
