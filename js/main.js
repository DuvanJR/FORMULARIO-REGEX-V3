document.getElementById('formulario').addEventListener('click', (e) => {
    e.preventDefault();

    // DECLARACION VARIABLES
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    codigo = document.getElementById('codigo').value;
    fecha = document.getElementById('fecha').value;
    direccion = document.getElementById('direccion').value;
    telefono = document.getElementById('telefono').value;
    celular = document.getElementById('celular').value;
    email = document.getElementById('email').value;





    // VARIABLES DE EXPRESION REGULARES
    ExpRegNomApe = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ]+/;
    ExpRegCodigo = /^[0-9]{8}$/;
    ExpRegFecha = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    ExpRegDireccion = /[\wñáéíóúÁÉÍÓÚ,#-/_+.|°]/;
    ExpRegNumTelefono = /^[0-9]{7}$/;
    ExpRegNumCelular = /^[3][0-9]{9}$/;
    ExpRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;




    // VALIDACION

    //  NOMBRE
    if (nombre.match(ExpRegNomApe) == null) {
        alertify.error("El campo Nombre es invalido")
        return false;
    }


    ////////////
    else if (apellido.match(ExpRegNomApe) == null) {
        alertify.error("El campo Apellido es invalido")
        return false;
    }


    //  CODIGO ESTUDIANTE
    else if (codigo.match(ExpRegCodigo) == null) {
        alertify.error("El campo Codigo es invalido")
            /*document.getElementById('codigo').style.boxShadow = "0 0 5px red";*/
        return false;
    }


    //  FECHA CALENDARIO
    else if (fecha.match(ExpRegFecha) == null) {
        alertify.error("El campo Fecha es invalido")
        return false;
    }


    //  DIRECCION
    else if (direccion.match(ExpRegDireccion) == null) {
        alertify.error("El campo Direccion es invalido")
        return false;
    }


    //  TELEFONO FIJO
    else if (telefono.match(ExpRegNumTelefono) == null) {
        alertify.error("El campo Telefono es invalido")
        return false;
    }


    //  TELEFONO CELULAR
    else if (celular.match(ExpRegNumCelular) == null) {
        alertify.error("El campo CELULAR es invalido")
        return false;
    }


    //  CORREO ELECTRONICO
    else if (email.match(ExpRegEmail) == null) {
        alertify.error("El campo Correo es invalido")
        return false;
    }


    //  LIMPIA EL FORMULARIO SI TODO ESTA CORRECTO
    else {

        alertify.success("El registro fue exitoso!!");
        console.log("Nombre: " + nombre + " Apellido: " + apellido)
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('codigo').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('direccion').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('celular').value = '';
        document.getElementById('email').value = '';


    }



})