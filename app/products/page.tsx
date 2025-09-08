import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ProductsList = () => {
  return (
    <div className='m-10 min-h-screen justify-center flex flex-col w-full items-center space-y-5'>
        <h1 className='text-4xl font-bold text-amber-400'>Products List</h1>
        <Popover>
          <PopoverTrigger className='font-bold rounded-full px-4 py-1 bg-amber-300'>Open</PopoverTrigger>
          <PopoverContent> what you are viewing right now is the Products List</PopoverContent>
        </Popover>
    </div>
  )
}

export default ProductsList