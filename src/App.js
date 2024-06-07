import React from 'react';
import Header from './component/header/Header';
import Profile from './component/profile/Profile';
import About from './component/about/About';
import Resume from './component/resume/Resume';
import Service from './component/services/Service';
import Skills from './component/skills/Skills';
import Portfolio from './component/portfolio/Portfolio';
import Api from './component/Api';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <About/>
      <Resume/>
      <Service/>
      <Skills/>
      <Portfolio/>
      <Api/>
      <Footer/>
    </div>
  );
}

export default App;
