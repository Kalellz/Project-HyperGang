import axios from 'axios'

const api = axios.create({
	baseURL:'http://localhost:5000'
})

export async function Login(email,senha){
    const r = await api.post('user/login', {
        email: email,
        senha: senha
      });
      return r.data
}
export async function Logup(nome, sobrenome, email,senha){
  const r = await api.post('user/logup', {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha
    });
    return r.data
}
export async function showUser(id){
  const r = await api.get(`user/${id}`)
  return r.data
}
export async function alterUser(id, nome, sobrenome, email, senha){
  const r = await api.put(`user/${id}`, {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    senha: senha
  })
  return r.data
}
export async function alterImage(id, image){
  let form = new FormData()
  form.append('capa', image)
  const r = await api.put(`http://localhost:5000/user/${id}/imagem`, form, {
    headers: {
      'Content-Type' : 'multipart/form-data'
    }
  })
  return r.data
}
