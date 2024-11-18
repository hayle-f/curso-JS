
// ! -------- Proyecto integrador modulo 1 ---------
/*      
 const costoBaseMt2 = 1.16;
const fm = 1.041;

let totalMt2 = prompt("Ingrese el total de MT2 de la propiedad que desea cotizar:")

const poliza = costoBaseMt2 * totalMt2 *fm

alert(`El monto de la poliza es: $${poliza}`) */


// ! ----------- Proyecto integrador modulo 2 ---------

/*
const costoBaseMt2 = 1.16;
let tipoPropiedad = "";
let fm = prompt("Ingrese el NUMERO del tipo de propiedad: 1) Casa 2) P.H. 3) Dto. Edificio 4) Barrio Privado 5) Oficina 6) Local comercial 7) Depósito logística")

console.log(fm)
    
let totalMt2 = prompt("Ingrese el total de MT2 de la propiedad que desea cotizar:")

console.log(totalMt2)

switch(fm) {
    case "1":
        fm = 1.009;
        tipoPropiedad = "Casa"
        break;
    case "2":
        fm = 1.005;
        tipoPropiedad = "P.H."
        break;
    case "3":
        fm = 1.002;
        tipoPropiedad = "Dto. Edificio"
        break;
    case "4":
        fm = 1.019;
        tipoPropiedad = "Barrio Privado"
        break;
    case "5":
         fm = 1.039;
        tipoPropiedad = "Oficina"
        break;
    case "6":
        fm = 1.041;
        tipoPropiedad = "Local comercial"
        break;
    case "7":
        fm = 1.092;
        tipoPropiedad = "Depósito logística"
        break;
    default:  
        console.error("El dato ingresado es incorrecto.")
        fm = null;
        tipoPropiedad = null;
}

console.log(fm)
console.log(tipoPropiedad)



if (fm > 1.000 && parseInt(totalMt2)) {
    let poliza = costoBaseMt2 * totalMt2 * fm
    console.log(`El monto de la poliza de un/a ${tipoPropiedad}, con ${totalMt2} mts2 es: $${poliza}`)
}else {
    console.warn("Hay datos mal ingresados")
} */
    


// ! ----------- Proyecto integrador modulo 3 ---------

/* let valUbicacion
let fmPropiedad
const costoBaseMt2 = 1.16;
 
let totalMt2 = prompt("Ingrese el total de MT2 de la propiedad que desea cotizar:")
console.log(totalMt2)

//TIPO DE PROPIEDAD
let tipoProp = prompt("Ingrese tipo de propiedad: 1) Casa 2) P.H. 3) Dto. Edificio 4) Barrio Privado 5) Oficina 6) Local comercial 7) Depósito logística")
   if (tipoProp !== "") {
    for (propiedad of datosPropiedad) {
        if(propiedad.tipo === tipoProp) {
            fmPropiedad = propiedad
            break;
        }
    }
   } 

// console.log(tipoProp)
// console.log(fmPropiedad)
    
// UBICACION
let tipoUbi = prompt("Ingrese la Ubicacion: 1) CABA 2) Tandil 3) Costa Atlántica 4) Patagonia Argentina")
   if (tipoUbi !== "") {
    for (ubicacion of datosUbicacion) {
        if(ubicacion.tipo === tipoUbi) {
            valUbicacion = ubicacion
            break;
        }
    }
   } 

   // console.log(tipoUbi)
   // console.log(valUbicacion)

if (fmPropiedad && valUbicacion && parseInt(totalMt2) ) {
   
    let poliza = fmPropiedad.fm * valUbicacion.valor * totalMt2 * costoBaseMt2
    console.log (console.log(`El monto de la poliza de un/a ${fmPropiedad.tipo}, en ${valUbicacion.tipo}, con ${totalMt2} mts2 es de: $${poliza}`))
} else {
    console.warn("Hay datos mal ingresados")
}
 */


// ! ----------- Proyecto integrador modulo 4 ---------

const selectPropiedad = document.getElementById("propiedad")
const selectUbicacion = document.getElementById("ubicacion")
const btnCotizar = document.querySelector("button.button.button-outline")
const costoBaseMt2 = 1.16;
const divPrincipal = document.querySelector("div.div-quote")

let totalMt2 = document.getElementById("metros2")
let fmPropiedad, fmUbicacion;


//cargar datos propiedad
function cargarPropiedades(datosPropiedad) {
    let opcionPropiedad = '<option value=""></option>'
    for (let propiedad of datosPropiedad) {
        opcionPropiedad += `<option>${propiedad.tipo}</option>`
    }
    selectPropiedad.innerHTML = opcionPropiedad
}

//cargar datos ubicacion
function cargarUbicaciones(datosUbicacion) {
    let opcionUbicacion = '<option value=""></option>'
    for (let ubicacion of datosUbicacion) {
        opcionUbicacion += `<option>${ubicacion.tipo}</option>`
    }
    selectUbicacion.innerHTML = opcionUbicacion
}

cargarPropiedades(datosPropiedad)
cargarUbicaciones(datosUbicacion)


//Obtener fmPropiedad
function obtenerFmPropiedad () {
if (selectPropiedad !== "") {
    for (propiedad of datosPropiedad) {
        if(propiedad.tipo === selectPropiedad.value) {
            fmPropiedad = propiedad
            break;
        }
    }
   } 
}
 

// UBICACION
function obtenerFmUbicacion () {
   if (selectUbicacion !== "") {
    for (ubicacion of datosUbicacion) {
        if(ubicacion.tipo === selectUbicacion.value) {
            fmUbicacion = ubicacion
            break;
        }
     }
    } 
}


//funcion cotizar

function cotizar() {
    
    obtenerFmPropiedad()
    obtenerFmUbicacion()
    console.log(fmPropiedad)
    console.log(fmUbicacion)
    console.log(totalMt2.value)
    

    let metrosCuad = parseFloat(totalMt2.value)

   
        if (fmPropiedad && fmUbicacion && !isNaN(metrosCuad) && metrosCuad > 20 && metrosCuad <= 500) {
            divPrincipal.classList.add("div-blocked")
            btnCotizar.innerHTML = '<img src="/public/animation.gif">'
            setTimeout(() => {                  
            let poliza = parseFloat((fmPropiedad.fm * fmUbicacion.valor * metrosCuad * costoBaseMt2).toFixed(2))
            console.log(poliza)
            let mensaje = `El monto de la poliza de un/a ${fmPropiedad.tipo}, en ${fmUbicacion.tipo}, con ${metrosCuad} mts2 es de: <span>$${poliza}/m\u00B2</span>`
            document.getElementById("valorPoliza").innerHTML = mensaje
            console.log(mensaje)
            divPrincipal.classList.remove("div-blocked")
            btnCotizar.textContent = 'cotizar'
            }, 2000)
        } else {
            let error = "Por favor, verifica que todos los campos estén correctamente completados"
            document.getElementById("valorPoliza").innerHTML = error
            console.log(error)
        }
        
}

btnCotizar.addEventListener('click', cotizar)