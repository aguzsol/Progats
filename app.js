console.log("correcto:archivos vinculados");

document.querySelector('#cats-update').addEventListener('click', traerDatos);

function traerDatos() {
    console.log("dentro funcion");

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/datos-ingresos/gatos.json', true);

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
                if (!item['fecha-alta']) {
                    respuesta.innerHTML += `
                    <tr>
                        <td>${item.nombre}</td>
                        <td>${item.raza}</td>
                        <td>${item.ingresado}</td>
                    </tr>
                `
                }

            }
        }
    }

}