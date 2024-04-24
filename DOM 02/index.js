let getColor = () =>{
let randomnumber=Math.floor(Math.random()*16777215);
let randomCode ="#"+ randomnumber.toString(16);
document.body.style.backgroundColor=randomCode;
}
document.getElementById("change-color-btn").addEventListener(
"click",getColor  
)

