import './App.css';
import About from './components/About';
import Menu from './components/Menu';
import Home from './components/Home';
import Privacy from './components/Privacy';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Product } from './components/Products/Product';
import { ProductsLayout } from './components/Products/ProductsLayout';
import { ProductsList } from './components/Products/ProductsList';
import { Bag } from './components/Bag/Bag';
import { Task } from './components/Task/TaskReducer';

function App() {
  return (
    <div className="App">
      <header>
      <img src="../images/estro.png"></img>
        <Menu></Menu>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/task" element={<Task />} />
          <Route path="/product" element={<ProductsLayout />} >
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<Product />} />
          </Route >
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
