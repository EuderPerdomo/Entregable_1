
function CambiarClase() {
    var elemento = document.getElementById("test");
    if (elemento.className == "prueba") {
      elemento.className = "prueba2";
    }else {
      elemento.className = "prueba";
    }
}


function CambiarClaseDos() {
    var elemento = document.getElementById("cajafather");
    if (elemento.className == "cajafather") {
      elemento.className = "cajafather2";
      return false;
    }else {
      elemento.className = "cajafather";
      return false;
    }
    return false;
}

/* Funcion para la barra de Navegacion*/
function collapseMenu() {
  var x = document.getElementById("myBarra");
  if (x.className === "barra") {
    x.className += " responsive";
  } else {
    x.className = "barra";
  }
}

/*Funcion para la validacion del formulario */

function validar() {
  var boton = document.getElementById("enviar");
  boton.addEventListener("click", enviarformulario);
}

function enviarformulario() {
  var valido=true;

  if(nombre.value===""){
      alert('El nombre esta vacio')
      var valido=false;
      nombre.focus();
      return false;
  }

  if(correo.value===""){
      alert('El correo esta vacio')
      var valido=false;
      correo.focus();
      return false;
  }

  if(telefono.value===""){
      alert('El telefono esta vacio')
      var valido=false;
      telefono.focus();
      return false;
  }

  if(mensaje.value===""){
      alert('El mensaje esta vacio')
      var valido=false;
      mensaje.focus();
      return false;
  }

  if (valido) {
      formulario.submit();
      alert("El formulario se envio Correctamente");
  } else {
      alert("El formulario no puede ser enviado, Verifique la Validez de los datos");
  }
}
window.addEventListener("load", validar);
/*Finaliza Funciones Paara validar Formulario */