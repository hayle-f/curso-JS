// ? ---------- Desafio modulo 1 -----------------------
            // ? EJERCICIO 1 ------

/* let costosFijos = prompt("Ingrese el valor de los Costos Fijos:")
let costosVariables = prompt("Ingrese el valor de los Costos Variables:")
let precioVenta = prompt("Ingrese el valor del Precio de Venta:")

calculoPtoEquil = () => {
    ptoEquil = costosFijos / (precioVenta - costosVariables)
    alert(`El punto de Equilibrio es de : ${ptoEquil} unidades.`)
}

calculoPtoEquil(); */


            // ? EJERCICIO 2 ------

/* let ingresosTotales = prompt("Ingrese el monto de sus Ingresos Totales: ")

calcularMontos = () => {
    let gastosNecesarios = ingresosTotales * 0.5
    let gastosOpcionales = ingresosTotales * 0.3
    let ahorroInversión = ingresosTotales * 0.2
    alert(`Con un ingreso total de $${ingresosTotales}, los montos a destinar son: \n Gastos necesarios: $${gastosNecesarios} \n Gastos opcionales: $${gastosOpcionales} \n Ahorro e Inversion: $${ahorroInversión}.`)

}

calcularMontos() */


// ? ---------- Desafio modulo 2 -----------------------
            // ? EJERCICIO 1 ------

/* let edad = prompt("Ingrese su edad: ")

if (edad >= 18) {
    console.log("Bienvenido/a !")
} else {
    console.error("No eres mayor de edad.");    
} */

            // ? EJERCICIO 2 ------

/* let usuario = prompt("Ingrese su nombre de usuario: ")
let contraseña = prompt("Ingrese su contraseña: ")

if (usuario === "admin" &&  contraseña === "1234") {
    console.log(`bienvenido ${usuario}`)
} else {
    console.error("Error en los datos.")
} */


// ? ---------- Desafio modulo 3 y 4 -----------------------
            // ? EJERCICIO 1 ------

//Datos del flujo de caja
 const flujoDeCaja = [
    {mes: "Enero", ingreso: 1500, egreso: 1500},
    {mes: "Febrero", ingreso: 2500, egreso: 2500},
    {mes: "Marzo", ingreso: 84683, egreso: 1155},
    {mes: "Abril", ingreso: 135353, egreso: 1533},
    {mes: "Mayo", ingreso: 1535, egreso: 5434},
    {mes: "Junio", ingreso: 4343354, egreso: 434543},
    {mes: "Julio", ingreso: 435453, egreso: 4543},
    {mes: "Agosto", ingreso: 78351, egreso: 7816},
    {mes: "Septiembre", ingreso: 1878, egreso: 95634},
    {mes: "Octubre", ingreso: 48483, egreso: 9433},
    {mes: "Noviembre", ingreso: 35483, egreso: 53133},
    {mes: "Diciembre", ingreso: 3843, egreso: 348133}
]     

//funcion para generar tabla en html
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
    flujoDeCaja.forEach((fila) => {
        tabla += `
            <tr>
                <td>${fila.mes}</td>
                <td>$${fila.ingreso.toLocaleString()}</td>
                <td>$${fila.egreso.toLocaleString()}</td>
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

// funcion para calcular balance total y crear mensaje
function calcularBalance(flujoDeCaja) {
let totalIngresos = 0
let totalEgresos = 0

flujoDeCaja.forEach(mes => {
    totalIngresos += mes.ingreso;
    totalEgresos += mes.egreso;
})

const balance = totalIngresos - totalEgresos
let mensajeBalance = `<p>Total de Ingresos: $${totalIngresos.toLocaleString()}</p>
                        <p>Total de Egresos: $${totalEgresos.toLocaleString()}</p>
                        <p>Balance anual: $${balance.toLocaleString()}</p>`;

if (balance > 0) {
    mensajeBalance = `${mensajeBalance}
                        <p class="positive">La empresa tuvo <strong>Ganancias</strong></p>`;
} else if (balance < 0) {
    mensajeBalance = `${mensajeBalance}
                        <p class="negative">La empresa tuvo <strong>Pérdidas</strong></p>`;
} else {
    mensajeBalance = `${mensajeBalance}
                        <p>La empresa no tuvo <strong>Ganancias ni Pérdidas<strong></p>`;    
}

 // Mostrar balance en el DOM
document.getElementById("balance-flujo").innerHTML = mensajeBalance;
}

//funcion inicializadora
function inicializarApp () {
    generarTabla(flujoDeCaja);
    calcularBalance(flujoDeCaja);
}

//cargar el doc
window.onload = inicializarApp


                      // ? EJERCICIO 2 ------
                      
const creditos = [
    { Plan: "001", capital: 150000, dias: 30, tasa: 15 },
    { Plan: "002", capital: 300000, dias: 180, tasa: 10 },
    { Plan: "003", capital: 485000, dias: 60, tasa: 23 }
]

// calcular el Interes
let creditosEInteres = creditos.map(credito => {
    let interes = (credito.capital * credito.dias * credito.tasa) / 100
    return {...credito, interes}
})
 

//Funcion Generar tabla

function hacerTabla(creditosEInteres) {
    let tablaInteres =  `
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Capital</th>
                            <th>Dias</th>
                            <th>Tasa</th>
                            <th>Interes</th>
                        </tr>
                    </thead>
                    <tbody>    
        `;

        creditosEInteres.forEach(row => {
            tablaInteres += `
                    <tr>
                        <td>${row.Plan}</td>
                        <td>$${row.capital.toLocaleString()}</td>
                        <td>${row.dias}</td>
                        <td>${row.tasa} %</td>
                        <td>$${row.interes.toLocaleString()}</td>
                    </tr>    
                `;
        });

    tablaInteres += `
            </tbody>
            </table>
        `;

    //insertar tabla en HTML
    document.getElementById("tabla-interes").innerHTML = tablaInteres

}


hacerTabla(creditosEInteres);


// ? ---------- Desafio modulo 5 -----------------------
            // ? EJERCICIO 1 ------
 

//definir variables por los id
const costosFijos = document.getElementById('costos-fijos')
const costosVariables = document.getElementById('costos-var')
const precioVenta = document.getElementById('pcio-venta')
const total = document.getElementById('total-pto-eq')
const botonCalcular = document.getElementById('calcular')



//funcion calcular pto eq y dar mensaje
function calcularPtoEquilibrio () {
    const costosFijosValue = parseFloat(costosFijos.value)
    const costosVariablesValue = parseFloat(costosVariables.value)
    const precioVentaValue = parseFloat(precioVenta.value)

   
    if (costosFijosValue && costosVariablesValue && precioVentaValue ) {
        const ptoEquil = Math.ceil(costosFijosValue / (precioVentaValue - costosVariablesValue))
         if (ptoEquil >= 1) {
            total.innerText = `El punto de Equilibrio es de:\n${ptoEquil} unidades.`
         } else {
            total.innerText = "Los valores ingresados no son correctos para este calculo"
         }
    } else {
        total.innerText = "Asegurese que los valores ingresados sean correctos."
    }
    
}

botonCalcular.addEventListener('click', calcularPtoEquilibrio)

