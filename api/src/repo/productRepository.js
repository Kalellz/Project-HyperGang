import { con } from './connection.js'

export async function listproducts(){
    const c = `
    SELECT * FROM tb_produto;
    `
    const [resp] = await con.query(c)
    return resp
}
export async function alterimage(image, id){
    const c = `
    UPDATE  tb_produto
    SET     img_produto =      ?
    WHERE   id_produto =    ?`

    const [resp] = await con.query(c, [image, id])
    return resp.affectedRows;
}
export async function listcategories(){
    const c = `
    SELECT * FROM tb_categoria;
    `
    const [resp] = await con.query(c)
    return resp
}
export async function alterimagecategory(image, id){
    const c = `
    UPDATE  tb_categoria
    SET     img_categoria =      ?
    WHERE   id_categoria =    ?`

    const [resp] = await con.query(c, [image, id])
    return resp.affectedRows;
}
export async function searchProductsName(name){
    const c = `
    SELECT * FROM   tb_produto 
    WHERE           nm_produto LIKE ?`
    
    const [resp] = await con.query(c, [`%${name}%`])
    return resp;
}
