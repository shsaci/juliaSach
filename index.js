var express = require ('express')

var app = express()
var PORT = 3000

var routes = require('./routes')

// app.get('/', function(req, res) {
//   res.send('Hello All Fellow Wombats')
// })

app.get('/', routes.exportedFunction)

app.listen(PORT, function(){
  console.log("Server is listening on port ", PORT);
})
