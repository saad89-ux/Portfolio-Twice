'use client';

import { useEffect } from 'react';
import { Theme } from './settings/types';
import { LandingPage } from './components/generated/LandingPage';
// %IMPORT_STATEMENT

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  useEffect(() => {
    setTheme(theme);
  }, []);

  return <LandingPage />; // %EXPORT_STATEMENT%
}

export default App;
