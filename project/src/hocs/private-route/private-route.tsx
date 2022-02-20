import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element,
  isLoggedIn: boolean
}

export default function PrivateRoute({children, isLoggedIn}: PrivateRouteProps): JSX.Element {
  return isLoggedIn ? children : <Navigate to={AppRoute.Login} />;
}

