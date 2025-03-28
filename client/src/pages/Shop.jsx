import React, { useEffect } from 'react'
import ProductCard from '../components/card/ProductCard'
import useEcomStore from '../store/ecom-store'

const Shop = () => {
  const getProduct = useEcomStore((state) => state.getProduct)
  const products = useEcomStore((state) => state.products)

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className='flex'>

      {/* SearchBar */}
      <div className='w-1/4 p-4 bg-gray-100 h-screen'>
        Search bar
      </div>
      {/* SearchBar */}
      <div className='w-1/2 p-4 h-screen overflow-y-auto'>
        <p className='text-2xl font-bold mb-4'>สินค้าทั้งหมด</p>
        <div className=' flex flex-wrap gap-4'>
          {/* Product card */}
          {
            products.map((item, index) =>
              <ProductCard key={index} item={item}/>
            )
          }


          {/* Product card */}


        </div>
      </div>
      {/* SearchBar */}
      <div className='w-1/4 p-4 bg-gray-100 h-screen overflow-y-auto'>
        Cart
      </div>

    </div>
  )
}

export default Shop