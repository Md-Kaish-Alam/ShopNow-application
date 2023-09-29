import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages';
import { Header, Footer } from './components';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
