import React from 'react';
import Approutes from './rout';
import { AuthProvider } from './AuthProvaider';

function App() {
  return (
    <>
      <AuthProvider>
        <Approutes />
      </AuthProvider>
    </>
  );
}

export default App;
