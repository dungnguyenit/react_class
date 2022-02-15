import logo from './logo.svg';
import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Header from './components/Header';
import Contacts from './components/Contacts';
function App() {
  return (
    <div style={{ padding: 20, textAlign:'center' }}>
      {/* <Hero /> */}
      <Header
       brand = "Contaact Manager"
       name ="ND"
       />
      <Contacts />
    </div>
  );
}

export default App;
