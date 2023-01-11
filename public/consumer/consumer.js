
function home(){
    location.replace("http://localhost:3000")
}
var form=document.getElementById('cus');
var username,password;
form.addEventListener('submit',function(event){
    event.preventDefault();
    username=document.getElementById('customer_id').value;
    password=document.getElementById('password').value;

    if(username=="8888" && password=="hello"){
       
       location.replace("http://localhost:3000/next");
    }
    else{
        alert("Incorrect customer id and password!!!Try again");
        location.replace("http://localhost:3000/consumer");
    }
})




