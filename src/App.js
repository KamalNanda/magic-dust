import React from 'react';
import './App.css';
import Header from './components/HEADER'
import HERO from './components/HERO'
import SCREEN2 from './components/SCREEN2'
import SCREEN3 from './components/SCREEN3'
import SCREEN4 from './components/SCREEN4'
import TEAM from './components/TEAM'
import ROADMAP from './components/ROADMAP'
import FAQ from './components/FAQ'
import CONTACT from './components/CONTACT'
function App() {
  return (
    <div className="App">
      <Header />
      <HERO />
      <SCREEN2 />
      <SCREEN3 />
      <SCREEN4 />
      <TEAM />
      <ROADMAP />
      <FAQ />
      <CONTACT />
    </div>
  );
}

export default App;
