import { createContext, useState } from 'react';
import './App.css';
import HookCounterOne from './Components/HookCounterOne';
import Name from './Components/Name';

const App = () => {
  return (
    <div className="App">
      <Name />
      <HookCounterOne />
    </div>
  );
}

export default App;
