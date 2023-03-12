import './App.css';
import { Route, Routes} from 'react-router-dom'; 
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';
import React from 'react';



function App() {

  return (
    <div>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
    </div>

  );
}

export default App;
