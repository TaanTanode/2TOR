import React, { useState, useEffect } from 'react'
import { getOrders } from '../../api/user'
import useEcomStore from '../../store/ecom-store'

const HistoryCard = () => {
    const token = useEcomStore((state) => state.token)
    console.log(token)
    const [orders, setOrders] = useState([])


    useEffect(() => {
        handleGetOrders(token)
    }, [])

    const handleGetOrders = (token) => {
        getOrders(token)
            .then((res) => {
                console.log(res)
                setOrders(res.data.orders)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div>
            <h1 className='text-2xl font-bold'>ประวัติการสั่งซื้อ</h1>

            {/* คลุม  table */}
            <div>
                {/* card loop order*/}
                
                <div className='bg-gray-100 p-4 rounded-md shadow-md'>
                    {/* ทีมงาน header */}
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-sm'>Order date</p>
                            <p className='font-bold'>วันที่ ....</p>
                        </div>
                        <div>
                            Status
                        </div>
                    </div>
                    {/* ทีมงาน table loop product*/}
                    <div>
                        <table className='border w-full'>
                            <tr className='bg-gray-200'>
                                <th>สินค้า</th>
                                <th>ราคา</th>
                                <th>จำนวน</th>
                                <th>รวม</th>
                            </tr>
                            <tr>
                                <td>GTX 4060</td>
                                <td>13900</td>
                                <td>1</td>
                                <td>2000</td>
                            </tr>

                        </table>
                    </div>
                    {/* ทีมงาน total */}
                    <div>
                        <div className='text-right'>
                            <p>ราคาสุทธิ</p>
                            <p>50000</p>
                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default HistoryCard