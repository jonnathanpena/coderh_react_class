import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ItemDetailPage from './pages/ItemDetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardContextProvider from './context/cartContext';

import './App.scss';
import ResumenPage from './pages/ResumenPage';

function App() {
  return (
    <CardContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/category/:id' element={<CategoriesPage />} />
          <Route exact path='/item/:id' element={<ItemDetailPage />} />
          <Route exact path='/resumen' element={<ResumenPage />} />
        </Routes>
      </BrowserRouter>
    </CardContextProvider>    
  );
}

export default App;
