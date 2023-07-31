import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouterType {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouterType) {
  const isAuth = localStorage.getItem('jwt');

  return isAuth ? <>{children}</> : <Navigate to="/" />;
}