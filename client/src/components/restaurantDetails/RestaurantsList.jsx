import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000/get-restaurants";

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const request = axios.get(baseURL);
      const data = (await request).data;

      setRestaurants(data)
       console.log(data);
      return request;
    };
    fetchData();
    
  }, []);

  return (
    <>
     
    </>
  );
};

export default RestaurantsList;
