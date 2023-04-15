(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {

                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
                // Do not submit the form here, handle it with JavaScript instead
                event.preventDefault();
            }, false)
        })
})()

// Llamo por jquery a todo el documento y escondo el 2do y 3er paso una vez que finalizo la carga

$(document).ready(function(){
    $("#firstStep").show();
    $("#secondStep").hide();
    $("#thirdStep").hide();
    $("#errorMsg").hide();
})

function wizardFirst() {
    let nombreEmpresa =  document.getElementById("nombreEmpresa").value;
    let rubroEmpresa = document.getElementById("rubroEmpresa").value;

    if (nombreEmpresa.length == 0 || rubroEmpresa.length == 0) {

    } else {
        $("#firstStep").hide();
        $("#secondStep").show();
        $("#thirdStep").hide();
    }
}

function wizardSecond() {

    let nombrePersona = document.getElementById("nombrePersona").value;
    let apellidoPersona = document.getElementById("apellidoPersona").value;
    let telefonoPersona = document.getElementById("telefonoPersona").value;
    let mailPersona = document.getElementById("mailPersona").value;

    if (telefonoPersona.length == 0) {
        $("#errorTlf").html("El Telefono es requerido");

    } 
    else if (telefonoPersona.length != 0) {

        const regexTelefonoAR = /^\+?(54)?[ -]?(0?11|[2368]\d)[ -]?(\d{4}[ -]?\d{4})$/;
        let prueba = regexTelefonoAR.test(telefonoPersona);

        if (prueba) {

            if (nombrePersona.length == 0 || apellidoPersona.length == 0 || mailPersona.length == 0)  {

                $("#firstStep").hide();
                $("#secondStep").show();
                $("#thirdStep").hide();
        
            }
            else{
                $("#firstStep").hide();
                $("#secondStep").hide();
                $("#thirdStep").show();
                // $("#errorTlf").text("El telefono es invalido");

                $("#nombreEmpresaOut").html(nombreEmpresa);
                $("#rubroEmpresaOut").html(rubroEmpresa);
                $("#nombrePersonaOut").html(nombrePersona);
                $("#apellidoPersonaOut").html(apellidoPersona);
                $("#telefonoPersonaOut").html(telefonoPersona);
                $("#mailPersonaOut").html(mailPersona);

                $.ajax({
                    method:"POST",
                    url: "https://reqres.in/api/users",
                    data: {
                        "name": nombreEmpresa.value,
                        "job": rubroEmpresa.value,
                        "Cliente": nombrePersona,
                        "Telefono": telefonoPersona,
                        "mail": mailPersona,
                    }
                }).done(
                    function(msj) {
            
                        alert("Muchas gracias por contactarte con nosotros, tu número de gestión es el  " + msj.id + " en breve nuestro equipo se pondrá en contacto contigo")
            
                    }
                )
           
            }

           
        } 
        else {
            console.log("es Falso");
            $("#errorTlf").html("El formato del número es erroneo");
            $("#errorTlf").show();
            prueba = false;

        }
       
    }

}

function inicio() {
    $("#firstStep").show();
    $("#secondStep").hide();
    $("#thirdStep").hide();
}
