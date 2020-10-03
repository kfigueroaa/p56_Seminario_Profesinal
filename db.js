const db = require('mongoose')

db.Promise = global.Promise

async function connect() {
    const uri = "mongodb+srv://ups:12345@cluster0.vtrih.gcp.mongodb.net/test"
    await db.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'upsdb',
    })
        .then((data) => { console.log('[db] - Conectada con éxito.') })
        .catch((error) => {  console.error( '[error log] - ' + error ) })    
}

module.exports = connect