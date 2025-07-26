import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import HomePage from "./pages/homePage";
import ResourcesPage from "./pages/resourcesPage";
import Footer from "./components/Footer";



export default function App() {
  return (
    <BrowserRouter>
      {/* Top Navigation */}
        <Header/>

      {/* Main Content Area */}
      <main className="px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/contact" element={<h1 className="text-xl text-gray-600">Coming Soon</h1>} />
          <Route path="/resources" element={<ResourcesPage/>} />
        </Routes>
      </main>

      <Footer/>
    </BrowserRouter>
  );
}
