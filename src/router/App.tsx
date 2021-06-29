import React, { ReactNode } from 'react';

type Props = { children: ReactNode };
export const App: React.FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  return <div>{children}</div>;
};