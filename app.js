var app=require('express')();
var server=require('http').Server(app);
app.get("/",function(req,res){
	 res.send('<h1>Hello world</h1>');
})
const port=process.env.port || 3000;
server.listen(port, () => {
  console.log('listening on *:3000');
});
