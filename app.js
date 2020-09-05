var app=require('express')();
var server=require('http').Server(app);
app.get("/",function(req,res){
	 res.send('<h1>Hello world</h1>');
})
server.listen(3000, () => {
  console.log('listening on *:3000');
});
