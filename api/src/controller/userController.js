import { login, logup, alterimage } from "../repo/userRepository.js";
import { Router } from "express";
import multer from 'multer';

const upload = multer({ dest : 'storage/userIcon' })
const server = Router();

server.post('/user/logup', async (req, resp) => {
    try{
        const {nome, sobrenome, email, senha} = req.body;
        const resposta = await logup(nome, sobrenome, email, senha)
        if(!resposta){
            throw new Error('Credenciais inválidas')
        }
        resp.status(204)
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})
server.post('/user/login', async (req, resp) => {
    try{
        const {email, senha} = req.body;
        const resposta = await login(email, senha)
        if(!resposta){
            throw new Error('Credenciais inválidas')
        }
        resp.send(resposta)
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/user/:id/imagem', upload.single('capa'), async (req, resp) => {
    try{
        const { id } = req.params;
        const image = req.file.path;

        const resposta = await alterimage(image, id)
        if(resposta != 1) throw new Error('A imagem não pode ser salva.')
        resp.status(204)
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;