// console.log(process.argv);
// console.log(process.argv.length);
// var i = 2;
// var sum = 0;
// for (i; i < process.argv.length; i++){
// 	// console.log("numbers: ", Number(process.argv[i]) )
// 	sum += Number(process.argv[i])
// }
// console.log(sum);
// var fs = require('fs');
// var fileName = process.argv[2];
// // var fileBuffer = fs.readFileSync(fileName);
// var fileBuffer = fs.readFile(fileName,function(err,data){
// 	var string = data.toString();
// 	var newLines = string.split("\n");
// 	console.log(newLines.length-1);
// });
// var string = fileBuffer.toString();
// var newLines = string.split("\n");
// console.log(newLines.length-1);
// 
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/bower_components'))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
	// res.sendFile(path.join(__dirname+'/index.html'));
	res.render('index');
});

var server = app.listen(8000, function(){
	var host = server.address().address;
	var port = server.address().port;

 	console.log('Example app listening at http://%s:%s', host, port);
});



