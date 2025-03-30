import React from 'react'
import { Trash2, Minus, Plus } from 'lucide-react';
import useEcomStore from '../../store/ecom-store';
import { Link } from 'react-router-dom'

const CartCard = () => {

    const carts = useEcomStore((state) => state.carts)
    const actionUpdateQuantity = useEcomStore((state) => state.actionUpdateQuantity)
    const actionRemoveProduct = useEcomStore((state) => state.actionRemoveProduct)
    const getTotalPrice = useEcomStore((state) => state.getTotalPrice)
    console.log(carts)
    return (
        <div>
            <h1 className='text-2xl font-bold'>ตะกร้าสินค้า</h1>
            {/* border */}
            <div className='border p-2'>
                {/* Card */}

                {carts.map((item, index) => (
                    <div key={index} className='bg-white p-2 rounded-md shadow-md mb-2'>
                        {/* Row 1 */}
                        <div className='flex justify-between mb-2'>
                            {/* left */}
                            <div className='flex gap-2 items-center'>

                                {
                                    item.images && item.images.length > 0
                                        ? <img
                                            className='w-16 h-16 rounded-md'
                                            src={item.images[0].url} />
                                        : <div className='w-16 h-16 bg-gray-200 rounded-md flex text-center items-center'>
                                            No Image
                                        </div>
                                }







                                <div>
                                    <p className='font-bold'>{item.title}</p>
                                    <p className='text-sm'>{item.description}</p>
                                </div>
                            </div>
                            {/* right */}
                            <div
                                onClick={() => actionRemoveProduct(item.id)}
                                className='text-red-500 p-2 '>
                                <Trash2 />
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className='flex justify-between'>
                            {/* left */}
                            <div className='border rounded-sm px-2 py-1 flex items-center'>
                                <button
                                    onClick={() => actionUpdateQuantity(item.id, item.count - 1)}
                                    className='px-2 py-1 bg-gray-200 rounded-sm hover:bg-gray-400'>
                                    <Minus size={16} />
                                </button>

                                <span className='px-4'>{item.count}</span>

                                <button
                                    onClick={() => actionUpdateQuantity(item.id, item.count + 1)}
                                    className='px-2 py-1 bg-gray-200 rounded-sm hover:bg-gray-400'>
                                    <Plus size={16} />
                                </button>
                            </div>
                            {/* right */}
                            <div className='font-bold text-blue-500'>
                                {item.price * item.count}
                            </div>
                        </div>
                    </div>
                ))
                }
                {/* total */}
                <div className='flex justify-between px-2'>
                    <span>รวม</span>
                    <span>{getTotalPrice()}</span>
                </div>
                {/* Button */}
                <Link to='/cart'>
                    <button className='mt-4 bg-green-500 hover:bg-green-600
                 text-white w-full py-2 rounded-md shadow-md'>
                        ดำเนินการชำระเงิน
                    </button>
                </Link>

            </div>


        </div>
    )
}

export default CartCard