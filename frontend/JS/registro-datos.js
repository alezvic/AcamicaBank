var arr_mis_usuarios =[];

var btn_acceder = document.getElementById("acceder");
var btn_registrar = document.getElementById("btn-registrar");


document.getElementById("btn-registrar").addEventListener("click",function(ev){
ev.preventDefault();
capturar_datos();

});

function capturar_datos(){
    function Usuario(usuario,pass,mail) {
        this.usuario =usuario;
        this.pass =pass;
        this.mail =mail;
        
    }
    var capturar_usuario =document.getElementById("usuario").value;
    var capturar_pass =document.getElementById("contraseña").value;
    var capturar_mail =document.getElementById("mail").value;

   
   
    console.log(capturar_usuario,"este es mi usuario");
    console.log(capturar_pass, "esta es mi pass");
    console.log(capturar_mail,"este es mi mail");
    
    nuevo_usuario =new Usuario(capturar_usuario,capturar_pass,capturar_mail);
    agregar();
}


function agregar() {
    arr_mis_usuarios.push(nuevo_usuario);
    console.log(arr_mis_usuarios, "mi array de usuarios ");

    document.getElementById("mi-formulario").reset();
    //nada mas creo un li y un a por cada uno de los valores del usuario
    document.getElementById("mis-usuarios-li").innerHTML += '<li>nombre de usuario: <a href="">'+nuevo_usuario.usuario+'</a></li><li>Pass: <a href=""> '+nuevo_usuario.pass+'</a></li><li>mail: <a href="">'+nuevo_usuario.mail+' </a></li>'
    
}