import React, { useEffect, useState } from "react";
import axios from "axios";
import Restaurant from "./Restaurant";
import { v4 as uuidv4 } from 'uuid';
import "../styles/Restaurant.css"

const baseURL = "http://localhost:2233";

const retrieveRestaurants = async()=>{
  const response = await axios.get(`${baseURL}/restaurants`);
  console.log(response)
  return response.data
}


const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
  

  const getAllRestaurants = async()=>{
    const allRestaurants = await retrieveRestaurants();
    console.log(allRestaurants)
    if( allRestaurants){
      setRestaurants(allRestaurants)
    }
  }

  getAllRestaurants()
  }, []);

  return (
    <>
      <div className="main_container">
        <div className="filters_container">

        </div>
        <div className="restaurants_container">
          {
            restaurants.map((restaurant)=>{
              return <Restaurant key={uuidv4()} restaurant={restaurant}/>
            })
          }
        </div>
      </div>
    </>
  );
};

export default RestaurantsList;
