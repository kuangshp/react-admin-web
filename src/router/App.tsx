import React, { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = { children: ReactNode };
export const App: React.FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location, navigate]);
  return <div>{children}</div>;
};
