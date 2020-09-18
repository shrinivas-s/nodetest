var express=require('express');
var app=express();
var server=require('http').Server(app);

app.use(express.static('public'))
app.get("/",function(req,res){
   res.sendFile(__dirname+'/index.html');
})
app.get('/download', function(req, res){
  const file = `${__dirname}/TN_CHN-DGL_I_1709_516018.pdf`;
  res.setHeader('Content-type', 'application/pdf');
  res.download(file);
});


const port=process.env.PORT || 8080;
server.listen(port, () => {
  console.log('listening on *:3000');
});
