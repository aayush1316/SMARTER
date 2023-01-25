var http = require('http');
var fs=require('fs'); 
var express = require('express');
var path=require("path")
var app=express()

const server=http.createServer(app);
const PORT=3000;
const { Server } = require("socket.io");
const io = new Server(server);


const { SerialPort, ReadlineParser } = require('serialport');
const { isObject } = require('util');

const port = new SerialPort({ 
    path:'/dev/ttyACM0', baudRate:9600 
})
const parser = new ReadlineParser()
port.pipe(parser)
var i=0;
var previous=fs.readFileSync("./public/consumer/next/meter.txt", "utf8");
fs.createReadStream('./public/consumer/next/meter.txt', {start: 0})

io.on('connection', (socket) => {
  io.emit('met',previous);
});

parser.on('data',(data)=>{
  
  if(data[0]==='A'){
  io.emit('bulb_1',data);
  }
  else if(data[0]==='B'){
    io.emit('bulb_2',data);
  }
  else if(data[0]==='C'){
    io.emit('bulb_3',data);
    i=0;
  }

  else{
  var a=Number(data)+Number(previous);
  io.emit('meter_read',a);
  console.log(a);
  fs.writeFile("./public/consumer/next/meter.txt",String(a),(err)=>{
      if(err){
        console.log(err);
      }
   });
  }
})


app.use(express.static(path.join(__dirname,"public/first")))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,"public/first/first.html"))
})

app.use(express.static(path.join(__dirname,"public/consumer")))
app.get('/consumer',(req,res)=>{ 
  res.sendFile(path.join(__dirname,"public/consumer/consumer.html"))
});

app.use(express.static(path.join(__dirname,"public/provider")))
app.get('/provider',(req,res)=>{ 
  res.sendFile(path.join(__dirname,"public/provider/provider.html"))
});

app.use(express.static(path.join(__dirname,"public/consumer/next")))
app.get('/next',(req,res)=>{ 
  res.sendFile(path.join(__dirname,"public/consumer/next/next.html"))
});


server.listen(PORT,()=>{
  console.log(`Server is listening on  ${PORT}`)
})


