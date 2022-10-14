import { con } from './connection.js'

export async function listcategories(){
    const c = `
    select * from tb_categoria;
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