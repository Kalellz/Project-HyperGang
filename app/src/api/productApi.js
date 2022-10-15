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
export async function ListProductsName(name, category){
    const r = await api.get(`product/search?name=${name}&category=${category}`)
    return r.data
}
export async function ListProductsId(Id){
    const r = await api.get(`product/search/${Id}`)
    return r.data
}