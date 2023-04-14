
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

    if (nombreEmpresa.length <= 0 || nombreEmpresa == null) {
        $("#errorNombre").text("Este campo es requerido");
        $("#errorNombre").show();

    }
    if (rubroEmpresa.length <= 0) {
        $("#errorRubro").text("Este campo es requerido");
        $("#errorRubro").show();
    }
    else{
        $("#firstStep").hide();
        $("#secondStep").show();
        $("#thirdStep").hide();

        console.log(nombreEmpresa);
        console.log(rubroEmpresa);
    }
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

    $("#nombreEmpresaOut").html(nombreEmpresa);
    $("#rubroEmpresaOut").html(rubroEmpresa);
    $("#nombrePersonaOut").html(nombrePersona);
    $("#apellidoPersonaOut").html(apellidoPersona);
    $("#telefonoPersonaOut").html(telefonoPersona);
    $("#mailPersonaOut").html(mailPersona);

  

    // Verificando los campos de la API, la conexion ya funciona y responde en parte
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
        console.log(msj)

        }


    )

    // $.ajax({
    //     method:"POST",
    //     url: "https://reqres.in/api/login",
    //     data: {

    //     "email": "mail",
    //     "password": "Clave",
    //     }
    // }).done()

}


function inicio() {
    $("#firstStep").show();
    $("#secondStep").hide();
    $("#thirdStep").hide();
}