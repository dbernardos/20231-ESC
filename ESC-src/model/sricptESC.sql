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