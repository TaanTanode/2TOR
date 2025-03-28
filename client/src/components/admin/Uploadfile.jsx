import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Resize from 'react-image-file-resizer'
import { uploadFiles } from '../../api/product'
import useEcomStore from '../../store/ecom-store'


const Uploadfile = ({ form, setForm }) => {

    const token = useEcomStore((state)=>state.token)
    const [isLoading, setIsloading] = useState(false)
    const handleOnChange = (e) => {

        const files = e.target.files
        if (files) {
            setIsloading(true)
            let allFiles = form.images
            for (let i = 0; i < files.length; i++) {
                // console.log(files[i])


                //validate
                const file = files[i]
                if (!file.type.startsWith('image/')) {
                    toast.error(`File ${file.name} ไม่ใช่รูป`)
                    continue
                }
                //image resize
                Resize.imageFileResizer(
                    files[i],
                    720,
                    720,
                    "JPEG",
                    100,
                    0,
                    (data) => {
                        //endpoint back
                        
                        uploadFiles(token,data)
                        .then((res)=>{
                            console.log(res)
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
                    },
                    "base64"
                )
            }
        }

    }
    return (
        <div>
            <input
                onChange={handleOnChange}
                type='file'
                name='images'
                multiple
            />
        </div>
    )
}

export default Uploadfile