import React from 'react'
import SortData from './SortData'
import FavouriteRestaurants from '../FavouritesRestaurants';
import { Link } from "react-router-dom";



function Navbar({sortData}) {
  return (
    <div className="add_sort_container">
      
    <SortData sortData={sortData}
    />
     <div>
       <button className="big_btns">
       <Link className="link big_btns" to="/add-restaurant">Add Restaurnt</Link>
         </button>

     </div>
     <div>
       <button className='big_btns'>
       <Link className="link " to="/get-favourites">Favourite Restaurants</Link>
       </button>
     </div>
   </div>
  )
}

export default Navbar