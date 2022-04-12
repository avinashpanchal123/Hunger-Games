import React, { useEffect, useState } from "react";
import axios from "axios";
import Restaurant from "./Restaurant";
import FilterData from "./filters/FilterData";
import Navbar from "./navbar/Navbar";
import PaymentFilter from "./filters/PaymentFilter";
import { v4 as uuidv4 } from "uuid";
import "../styles/Restaurant.css";

const baseURL = "http://localhost:2233";


const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [showAddBtn , setShowAddBtn] = useState(true)
  const [allData, setAllData] = useState([])
  const [size, setSize] = useState('');
  const [indexArr, setIndexArr] = useState([]);
  const [page, setPage] = useState(1)
  let limit = 5;
  // const [sort, setSort] = useState(1);
 


  useEffect(() => {
    const getAllRestaurants = async () => {
      const allRestaurants = await retrieveRestaurants();
      //  console.log(allRestaurants)
      if (allRestaurants) {
        setRestaurants(allRestaurants);
      }
    };

    getAllRestaurants();

   
  }, [page]);

  useEffect(()=>{
    let getData = async()=>{
      let res =  await axios.get(`${baseURL}/restaurants`);

      let allRestaurants = await res.data

      // console.log(allRestaurants)
      let pages = Math.ceil(allRestaurants.length/limit);
      let noOfPages = [];
      for (let i = 1; i <= pages; i++) {
          noOfPages.push(i)
      }
      setIndexArr(noOfPages)
      console.log(pages)
      setSize(pages)
    }

    getData()
  },[])



  const retrieveRestaurants = async () => {
    const response = await axios.get(`${baseURL}/restaurants?_page=${page}&_limit=${limit}`);
    // console.log(response)
    return response.data;
  };
  

  const filterWRTrating = (star) => {
    const newRestaurants = restaurants.filter((el) => {
      return el.ratings > star;
    });
    setRestaurants(newRestaurants);
  };

  const sortData = (order)=>{

    let restaurantsArr = [...restaurants];
    // console.log(restaurantsArr)

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

 
// console.log(page)
  return (
    <>
      {/* <AddRestaurant/> */}
     <div>
       <Navbar sortData={sortData}/>
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
            return <Restaurant showAddBtn={showAddBtn} key={uuidv4()} restaurant={restaurant} />;
          })}
       
        </div>
      </div>

      <div className="pagination_container">
        <button disabled={page===1}
        className="paginate_btn"
         onClick={()=>{
          setPage(page-1)
          
        }}
        >
          prev</button>

          {
           indexArr.map(el=>{
             return <button
             className="page_btn"
             onClick={()=>setPage(el)} 
              key={el}>{el}</button>
           })
          }
        <button disabled={page===size}
        className="paginate_btn"
        onClick={()=>{
          setPage(page+1)
         
        }}
        >next</button>
      </div>
    </>
  );
};

export default RestaurantsList;
