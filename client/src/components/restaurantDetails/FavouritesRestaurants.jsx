import React, {useState} from 'react'
import Restaurant from './Restaurant';
import Navbar from './navbar/Navbar';
import { v4 as uuidv4 } from "uuid";
const FavouriteRestaurants  = ()=> {

  const [showAddBtn , setShowAddBtn] = useState(false)

  let favouriteRestaurants = JSON.parse(localStorage.getItem("favouriteRestaurants"));
  console.log(favouriteRestaurants)
  return (
   <>
 
    <div className="restaurants_container">
          {favouriteRestaurants.map((restaurant) => {
            return <Restaurant showAddBtn={showAddBtn} key={uuidv4()} restaurant={restaurant} />;
          })}
       
        </div>
   </>
  )
}

export default FavouriteRestaurants