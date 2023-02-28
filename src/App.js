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
import Apperance from './components/our-work/apperence';
import ScrollToTop from './components/scrollToTop';
import Campaigns from './components/our-work/campaign';
import Skin from './components/our-work/skin';
import Hair from './components/our-work/hair';
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        {/* <Route path="/" element={<Wrapper />}> */}
          <Route path='/' element={<Wrapper />} />
          <Route path="blogs" element={<Blog/>} />
          <Route path="commercial" element={<Commercial/>} />
          <Route path="/our-work/magzine" element={<Magzine/>} />
          <Route path="/our-work/celebrity" element={<Apperance/>} />
          <Route path="/our-work/campaigns" element={<Campaigns/>} />
          <Route path="/our-work/skin" element={<Skin/>} />
          <Route path="/our-work/hair" element={<Hair/>} />
          
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
