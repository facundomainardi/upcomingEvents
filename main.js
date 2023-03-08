let numeros = [1, 2, 3, 4]


let frutas = ["Pera", "manzana", "sandia"]

let apellidos = ["Leiva", "Cuenca", "Sosa", "Romano"]

let personas = [ {nombre: "Ema"},{nombre: "Brian"},{nombre: "Franco"},{nombre: "Flor"} ]


//forEach

let numerosForEach = numeros.forEach((numero)=>{
    console.log(numero)
})

//filter

let apellidosFiltrados = apellidos.filter((apellido)=> apellido.toLowerCase().includes("l"))

console.log(apellidosFiltrados);


//map

let nombres = personas.map((persona)=>{
    let nacion = "ARG"
    return persona.nombre + " " + nacion
    })
console.log(nombres);


//some

let hayUnaPera = frutas.some((fruta)=> fruta == "Pera")

//find

let frutaEncontrada = frutas.find((fruta)=> fruta == "Pera")

console.log(frutaEncontrada);


//reduce 

let arrayYaExistente = "Melon"

let arrayCompleto = frutas.reduce((acumulador, frutaActual )=> {



   return acumulador + " " +frutaActual


   
}, arrayYaExistente ) 

console.log(arrayCompleto);





