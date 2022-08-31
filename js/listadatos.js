    function capturar() {
        //console.log("capturado");
        function Persona(nombre, apellido, codigo, fecha, direccion, telefono, celular, email) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.codigo = codigo;
            this.fecha = fecha;
            this.direccion = direccion;
            this.telefono = telefono;
            this.celular = celular;
            this.email = email;
        }
        var nombreCapturar = document.getElementById("nombre").value;
        //console.log(nombreCapturar);
        var apellidoCapturar = document.getElementById("apellido").value;
        //console.log(apellidoCapturar);
        var codigoCapturar = document.getElementById("codigo").value;
        //
        var fechaCapturar = document.getElementById("fecha").value;
        //
        var direccionCapturar = document.getElementById("direccion").value;
        //
        var telefonoCapturar = document.getElementById("telefono").value;
        //
        var celularCapturar = document.getElementById("celular").value;
        //
        var emailCapturar = document.getElementById("email").value;
        //




        nuevoSujeto = new Persona(nombreCapturar, apellidoCapturar, codigoCapturar, fechaCapturar, direccionCapturar, telefonoCapturar, celularCapturar, emailCapturar);
        console.log(nuevoSujeto);
        agregar();
    }

    var baseDatos = [];

    function agregar() {
        baseDatos.push(nuevoSujeto);
        console.log(baseDatos);
        document.getElementById("tabla").innerHTML += '<tbody> <td>' + nuevoSujeto.nombre + '</td> <td>' + nuevoSujeto.apellido + '</td> <td>' + nuevoSujeto.codigo +
            '</td> <td>' + nuevoSujeto.fecha + '</td> <td>' + nuevoSujeto.direccion + '</td> <td>' + nuevoSujeto.telefono + '</td> <td>' + nuevoSujeto.celular +
            '</td> <td>' + nuevoSujeto.email + '</td> </tbody>';
    }