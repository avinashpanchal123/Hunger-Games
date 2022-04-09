import React from 'react'

const SortData = ({sortData})=> {


  const handleSort = (order)=>{
    sortData(order)
  }
  return (
    <>
      <div>
          <button onClick={
            ()=>{handleSort(0)
            }}>Sort High to Low</button>
        </div>
        <div>
          <button onClick={ ()=>{handleSort(1)
            }}>Sort Low to High</button>
        </div>
    </>
  )
}

export default SortData