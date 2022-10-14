import { alterimagecategory, listcategories } from "../repo/productRepository.js";
import { Router } from "express";
import multer from 'multer';

const upload = multer({ dest : 'storage/userIcon' })
const server = Router();

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