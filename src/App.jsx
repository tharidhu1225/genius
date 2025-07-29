import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import HomePage from "./pages/homePage";
import ResourcesPage from "./pages/resourcesPage";
import Footer from "./components/Footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";



export default function App() {
  return (
    <BrowserRouter>
      {/* Top Navigation */}
        <Header/>

      {/* Main Content Area */}
      <main className="px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/resources" element={<ResourcesPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>} />  
        </Routes>
      </main>

      <Footer/>
    </BrowserRouter>
  );
}
