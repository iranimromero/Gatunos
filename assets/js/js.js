$(document).ready(function(){
    $.validator.addMethod("validaRut", function (value, element) {
        var pattern = /([0-9]-[0-9k])/i;
        return this.optional(element) || pattern.test(value);
    }, "Ingrese un RUT correcto");

    $.validator.addMethod("validaNombre", function (value, element) {
        var pattern = /^[a-zA-Z]/;
        return this.optional(element) || pattern.test(value);
    }, "Este campo solo admite letras");


    $("#formulario").validate({
        rules: {
           
            rut:{
                maxlength: 8,
                required: true,
                validaRut: true
            }, 
            
            Nombre: {
                maxlength: 50,
                validaNombre : true
            },
            Apellido: {
                maxlength: 50,
                validaNombre : true
            }
        },
        messages : {
            rut:{
                maxlength: "El RUT debe tener 8 caracteres",
                required: "Debe ingresar el digito",
            }, 
            
            Nombre: {
                required: "Debe ingresar un nombre",
                maxlength: "El Nombre debe tener maximo 50 caracteres"

            },
            Apellido: {
                required: "Debe ingresar un nombre",
                maxlength: "El Apellido debe tener maximo 50 caracteres"

            }
        }
    });

 
    
});
