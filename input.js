document.addEventListener( 'DOMContentLoaded',function(){
 var para1=document.getElementById("para").innerHTML;
 
 document.getElementById("highlight").onclick =function ()
 {highlight_word(para1)};	
},false);

function highlight_word(para1)
{ 
 var text=document.getElementById("word").value;
 

 {if(text)
var p=new RegExp("("+text+")", "gi");
  var t=para1.replace(p, "<span style=background-color:blue>"+text+"</span>");
 
  

  document.getElementById("para").innerHTML=t;
 }}