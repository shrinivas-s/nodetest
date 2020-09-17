var app=require('express')();
var server=require('http').Server(app);
app.get("/",function(req,res){
	 res.sendFile(__dirname+'/index.html');
})
app.get("/favicon.ico",function(req,res){
	 res.sendFile(__dirname+'/favicon.ico');
})
app.get("/main.css",function(req,res){
	 res.sendFile(__dirname+'/main.css');
})
app.get("/TamilNadu_Logo.png",function(req,res){
	 res.sendFile(__dirname+'/TamilNadu_Logo.png');
})
const port=process.env.port || 3000;
server.listen(port, () => {
  console.log('listening on *:3000');
});
