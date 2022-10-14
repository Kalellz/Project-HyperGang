import { con } from './connection.js'

export async function logup(nome, sobrenome, email, senha){
    const c = `
    INSERT INTO tb_usuario(nm_usuario, sbr_usuario, ds_email, ds_senha)
        VALUES(?, ?, ?, ?);`

    const [resp] = await con.query(c, [nome, sobrenome, email, senha])
    return resp;
}
export async function login(email, senha){
    const c = `
    SELECT 		id_usuario 	        id,
                nm_usuario          nome,
                sbr_usuario         sobrenome
        FROM    tb_usuario
        WHERE   ds_email =          ?
        AND     ds_senha   =        ?`

    const [resp] = await con.query(c, [email, senha])
    return resp[0];
}