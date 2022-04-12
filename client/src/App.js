import React from 'react'
import { Routes, Route, Router } from "react-router-dom";
import RestaurantsList from './components/restaurantDetails/RestaurantsList';
import AddRestaurant from './components/restaurantDetails/AddRestaurant';
import FavouriteRestaurants from "./components/restaurantDetails/FavouritesRestaurants"

import "./App.css"
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<RestaurantsList />}></Route>
        <Route exact path="/add-restaurant" element={<AddRestaurant />}></Route>
        <Route exact path="/get-favourites" element={<FavouriteRestaurants />}></Route>

        {/* <Route exact path="/dash-board" element={<DashBoard />}></Route>
        <Route exact path="/movie-details" element ={<MovieDetails/>}/>  */}
      </Routes>
    </>
  );
};

export default App;

