import axios from "axios";

export const createProduct = async (token, form) => {
    return axios.post('http://localhost:5000/api/product', form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listProduct = async (token, count = 20) => {
    return axios.get('http://localhost:5000/api/products/'+count, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const uploadFiles = async (token, form) => {
    // console.log('form API frontend', form)
    return axios.post('http://localhost:5000/api/images', {
        image: form
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const removeFiles = async (token, public_id) => {
    // console.log('form API frontend', form)
    return axios.post('http://localhost:5000/api/removeimages', {
        public_id
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}