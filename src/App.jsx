import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


import NotFound from './pages/NotFound';

import About from './pages/about';
import Contact from './pages/conatct';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />        
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;