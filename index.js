

function wizardFirst() {
    let nombreEmpresa =  document.getElementById("nombreEmpresa").value;
    let rubroEmpresa = document.getElementById("rubroEmpresa").value;
    let primerPaso = document.getElementById("firstStep").style.display = "none";
    let tercerPaso = document.getElementById("thirdStep").style.display = "none";

    console.log(nombreEmpresa);
    console.log(rubroEmpresa);
}

function wizardSecond() {
    let nombrePersona =  document.getElementById("nombrePersona").value;
    let apellidoPersona = document.getElementById("apellidoPersona").value;
    let telefonoPersona = document.getElementById("telefonoPersona").value;
    let mailPersona = document.getElementById("mailPersona").value;
    let primerPaso = document.getElementById("firstStep").style.display = "none";
    let segundoPaso = document.getElementById("secondStep").style.display = "none";
    let tercerPaso = document.getElementById("thirdStep").style.display = ""
    console.log(nombrePersona);
    console.log(telefonoPersona);
    console.log(mailPersona);



    document.getElementById("thirdStep").innerHTML = nombreEmpresa

 
}
