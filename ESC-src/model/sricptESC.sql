create table  Usuario(
idUsuario int(100) primary key null auto_increment,
nome varchar(100) not null,
email varchar(100) not null,
senha varchar(100) not null
);

create table Tarefas(
idTarefas int(100) primary key null auto_increment,
tipo varchar(100) not null,
dataEntreg date not null,
descr varchar(100) not null,
fk_idUsuario int(100),
foreign key (fk_idUsuario)
references Usuario(idUsuario)
);

create table Caracteristicas(
idCarac int(100) primary key not null auto_increment,
tipo varchar(100) not null,
descriCarac varchar(100) not null,
fk_idTarefas int(100),
foreign key (fk_idTarefas)
references Tarefas(idTarefas)
);

INSERT INTO `usuario`(`idUsuario`, `nome`, `email`, `senha`) VALUES (NULL,'admin2','admin2@gmail.com','12345678');
INSERT INTO `usuario`(`idUsuario`, `nome`, `email`, `senha`) VALUES (NULL,'admin3','admin3@gmail.com','12341234');
INSERT INTO `usuario`(`idUsuario`, `nome`, `email`, `senha`) VALUES (NULL,'admin4','admin4@gmail.com','12345123');
INSERT INTO `usuario`(`idUsuario`, `nome`, `email`, `senha`) VALUES (NULL,'admin5','admin5@gmail.com','12345612');
INSERT INTO `usuario`(`idUsuario`, `nome`, `email`, `senha`) VALUES (NULL,'admin6','admin6@gmail.com','12345671');
INSERT INTO `usuario`(`idUsuario`, `nome`, `email`, `senha`) VALUES (NULL,'admin7','admin7@gmail.com','23456789');
INSERT INTO `usuario`(`idUsuario`, `nome`, `email`, `senha`) VALUES (NULL,'admin8','admin8@gmail.com','34567891');
INSERT INTO `usuario`(`idUsuario`, `nome`, `email`, `senha`) VALUES (NULL,'admin9','admin9@gmail.com','45678910');
INSERT INTO `usuario`(`idUsuario`, `nome`, `email`, `senha`) VALUES (NULL,'admin10','admin10@gmail.com','56789123');

/** comando para rodar o node **/
/** npm install mysql2 expess express-session ejs md5 **/