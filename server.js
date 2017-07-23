const express = require('express');
const app = express();

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/test',function(req,res){
	res.sendFile(__dirname + '/test.html');
});
app.use(express.static(__dirname + '/public'));

app.listen(3000,function(){
	console.log('Server running on port 3000');
});