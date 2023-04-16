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
    let pruebaMail = false;
    let pruebaTel = false;


    let nombrePersona = document.getElementById("nombrePersona").value;
    let apellidoPersona = document.getElementById("apellidoPersona").value;
    let telefonoPersona = document.getElementById("telefonoPersona").value;
    let mailPersona = document.getElementById("mailPersona").value;
    validaTel(telefonoPersona);
    validaEmail(mailPersona);

    function validaTel() {
        $("#errorTlf").hide();
        
        if (telefonoPersona.length == 0) {
            $("#errorTlf").html("El Telefono es requerido");
            $("#errorTlf").show();
            $("#errorTlf").css({'border-color': 'red'});
            return pruebaTel = false;
        } else {
            const regexTelefonoAR = /^\+?(54)?[ -]?(0?11|[2368]\d)[ -]?(\d{4}[ -]?\d{4})$/;

            if (regexTelefonoAR.test(telefonoPersona)) {
                $("#telefonoPersona").css({'border-color': 'green'});
                return pruebaTel = true;
            }
            else{
                $("#errorTlf").html("El formato del telefono es erroneo");
                $("#errorTlf").show();
                $("#telefonoPersona").css({'border-color': 'red'});
                return pruebaTel = false;
            }
        }
    }

    function validaEmail() {
        $("#errorMail").hide();
    
        if (mailPersona.length == 0) {
            $("#errorMail").html("El Email es requerido");
            $("#errorMail").show();
            $("#mailPersona").css({ 'border-color': 'red' })
            return pruebaMail = false;
        } else {
            const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
            // Using test we can check if the text match the pattern
            if (validEmail.test(mailPersona)) {
                $("#mailPersona").css({ 'border-color': 'green' })
                return pruebaMail = true;
            } else {
                $("#errorMail").html("El formato del Email es erroneo");
                $("#errorMail").show();
                $("#mailPersona").css({ 'border-color': 'red' })
                return pruebaMail = false;
            }
        }
    }
    
    if (nombrePersona.length != 0 && apellidoPersona.length != 0 && pruebaMail == true && pruebaTel == true) {
        $("#firstStep").hide();
        $("#secondStep").hide();
        $("#thirdStep").show();

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
                window.location.href = "index.html"
            }
        )
    }
}

function inicio() {
    $("#firstStep").show();
    $("#secondStep").hide();
    $("#thirdStep").hide();
}

document.getElementById("home").onclick = function () {
    location.href = "/index.html";
};
