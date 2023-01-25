
var socket = io();
var a,b,c;
function a(){
    location.replace("https://www.neabilling.com/viewonline/");
}
socket.on('met', function(data) {
    
    document.getElementById('h').innerHTML = data+"units"; 
    
    console.log(data);
    
});
socket.on('meter_read', function(data) {
    
    document.getElementById('h').innerHTML = data+"units"; 
    
    console.log(data);
    
});
socket.on('bulb_1',function(data){
    if(data[2]==='1'){
      document.getElementById('a').innerHTML="DEVICE A:ON";
      document.getElementById('bulb_a').src="bulb_on.png";
    }
    
    else if(data[2]==='0'){
      document.getElementById('a').innerHTML="DEVICE A:OFF";
      document.getElementById('bulb_a').src="bulb_off.png";
    }
   // console.log(data);
})
socket.on('bulb_2',function(data){
    if(data[2]==='1'){
        document.getElementById('b').innerHTML="DEVICE B:ON";
        document.getElementById('bulb_b').src="bulb_on.png";
    }
    else if(data[2]==='0'){
        document.getElementById('b').innerHTML="DEVICE B:OFF";
        document.getElementById('bulb_b').src="bulb_off.png";
    }
    //console.log(data);
})
socket.on('bulb_3',function(data){
    if(data[2]==='1'){
        document.getElementById('c').innerHTML="DEVICE C:ON";
        document.getElementById('bulb_c').src="bulb_on.png";
       
        //console.log(c);
      }
    else if(data[2]==='0'){
        document.getElementById('c').innerHTML="DEVICE C:OFF";
        document.getElementById('bulb_c').src="bulb_off.png";
    }
    //console.log(data)
})

