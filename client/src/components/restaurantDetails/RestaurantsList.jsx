import React, { useEffect, useState } from "react";
import axios from "axios";
import Restaurant from "./Restaurant";
// import AddRestaurant from "./AddRestaurant";
import FilterData from "./filters/FilterData";
import SortData from "./SortData";
import PaymentFilter from "./filters/PaymentFilter";
import { v4 as uuidv4 } from "uuid";
import "../styles/Restaurant.css";

const baseURL = "http://localhost:2233";

const retrieveRestaurants = async () => {
  const response = await axios.get(`${baseURL}/restaurants`);
  // console.log(response)
  return response.data;
};

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);
 
  const [sort, setSort] = useState(1)

  useEffect(() => {
    const getAllRestaurants = async () => {
      const allRestaurants = await retrieveRestaurants();
      // console.log(allRestaurants)
      if (allRestaurants) {
        setRestaurants(allRestaurants);
      }
    };

    getAllRestaurants();

   
  }, [sort]);

  const filterWRTrating = (star) => {
    const newRestaurants = restaurants.filter((el) => {
      return el.ratings > star;
    });
    setRestaurants(newRestaurants);
  };

  const sortData = (order)=>{

    let restaurantsArr = [...restaurants];
    console.log(restaurantsArr)

    if( order == 1){
      restaurantsArr.sort(
        (a, b)=>{
          return (a.cost_for_one - b.cost_for_one)
        }
      )
    }
    else{
       restaurantsArr.sort(
        (a, b)=>{
          return (b.cost_for_one - a.cost_for_one)
        }
      )
    }
    setRestaurants(restaurantsArr)
  
  }


  const filterByPayment = (method)=>{
    let newData =  restaurants.filter((el)=>{
      return el.payment_methods[method] === true
     })

     setRestaurants(newData);
     console.log(restaurants)
  }

 

  return (
    <>
      {/* <AddRestaurant/> */}
      <div className="add_sort_container">
      
       <SortData sortData={sortData}
       />
        <div>
          <button>Add Restaurant</button>
        </div>
      </div>

      <div className="main_container">
        <div className="filters_container">
            <FilterData
          filterWRTrating={filterWRTrating}
          restaurants={restaurants}
        />
        <PaymentFilter
        filterByPayment = {filterByPayment}
         restaurants = {restaurants}/>

        </div>
        <div className="restaurants_container">
          {restaurants.map((restaurant) => {
            return <Restaurant key={uuidv4()} restaurant={restaurant} />;
          })}
       
        </div>
      </div>

      <div className="pagination_container">

      </div>
    </>
  );
};

export default RestaurantsList;
