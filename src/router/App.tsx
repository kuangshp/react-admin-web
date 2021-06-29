import React from 'react';

export const App: React.FC = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};
