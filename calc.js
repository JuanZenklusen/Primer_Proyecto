sumar = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    if (num1 == "" || num2 == "") {
        document.getElementById("res_").innerHTML = "Ingresar"
    } else {
        let res = parseInt(num1) + parseInt(num2);
        document.getElementById("res_").innerHTML = res;
    }
}

restar = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    if (num1 == "" || num2 == "") {
        document.getElementById("res_").innerHTML = "Ingresar"
    } else {
        let res = parseInt(num1) - parseInt(num2);
        document.getElementById("res_").innerHTML = res;
    }
}

dividir = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    if (num1 == "" || num2 == "") {
        document.getElementById("res_").innerHTML = "Ingresar"
    } else {

        if (parseInt(num2) == 0) {
            document.getElementById("res_").innerHTML = "ERROR";
        } else {
            let res = parseInt(num1) / parseInt(num2);
            document.getElementById("res_").innerHTML = res;
        }
    }
}

multiplicar = () => {
    let num1 = document.getElementById("num_1").value;
    let num2 = document.getElementById("num_2").value;
    if (num1 == "" || num2 == "") {
        document.getElementById("res_").innerHTML = "Ingresar"
    } else {
        let res = parseInt(num1) * parseInt(num2);
        document.getElementById("res_").innerHTML = res;
    }
}

formatear = () => {
    document.getElementById("num_1").value = ""
    document.getElementById("num_2").value = ""
    document.getElementById("res_").innerHTML = "";
}