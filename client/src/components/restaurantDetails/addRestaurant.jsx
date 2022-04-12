import React, {useState} from 'react'
import axios from "axios";
import Navbar from './navbar/Navbar';
import "../styles/AddRestaurant.css"
const baseURL = "http://localhost:2233";


const iniState =  {
  title:"",
  receipe_url:"",
  categories: "",
  cost_for_one: "",
  reviews: "",
  ratings: "",  
  votes: "",
  payment_methods: {
    card:"",
    cash:"",
    upi:""
  }

}

let card = "";
let cash = "";
let upi = ""



let methods = [ card, cash,  upi]

const AddRestaurant  = ()=> {


  const [info, setInfo] = useState(iniState);
  const [checkedState, setCheckedState] = useState(
    new Array(methods.length).fill(false)
);


// console.log(checkedState)
  let {title,
    receipe_url,
    categories,
    cost_for_one,
     reviews, ratings,
      votes, payment_methods } = info

      let {cash, card, upi} = payment_methods;
  

      const AddRestaurant = async(restaurantInfo)=>{

        const request = {...restaurantInfo}

        const response = await axios.post(`${baseURL}/restaurants`,request);

        console.log(response)
      }

  const handleSubmit = (event) => {
    event.preventDefault();
   
    // alert('A name was submitted: ' + name );

  //  AddRestaurant(info);

  payment_methods[card] = true;

    setInfo(iniState)

    console.log(info);
  }


  const handleChange = e=>{
    let {name, value, checked, type} = e.target


    value = type == "checkbox"? checked : value

    let newRestaurant = {...info, [name]:value};
    setInfo(newRestaurant)

  //   console.log(position)

  //   const updatedCheckedState = checkedState.map((item, index) =>
  //   index === position ? !item : item
    
  // );

  // setCheckedState(updatedCheckedState);
}


  return (
   <>

   <div>
     <Navbar/>
   </div>
   <div className="form_container">
   <form onSubmit={handleSubmit} action="">
       <div>
       <input
        name='title'
         type="text"
         onChange={handleChange}
         value={title}
         placeholder='title'
          />
       </div>

       <div>
       <input
        name='receipe_url'
         type="url"
         onChange={handleChange}
         value={receipe_url}
         placeholder='receipe_url'
          />
       </div>
       

       <div>
       <input 
         type="Number"
          name="reviews"
          onChange={handleChange}
          value={reviews}
          placeholder='reviews'
           />
       </div>

       <div>
       <input 
         type="Number"
          name="votes"
          onChange={handleChange}
          value={votes}
          placeholder='votes'
           />
       </div>
       
       <div>
       <input 
         type="Number"
          name="ratings"
          onChange={handleChange}
          value={ratings}
          placeholder='ratings'
           />
       </div>

       <div>
       <input 
         type="Number"
          name="cost_for_one"
          onChange={handleChange}
          value={cost_for_one}
          placeholder='cost_for_one'
           />
       </div>

       {/* {
         methods.map((el, index)=>{
           return (
             <>
              <div>
                <input
                onChange={()=>handleChange(index)}
                checked={checkedState[index]}
                name='cash'
                 type="checkbox" />
              </div>
             </>
           )
         })
       } */}
      

        <button type="submit">Submit</button>
    </form>

   </div>

   </>
  )
}

export default AddRestaurant