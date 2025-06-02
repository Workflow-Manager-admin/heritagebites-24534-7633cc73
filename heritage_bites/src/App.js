import React from 'react';
import MainContainer from './MainContainer';
import './App.css';

// PUBLIC_INTERFACE
/**
 * App is the entry point and root container of HeritageBites.
 * It delegates to MainContainer for main layout.
 */
function App() {
  return <MainContainer />;
}

export default App;