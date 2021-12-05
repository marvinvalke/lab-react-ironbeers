import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router';
import Header from './components/Header';

import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';



function App() {





  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/beers' element={<Beers />}/>
        <Route path="/:id" element={<BeerDetail />}/>
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />}/>
      </Routes>
    </div>
  );
}

export default App;
