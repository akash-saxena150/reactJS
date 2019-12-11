import React from 'react';
import './App.css';
import Home from './Home/Home-view';
import Header from './Header/Header-view';
import Footer from './Footer/Footer-view';
function App() {
  return (
    <div className="Base">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}
export default App;
