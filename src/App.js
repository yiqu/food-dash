import React from 'react';
import Core from './core/Core';
import { AppThemeContextProvider } from './store/context/theme-context';

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
