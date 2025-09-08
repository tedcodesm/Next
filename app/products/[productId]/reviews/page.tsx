import React from 'react'


type ProductReviewsProps = {
  params: Promise<{ productId: number , reviewId: number }>;
}

const page = async ({ params }: ProductReviewsProps) => {
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;
  return (
    <div className=' min-h-screen justify-center flex flex-col w-full items-center space-y-5'>
      <h1 className='text-4xl font-bold text-amber-400'>Product Reviews</h1>
      <p>Here are the reviews for the selected product: {productId}</p>
    </div>
  )
}

export default page
