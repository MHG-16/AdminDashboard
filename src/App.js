import React from 'react';

import './App.css';
import { SideBar, MainDash, RightSide } from './components';

const App = () => {
  return (
    <div className="App">
        <div className="AppGlass">
            <SideBar />
            <MainDash />
            <RightSide />
        </div>
    </div>
  )
}

export default App