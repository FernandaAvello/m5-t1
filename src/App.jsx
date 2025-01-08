import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import { ConfigProvider } from 'antd';
import { theme } from 'antd';

const { defaultAlgorithm, defaultSeed } = theme;

const customTheme = {
  algorithm: defaultAlgorithm,
  token: {
    colorPrimary: '#EA4C89',
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </Router>
    </ConfigProvider>
  );
}

export default App;