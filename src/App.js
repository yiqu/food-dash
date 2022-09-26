import React from 'react';
import Core from './core/Core';
import './App.scss';
import { AppThemeContextProvider } from './store/context/theme-context';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  //...
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <React.Fragment>

      <AppThemeContextProvider>

        <Core></Core>

      </AppThemeContextProvider>
      
    </React.Fragment>
  );
}

export default App;
