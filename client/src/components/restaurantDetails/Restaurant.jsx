import React from "react";
import { v4 as uuidv4 } from "uuid";

const Restaurant = ({ restaurant , showAddBtn}) => {
  let {
    title,
    votes,
    payment_methods,
    cost_for_one,
    ratings,
    categories,
    reviews,
    receipe_url,
  } = restaurant;

  const addToFavourites = () => {
    if (localStorage.getItem("favouriteRestaurants") === null) {
      localStorage.setItem("favouriteRestaurants", JSON.stringify([]));
    }
    let favouriteList = JSON.parse(localStorage.getItem("favouriteRestaurants"));
    favouriteList.push(restaurant)

    localStorage.setItem("favouriteRestaurants", JSON.stringify(favouriteList))
  };

  return (
    <>
      <div className="main_box">
        <div className="url_div">
          <img src={receipe_url} alt="" />
        </div>
        <div className="details_div">
          <div>
            <h4 className="bottom_margin">{title}</h4>
            <div className="bottom_margin grey_text">
              {categories.map((el) => {
                return (
                  <span className="category" key={uuidv4()}>
                    {el + "|"}
                  </span>
                );
              })}
            </div>
            <div className="bottom_margin grey_text">
              Cost Rs.{cost_for_one} for one
            </div>
            <div className="bottom_margin">
              Accepts {payment_methods.card === true ? "card  " : null}
              {payment_methods.cash === true ? "cash    " : null}
              {payment_methods.upi === true ? "upi" : null}
            </div>

         {
           showAddBtn &&
           <div>
           <button className="favourites" onClick={addToFavourites}>
             Add to Favourites
           </button>
         </div>
         }
          </div>
          <dir>
            <div className="ratings aline_atend bottom_margin">{ratings}</div>
            <div className="aline_atend grey_text bottom_margin">
              {votes}votes
            </div>
            <div className="aline_atend grey_text bottom_margin">
              {reviews}reviews
            </div>
          </dir>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
