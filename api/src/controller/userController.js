import { login, logup } from "../repo/userRepository.js";
import { Router } from "express";
const server = Router();

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
server.post('/user/logup', async (req, resp) => {
    try{
        const {nome, sobrenome, email, senha} = req.body;
        const resposta = await logup(nome, sobrenome, email, senha)
        if(!resposta){
            throw new Error('Credenciais inválidas')
        }
        resp.status(204).send("CADASTRADO COM SUCESSO")
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;