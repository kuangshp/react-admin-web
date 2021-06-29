import React, { ReactNode } from 'react';

export const App: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return <div>{children}</div>;
};
