var formulario_registro= document.getElementById("formulario-registro");
var formulario_ingreso = document.getElementById("formulario-ingreso");


document.getElementById("registrarse").addEventListener("click",function(){
  
    formulario_ingreso.style.display ="none"
    formulario_registro.style.display = "block"


});

document.getElementById("acceder").addEventListener("click",function(){
    formulario_registro.style.display ="none"
    formulario_ingreso.style.display = "block"

  
  


});