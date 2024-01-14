import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";
import About from "./components/about";
import NotFound from "./components/notfound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PageNotFound = () => (
  <>
    <Header />
    <NotFound />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
