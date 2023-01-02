import React from 'react';

import './App.css';
import { SideBar, MainDash } from './components';

const App = () => {
  return (
    <div className="App">
        <div className="AppGlass">
            <SideBar />
            <MainDash />
            <div></div>
        </div>
    </div>
  )
}

export default App