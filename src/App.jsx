import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MoviesSearch from './componentes/moviesSearch';
import './App.css';
import { Moviespage } from './pages/moviesPage';
import Motion from './componentes/Motion';
function App() {

  return (
   <div>
    <div className='container pt-4'>
      <div className='text-center pb-4'>
        <h5>¡API TheMovieDB!</h5>
      </div>
    </div>
      <main>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Moviespage />}/>
            <Route path="/movie/:movieid" element={<MoviesSearch />}/>
            <Route path="/motion" element={<Motion />}/>
          </Routes>
      </BrowserRouter>
      </main>
   </div>
    
  );
};

export default App;
