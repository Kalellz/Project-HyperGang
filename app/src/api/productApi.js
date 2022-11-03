import axios from 'axios'

const api = axios.create({
	baseURL:'http://localhost:5000'
})

export async function createProduct(nome, descricao, preco, quantidade, idcategoria){
    const r = await api.post('produto', {
        nome: nome,
        descricao: descricao,
        preco: preco ,
        quantidade: quantidade,
        idcategoria: idcategoria
      });
      return r.data
}
export async function alterimage(id, imagem){
    const formData = new FormData();
    formData.append('capa', imagem);
    const r = await api.put(`/product/${id}/imagem`, formData, {
        headers:{
            "Content-Type" : "multipart/form-data"
        }
      });
      return r.status
}
export async function alterimagecategory(id, imagem){
    const formData = new FormData();
    formData.append('capa', imagem);
    const r = await api.put(`/product/category/${id}/imagem`, formData, {
        headers:{
            "Content-Type" : "multipart/form-data"
        }
      });
      return r.status
}
export async function createCategory(nome){
    const r = await api.post('category', {
        nome: nome
      });
      return r.data
}
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
export async function DeleteProduct(Id){
    const r = await api.delete(`/product/${Id}`)
    return r.status
}
export async function alterProduct(Id, nome, descricao, preco, quantidade, idcategoria){
    const r = await api.put(`/product/${Id}`, {
        nome: nome,
        descricao: descricao,
        preco: preco ,
        quantidade: quantidade,
        idcategoria: idcategoria
      });
      return r.data
}
export async function BuscarCorreio(cep){
    const r = await api.get(`correio/${cep}`)
    return r.data
}
export async function BuscarCorreioUser(cep){
    const r = await api.get(`correio/busca/${cep}`)
    return r.data
}