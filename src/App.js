import {Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import Home from './pages/home';
import Team from './pages/team';
import Gallery from './pages/gallery';
import Projects from './pages/projects';
import NotFound from './pages/404';

function App() {
  return (
    <main className="app">
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="ourteam" element={ <Team />}/>
          <Route path="gallery" element={ <Gallery />}/>
          <Route path="projects" element={ <Projects />}/>
          <Route path="*" element={ <NotFound />}/>
        </Routes>
      <Footer/>
    </main>
  );
}

export default App;
