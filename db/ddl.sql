CREATE DATABASE projecthypergang;
USE projecthypergang;
CREATE TABLE tb_usuario(
		id_usuario			INT PRIMARY KEY AUTO_INCREMENT,
    	nm_usuario			VARCHAR(10) NOT NULL,
		sbr_usuario         VARCHAR(200) NOT NULL,
    	ds_email			VARCHAR(200) NOT NULL,
    	ds_senha			VARCHAR(200) NOT NULL,
        vr_admin			BOOL NOT NULL,
    	img_icon			VARCHAR(200)
);
CREATE TABLE tb_categoria(
		id_categoria			INT PRIMARY KEY AUTO_INCREMENT,
        nm_categoria			varchar(200),
        img_categoria           VARCHAR(200)
);
CREATE TABLE tb_produto(
		id_produto				INT PRIMARY KEY AUTO_INCREMENT,
        nm_produto				varchar(200) NOT NULL,
        ds_produto				varchar(200) NOT NULL,
        vl_produto				DECIMAL      NOT NULL,
        qnt_produto				INT 		 NOT NULL,
        id_categoria			INT 		 NOT NULL,
        img_produto				VARCHAR(200),
        FOREIGN KEY(id_categoria) REFERENCES tb_categoria(id_categoria)
);