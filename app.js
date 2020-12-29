console.log("correcto:archivos vinculados");

document.querySelector('#cats-update').addEventListener('click', traerDatos);

function traerDatos() {
    console.log("dentro funcion");

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:1337/progats', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos)
            let respuesta = document.querySelector('#respuesta');
            respuesta.innerHTML = '';

            for (let item of datos) {
                //console.log(item.nombre)
                if (!item.fechaAlta) {
                    respuesta.innerHTML += `
                    <tr>
                        <td>${item.nombre}</td>
                        <td>${item.raza}</td>
                        <td>${parseLocalDate(item.ingresado)}</td>
                    </tr>
                `
                console.log(item.ingresado)
                }

            }
        }
    }

}

function parseLocalDate(stringDate){
    let timestamp = Date.parse(stringDate)
    return new Date(timestamp).toLocaleDateString('es-ES')
}