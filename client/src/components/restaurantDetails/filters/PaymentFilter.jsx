import React from 'react'

const PaymentFilter  = ({filterByPayment, restaurants})=> {

  const handletPayment = (method)=>{
    filterByPayment(method)
  }
  return (
      <>
      <div className='bottom_margin'>
        <button onClick={
          ()=>{handletPayment("cash")}
        }>Cash Only</button>
      </div>
      <div className='bottom_margin'>
        <button onClick={
          ()=>{
            handletPayment("card")
          }
        }>Card Accepted</button>
      </div>
      <div>
        <button>All</button>
      </div>
      </>
    )
}

export default PaymentFilter