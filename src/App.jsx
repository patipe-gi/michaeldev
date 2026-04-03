import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


import NotFound from './pages/NotFound.jsx';

import About from './pages/About.jsx';
import Contact from './pages/Conatct.jsx';
import Layout from './components/Layout/Layout.jsx';
import Projects from './pages/Projects.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />        
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;