import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';
import React, { lazy, Suspense }from 'react';



function App() {

  return (
    <div>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
      </Suspense>

    </div>

  );
}

export default App;
