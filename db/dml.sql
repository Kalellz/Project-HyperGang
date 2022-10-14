INSERT INTO tb_usuario(nm_usuario, sbr_usuario, ds_email, ds_senha)
        VALUES("Kalel","Rodrigues da Silva", "ZoroPlay1220@gmail.com","Kalell1220");

INSERT INTO tb_categoria(nm_categoria)
        VALUES ("Casa e Cozinha");
INSERT INTO tb_categoria(nm_categoria)
        VALUES ("Brinquedos");
INSERT INTO tb_categoria(nm_categoria)
        VALUES ("Eletrônicos");
INSERT INTO tb_categoria(nm_categoria)
        VALUES ("Fitness");
INSERT INTO tb_categoria(nm_categoria)
        VALUES ("Ferramentas");
INSERT INTO tb_categoria(nm_categoria)
        VALUES ("Saúde e Beleza");

INSERT INTO tb_produto(nm_produto, ds_produto, vl_produto, qnt_produto, id_categoria)
        VALUES ("Dispenser Pasta De Dente Automático", "O dispositivo inteligente para economizar espaço e pasta de dente!", 255, 1, 1);