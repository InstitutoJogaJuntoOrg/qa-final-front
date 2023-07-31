import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Login';
import { Register } from '../pages/Register';
import { Products } from '../pages/products';
import { PrivateRoute } from './PrivateRoute';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Products" element={<PrivateRoute> <Products /> </PrivateRoute>} />
    </Routes>
  );
}