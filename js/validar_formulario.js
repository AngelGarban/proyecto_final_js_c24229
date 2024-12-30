
let nombre = document.getElementById('nombre'); 
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let telefono = document.getElementById('telefono');
let mensaje = document.getElementById('mensaje');

let enviar = document.getElementById('enviar');// boton
let limpiar = document.getElementById('limpiar');// boton

enviar.addEventListener('click', function(){
   //  console.log(nombre.value);
     //validaciones de que los inputs del formulario no esten validaciones
        
     if (nombre.value === ''){
           alert('El nombre no puede estar vacio');
           nombre.focus()
           return;
     }

     if (apellido.value ===''){
           alert('El apellido no puede estar vacio');
           apellido.focus();
           return;
     }

     if (email.value ===''){
         alert('Necesita ingresar un email de contacto');
         email.focus();
         return;
     }

     alert('Su mensaje a sido enviado, a la brevedad nos contactaremos con usted');
     
    }
);

limpiar.addEventListener('click', function(){
    nombre.value="";
    apellido.value="";
    email.value="";
    telefono.value="";
    mensaje.value="";
    }
 );


