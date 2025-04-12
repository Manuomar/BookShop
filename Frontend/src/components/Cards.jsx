import React from 'react'

const Cards = ({item}) => {
    // console.log(item);
    // const name = item.name;
    // console.log(name)
  return (
    <>
    <div className='mt-4 my-3 p-3 '>
    <div className="card bg-base-100 sm:w-65 md:w-80 shadow-sm">
  <figure>
    <img
      src={item.Image}
      alt={item.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-600 hover:text-white duration-200">Add to cart</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
