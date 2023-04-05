var num1=document.getElementById("num1");
var num2 = document.getElementById("num2");
var resultid = document.getElementById("resultid");
var resultid1= document.getElementById("resultid1");
var resultid2= document.getElementById("resultid2");
var resultid3= document.getElementById("resultid3");
var resultid4= document.getElementById("resultid4");
var form = document.getElementById("formid");
form.addEventListener('submit',function(event){
if(!num1.value || !num2.value)
{
    alert("values type chey ra howle");
}
else if(num1.value<0 || num2.value<0)
{
    alert("positive numbers kottu bhaiyaaa");
}
else
{
    var x = parseFloat(num1.value);
    var y  = parseFloat(num2.value);
    var result= x/y;
    var add = x+y;
    var sub = x-y;
    var mul = x*y;
    var div = x/y;
    var percent = result*100;
    resultid.innerText = "percentage:" + percent +"%";
    resultid1.innerText="Addition:" + add ;
    resultid2.innerText="subtraction:" + sub ;
    resultid3.innerText="multiplication:" + mul ;
    resultid4.innerText="division:" + div ;
    event.preventDefault();

}




});