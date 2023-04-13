// Llamo por jquery a todo el documento y escondo el 2do y 3er paso una vez que finalizo la carga

$(document).ready(function(){
    $("#firstStep").show();
    $("#secondStep").hide();
    $("#thirdStep").hide();
})

function wizardFirst() {
    let nombreEmpresa =  document.getElementById("nombreEmpresa").value;
    let rubroEmpresa = document.getElementById("rubroEmpresa").value;
    $("#firstStep").hide();
    $("#secondStep").show();
    $("#thirdStep").hide();

    console.log(nombreEmpresa);
    console.log(rubroEmpresa);
}

function wizardSecond() {
    let nombrePersona =  document.getElementById("nombrePersona").value;
    let apellidoPersona = document.getElementById("apellidoPersona").value;
    let telefonoPersona = document.getElementById("telefonoPersona").value;
    let mailPersona = document.getElementById("mailPersona").value;

    $("#firstStep").hide();
    $("#secondStep").hide();
    $("#thirdStep").show();


    console.log(nombrePersona);
    console.log(apellidoPersona);
    console.log(telefonoPersona);
    console.log(mailPersona);


    // Verificando los campos de la API, la conexion ya funciona y responde en parte
    $.ajax({
        method:"POST",
        url: "https://reqres.in/api/users",
        data: {
            "name": "pepe",
            "job": "caramelos",
            // "nombrePersona" : nombrePersona,
            // "apellidoPersona": apellidoPersona,
            // "telefonoPersona": telefonoPersona,
            // "mailPersona": mailPersona,
    
        }
    }).done()


 
}


// Falta armar en jquery el validador de los campos
// Falta meter los valores de los campos en el HTML segun el paso 3


