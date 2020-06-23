var app = require("./server")
//var {connect} = require('./database/database')

async function main(){
	await app.listen(app.get('port'));
	console.log('Server on port 3000')
}

main();