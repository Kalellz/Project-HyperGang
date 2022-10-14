import axios from 'axios'

const api = axios.create({
	baseURL:'http://localhost:5000'
})

export async function Listcategories(){
    const r = await api.get('product/category')
    return r.data
}