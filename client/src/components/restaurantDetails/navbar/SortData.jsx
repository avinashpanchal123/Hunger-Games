import React from 'react'

const SortData = ({sortData})=> {


  const handleSort = (order)=>{
    sortData(order)
  }
  return (
    <>
      <div>
          <button className='big_btns' onClick={
            ()=>{handleSort(0)
            }}>Sort High to Low</button>
        </div>
        <div>
          <button className='big_btns' onClick={ ()=>{handleSort(1)
            }}>Sort Low to High</button>
        </div>
    </>
  )
}

export default SortData