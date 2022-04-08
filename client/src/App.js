import React from 'react'
import { Routes, Route, Router } from "react-router-dom";
import RestaurantsList from './components/restaurantDetails/RestaurantsList';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<RestaurantsList />}></Route>
        {/* <Route exact path="/dash-board" element={<DashBoard />}></Route>
        <Route exact path="/movie-details" element ={<MovieDetails/>}/>  */}
      </Routes>
    </>
  );
};

export default App;

