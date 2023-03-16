let arrayCategorias = [];
let eventosFiltrados = [];
let arrayPorcentajes = [];
let categorias = " ";
let categoriasPasadas = " ";
let tarjetas = " ";
let eventosTraidos = []
let eventosFuturos = []
let eventosPasados = []
let tabalaxPorcentajes = []
let tablaxCapacity = []
let dateEvents
const tablaDinamic = document.querySelector("#tablaDinamicFutura")
const tablaDinamicPasada = document.querySelector("#tablaDinamicPasada")
const tablaDinamicCabecera = document.querySelector("#tableDinamicCabecera")
let sumaxcategoriaFuturas
let porcentajexcategoriaFuturas
let sumaEstimateFutura
let sumaAssistence
let arrayCargaTablaFuturas = []
let arrayCargaTablaPasadas = []
let sumaCapacityFutura
let categoriaactual = "categoria.category"
function traerDatos() {
  // fetch('./data.json') 
  fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(datosApi => {

      dateEvents = datosApi.currentDate
      eventosTraidos = datosApi.events

      eventosFuturos = eventosTraidos.filter(tarjeta => tarjeta.date > dateEvents)
      eventosPasados = eventosTraidos.filter(tarjeta => tarjeta.date < dateEvents)
      let eventosPasadosOrdenados = eventosPasados.sort(((a, b) => a.category.localeCompare(b.category)));
      let eventosFuturosOrdenados = eventosFuturos.sort(((a, b) => a.category.localeCompare(b.category)));


      eventosFuturosOrdenados.forEach((categoria) => {

        categoriaactual = categoria.category
        sumaxcategoriaFuturas = 0
        sumaEstimateFutura = 0

        sumaAssistence = 0
        sumaCapacityFutura = 0
        let eventosFuturosOrdenadosAgrupados = eventosFuturosOrdenados.filter(tarjeta => tarjeta.category == categoriaactual)

        eventosFuturosOrdenadosAgrupados.forEach((eve) => {

          sumaxcategoriaFuturas = sumaxcategoriaFuturas + (eve.estimate * eve.price)

          sumaEstimateFutura = sumaEstimateFutura + eve.estimate

          sumaCapacityFutura = sumaCapacityFutura + eve.capacity


        })

        arrayPorcentajes.push({"porcentaje" : (sumaEstimateFutura * 100) / sumaCapacityFutura,
        "categoria" : categoria.category, "capacity": categoria.capacity, "name": categoria.name})
        if (!arrayCargaTablaFuturas.includes(categoria.category)) {
          arrayCargaTablaFuturas.push(categoria.category);
          
          


          categorias += `
          <tr>
            <td>${categoria.category}</td>
            <td>${sumaxcategoriaFuturas}</td>
            <td>${((sumaEstimateFutura * 100) / sumaCapacityFutura).toFixed(2)} %</td>            
          </tr>`
        }
      })

      tablaDinamic.innerHTML = categorias


      //////eventosPasados

      let sumaxcategoria
      let sumaxcategoriaPasada
      let sumaAssistencePasada
      let sumaCapacityPasada
      eventosPasadosOrdenados.forEach((categoria) => {
        sumaxcategoria = 0
        sumaAssistencePasada = 0
        sumaxcategoriaPasada = 0
        sumaCapacityPasada = 0
        categoriaactual = categoria.category

        let eventosPasadosOrdenadosAgrupados = eventosPasadosOrdenados.filter(tarjeta => tarjeta.category == categoriaactual)

        eventosPasadosOrdenadosAgrupados.forEach((eve) => {
          sumaxcategoria = sumaxcategoria + (eve.assistance * eve.price)
          sumaAssistencePasada = sumaAssistencePasada + eve.assistance
          sumaCapacityPasada = sumaCapacityPasada + eve.capacity
        })
        arrayPorcentajes.push({"porcentaje" : (sumaAssistencePasada * 100) / sumaCapacityPasada,
        "categoria" : categoria.category, "capacity": categoria.capacity, "name": categoria.name})

        if (!arrayCargaTablaPasadas.includes(categoria.category)) {
          arrayCargaTablaPasadas.push(categoria.category);
          
          categoriasPasadas += `
        <tr>
          <td>${categoria.category}</td>
          <td>${sumaxcategoria}</td>
          <td>${((sumaAssistencePasada * 100) / sumaCapacityPasada).toFixed(2)} %</td>         
       </tr>`
        }
      })

      tablaDinamicPasada.innerHTML = categoriasPasadas


      tabalaxPorcentajes = arrayPorcentajes.sort(((a, b) => a.porcentaje - b.porcentaje));
      let menorPorcentaje = tabalaxPorcentajes[0].name
      let mayorPorcentaje = tabalaxPorcentajes[tabalaxPorcentajes.length - 1].name
      console.table(tabalaxPorcentajes)
     tablaxCapacity = arrayPorcentajes.sort(((a, b) => a.capacity - b.capacity));
     let mayorCapacidad = tablaxCapacity[tablaxCapacity.length -1].name
      console.table(tablaxCapacity)
      

      tablaDinamicCabecera.innerHTML=  `
      <tr>
        <td>${mayorPorcentaje}</td>
        <td>${menorPorcentaje}</td>
        <td>${mayorCapacidad}</td>            
      </tr>`


    })
    .catch(error => console.log(error.message))
}




traerDatos()
