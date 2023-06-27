(async () => {
    const database = require('./connection-db');
    const Usuario = require('./create-db'); 
    await database.sync();
})();