import { useState } from 'react';
import ProductList from './components/ProductList';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import ProductCreate from './components/ProductCreate';
import ProductUpdate from './components/ProductUpdate';
import ProductDetail from './components/ProductDetail';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/create" element={<ProductCreate/>}/>
          <Route path="/update/:id" element={<ProductUpdate/>} />
          <Route path="/detail/:id" element={<ProductDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
