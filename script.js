 async function fun(){
    try {
// get the input from the user


let code=document.getElementById("num").value;
if(code.length>6||code.length<6){
    alert("please enter a 6 digit code");

}
// clear the output field before dsiplaying the result
// document.getElementById("district").innerHTML="";
// document.getElementById("state").innerHTML="";
// document.getElementById("country").innerHTML="";


// https://api.postalpincode.in/pincode/590001
// get the data from the api
let response=await fetch(`https://api.postalpincode.in/pincode/${code}`)
let data=await response.json();
console.log(data);
// console.log(data[0].PostOffice[0].state);
// console.log(data[0].PostOffice[0].district);
// console.log(data[0].PostOffice[0].name);
// // console.log(data[0]);
if(data[0].PostOffice[0]===null){
    alert("please enter valid code");
}else{
    
document.getElementById("state").value=data[0].PostOffice[0].State;
document.getElementById("district").value=data[0].PostOffice[0].District;
document.getElementById("area").value=data[0].PostOffice[0].Name;

}
    }catch(e){
        console.log(e);
    }
 }