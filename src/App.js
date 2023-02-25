import './App.scss';
import Crousel from './components/crousel';
import Header from './components/header'
import Bio from './components/bio'
import BrandWorkWith from './components/brandWorkWith';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from './components/wrapper';
import Blog from './components/blog';
import Commercial from './components/commercial';
import Magzine from './components/our-work/magzine';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Wrapper />}> */}
          <Route path='/' element={<Wrapper />} />
          <Route path="blogs" element={<Blog/>} />
          <Route path="commercial" element={<Commercial/>} />
          <Route path="/our-work/magzine" element={<Magzine/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
