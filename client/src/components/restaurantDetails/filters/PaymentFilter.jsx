import React from 'react'

const PaymentFilter  = ({filterByPayment, restaurants})=> {

  const handletPayment = (method)=>{
    filterByPayment(method)
  }
  return (
      <>
      <div className='bottom_margin'>
        <button className='payment_btn' onClick={
          ()=>{handletPayment("cash")}
        }>Cash Only</button>
      </div>
      <div className='bottom_margin'>
        <button className='payment_btn' onClick={
          ()=>{
            handletPayment("card")
          }
        }>Card Accepted</button>
      </div>
      <div>
        <button className='payment_btn'>All</button>
      </div>
      </>
    )
}

export default PaymentFilter