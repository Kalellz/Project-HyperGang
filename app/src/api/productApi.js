import axios from 'axios'

const api = axios.create({
	baseURL:'http://localhost:5000'
})

export async function Listcategories(){
    const r = await api.get('product/category')
    return r.data
}
export async function ListProducts(){
    const r = await api.get('products')
    return r.data
}
export async function ListProductsName(name){
    const r = await api.get(`product/search?name=${name}`)
    return r.data
}