import React from 'react'

const page = async({params,}:{ params: Promise<{ productId:string ,reviewsId:string}>}) => {
    const reviewsId = (await params).reviewsId;
    const productId = (await params).productId;
  return (
    <div>
      <h1 className='text-4xl font-bold text-amber-400'>Review Details</h1>
      <p>Here are the details for the selected review: {reviewsId} of product {productId}</p>
    </div>
  )
}

export default page