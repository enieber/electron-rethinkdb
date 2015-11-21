var fs = require('fs')
var file = fs.readFileSync('./package.json')
var r = require('rethinkdb')


var connection = null;
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err
    	connection = conn
    
    r.db('test').tableCreate('authors').run(connection, function(err, result) {
    	if (err)
    		console.log("Error: " + err)


    	else
    		console.log('table create')
	})


	// r.table('authors').insert({name: "Jhon",age: 18}).run(conn, function(err, result){
	// 	if (err) throw err
	// 	console.log(result)		
	// })

	r.db('test').table('authors').getAll('name','age').run(conn, function(err, result){
		if (err) throw err
			
		console.log(result)
		
	})

})
