const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

let db;

async function createConnection() {
    const adapter = new FileAsync("db.json");
    db = await low(adapter);
    db.defaults({ tasks: [] }).write(); //Serian como las tables de la base de datos

    //example
    /**
     * db.defaults({ tasks: [], users: []}).write();
     */

}

const getConnection = () => db;

module.exports = {
    createConnection,
    getConnection
};