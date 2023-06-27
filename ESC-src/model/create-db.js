const Usuario = sequelize.define('Usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true       
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'O campo deve ser um endereço de e-mail válido.'
            }
        } 
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
    });

// Se force: true, a tabela será recriada toda vez que o código for executado
sequelize.sync({ force: true }) 
.then(() => {
console.log('Tabela criada com sucesso!');
})
.catch((err) => {
console.error('Erro ao criar tabela:', err);
});