import React from 'react';

export const FullPageErrorFallback = ({ error }: { error: Error | null }): React.ReactElement => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div style={{ color: '#f00' }}>{error?.message}</div>
  </div>
);
