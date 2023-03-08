import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ItemDetailPage from './pages/ItemDetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/category/:id' element={<CategoriesPage />} />
        <Route exact path='/item/:id' element={<ItemDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
