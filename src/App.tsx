import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import FormularioCategorias from './components/categoria/formulariocategoria/FormularioCategorias';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
        <Route path="/categorias" element={<ListaCategorias />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastrarcategoria" element={<FormularioCategorias />} />
        <Route path="/editarcategoria/:id" element={<FormularioCategorias />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        

      </Routes>
      </div>
      <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;