import { alterimage ,alterimagecategory, listcategories, listproducts } from "../repo/productRepository.js";
import { Router } from "express";
import multer from 'multer';

const upload = multer({ dest : 'storage/productsIcon' })
const server = Router();

server.get('/products', async (req, resp) => {
    try{
        const resposta = await listproducts()
        resp.send(resposta)
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})
server.get('/product/category', async (req, resp) => {
    try{
        const resposta = await listcategories()
        resp.send(resposta)
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})
server.put('/product/:id/imagem', upload.single('capa'), async (req, resp) => {
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
server.put('/product/category/:id/imagem', upload.single('capa'), async (req, resp) => {
    try{
        const { id } = req.params;
        const image = req.file.path;

        const resposta = await alterimagecategory(image, id)
        if(resposta != 1) throw new Error('A imagem não pode ser salva.')
        resp.status(204)
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;