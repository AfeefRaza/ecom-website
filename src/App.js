import React, { Component } from 'react'
import './App.css';

import NavBar from './components/NavBar';
import TopBar from './components/TopBar'
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Mainpage from './Mainpage';
import Login from './components/Login';
import Signup from './components/Signup';
import Allproducts from './components/Allproducts';
import Order from './components/Order';
import Bottom from './components/Bottom';

function App() {
  return (
    <div>
      <HashRouter>
      <TopBar/>
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<Mainpage/>}></Route>
      <Route exact path="/ecom-website" element={<Mainpage/>}></Route>
      <Route exact path="/Login" element={<Login/>}></Route>
      <Route exact path="/Signup" element={<Signup/>}></Route>
      <Route exact path="/jewelery" element={<Allproducts category="jewelery"/>}></Route>
      <Route exact path="/electronics" element={<Allproducts category="electronics"/>}></Route>
      <Route exact path="/men's clothing" element={<Allproducts category="men's clothing"/>}></Route>
      <Route exact path="/women's clothing" element={<Allproducts category="women's clothing"/>}></Route>
      <Route exact path="/orders" element={<Order/>}></Route>
      
      </Routes>
      <Bottom/>
      </HashRouter>
    </div>
  );
}


export default App;
