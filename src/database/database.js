const {MongoClient} = require('mongodb')

module.exports = async function connect(){
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true})
        const db = client.db('node-rest-api');
        console.log('Database Connected')
        return db;
    } catch(e){
        console.log(e)
    }
}
