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
    //CAPTURO LO QUE PONENE EN EL FORMULARIO DE REGISTRO
    var capturar_usuario =document.getElementById("usuario").value;
    var capturar_pass =document.getElementById("contraseña").value;
    var capturar_mail =document.getElementById("mail").value;

 if(!document.getElementById("usuario").value){
       capturar_usuario = "No hubo dato";
   }
   if(!document.getElementById("contraseña").value){
    capturar_pass = "No hubo dato";
   }
   if(!document.getElementById("mail").value){
       capturar_mail = "No hubo dato"
   }



   //contruyo el objeto con el usuario que me dieron por el form la pass y el mail
    nuevo_usuario =new Usuario(capturar_usuario,capturar_pass,capturar_mail);
    agregar();
}


function agregar() {
    // aca agrrgo el objeto al array mis usuarios
    arr_mis_usuarios.push(nuevo_usuario);
    
    document.getElementById("mi-formulario").reset();
    //nada mas creo un li y un a por cada uno de los valores del usuario
    document.getElementById("mis-usuarios-li").innerHTML += '<li>Usuario: <a href="">'+nuevo_usuario.usuario+'</a></li><li>Pass: <a href=""> '+nuevo_usuario.pass+'</a></li><li>mail: <a href="">'+nuevo_usuario.mail+' </a></li>'
    saveInLocalStorage(arr_mis_usuarios);
}

function saveInLocalStorage(arr_nuevo){
    if((localStorage.getItem("favoritos")) != null){
    let array_viejo = []
    array_viejo =JSON.parse( localStorage.getItem("favoritos"));
   
    let array_a_guardar= arr_nuevo;
    for( i=0; i<array_viejo.length ; i++){
    array_a_guardar.push(array_viejo[i]);

        }
    }
    localStorage.setItem("favoritos",JSON.stringify(arr_nuevo));
}
