import React from 'react'
import Products from '../Products/Products';

const CategoryDetails = () => {
  return (
    <div className='my-8'>
      <h3 className='text-center text-3xl sm:text-4xl'>Headphones</h3>
      <Products innerPage={true} />
    </div>
  )
}

export default CategoryDetails
