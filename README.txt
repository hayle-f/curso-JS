// 1. Datos del flujo de caja
const flujoDeCaja = [
    { mes: "Enero", ingreso: 1500, egreso: 1500 },
    { mes: "Febrero", ingreso: 2500, egreso: 2500 },
    { mes: "Marzo", ingreso: 84683, egreso: 1155 },
    { mes: "Abril", ingreso: 135353, egreso: 1533 },
    { mes: "Mayo", ingreso: 1535, egreso: 5434 },
    { mes: "Junio", ingreso: 4343354, egreso: 5434543 },
    { mes: "Julio", ingreso: 435453, egreso: 4543 },
    { mes: "Agosto", ingreso: 78351, egreso: 7816 },
    { mes: "Septiembre", ingreso: 1878, egreso: 95634 },
    { mes: "Octubre", ingreso: 48483, egreso: 9433 },
    { mes: "Noviembre", ingreso: 35483, egreso: 53133 },
    { mes: "Diciembre", ingreso: 3843, egreso: 348133 }
];

// 2. Función para generar la tabla HTML sin balance
function generarTabla(flujoDeCaja) {
    let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Mes</th>
                    <th>Ingreso</th>
                    <th>Egreso</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Recorremos el array para agregar las filas a la tabla
    flujoDeCaja.forEach((registro) => {
        tabla += `
            <tr>
                <td>${registro.mes}</td>
                <td>$${registro.ingreso.toLocaleString()}</td>
                <td>$${registro.egreso.toLocaleString()}</td>
            </tr>
        `;
    });

    tabla += `
            </tbody>
        </table>
    `;

    // Insertamos la tabla generada en el DOM
    document.getElementById("tabla-flujo").innerHTML = tabla;
}

// 3. Función para calcular y mostrar el balance total
function mostrarBalance(flujoDeCaja) {
    let totalIngresos = 0;
    let totalEgresos = 0;

    flujoDeCaja.forEach(mes => {
        totalIngresos += mes.ingreso;
        totalEgresos += mes.egreso;
    });

    const balance = totalIngresos - totalEgresos;
    let mensajeBalance = "";

    if (balance > 0) {
        mensajeBalance = `Total de Ingresos: $${totalIngresos.toLocaleString()}<br>
                          Total de Egresos: $${totalEgresos.toLocaleString()}<br>
                          Balance anual: $${balance.toLocaleString()}<br>
                          <strong>La empresa tuvo Ganancias</strong>`;
    } else if (balance < 0) {
        mensajeBalance = `Total de Ingresos: $${totalIngresos.toLocaleString()}<br>
                          Total de Egresos: $${totalEgresos.toLocaleString()}<br>
                          Balance anual: $${balance.toLocaleString()}<br>
                          <strong>La empresa tuvo Pérdidas</strong>`;
    } else {
        mensajeBalance = `Total de Ingresos: $${totalIngresos.toLocaleString()}<br>
                          Total de Egresos: $${totalEgresos.toLocaleString()}<br>
                          Balance anual: $${balance.toLocaleString()}<br>
                          <strong>La empresa no tuvo Ganancias ni Pérdidas</strong>`;
    }

    // Mostrar el balance en el DOM
    document.getElementById("balance-flujo").innerHTML = mensajeBalance;
}

// 4. Función inicializadora
function inicializarApp() {
    generarTabla(flujoDeCaja); // Mostrar la tabla con los datos
    mostrarBalance(flujoDeCaja); // Calcular y mostrar el balance anual
}

// 5. Llamada a la función inicializadora cuando el documento está cargado
window.onload = inicializarApp;
