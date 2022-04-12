import React, { useState } from "react";
import "../../styles/FilterData.css"

const FilterData = ({restaurants, filterWRTrating}) => {
    // const [rating, setRating] = useState('')

    const handleStarFilter = (star)=>{
        filterWRTrating(star);
        console.log("I am called")
    }
  return (
    <>
      <div className="star_btn_container bottom_margin">
        <div className="star_item bottom_margin">
          <button onClick={()=>{
              handleStarFilter(1)
          }}>1*</button>
        </div>
        <div className="star_item bottom_margin">
            <button onClick={()=>{
              handleStarFilter(2)
            }}>2*</button>
        </div>
        <div className="star_item bottom_margin">
        <button onClick={()=>{
              handleStarFilter(3)
            }}>3*</button>
        </div>
        <div className="star_item bottom_margin">
        <button onClick={()=>{
              handleStarFilter(4)
            }}>4*</button>
        </div>
      </div>
    </>
  );
};

export default FilterData;
