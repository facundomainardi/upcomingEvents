
const rowTarjetas = document.querySelector("#cajas")
const rowCategorias = document.querySelector("#categorias")
let campoBus = document.getElementById('buscador');
let categoriasFiltradas = [];
var contador = 0;  
let checked = []
let arrayCategorias = []
let tarjetas = " "
let categorias = " "
let eventosTraidos= []
traerDatos()
//dibujarTarjetas(data.events);
limpiarTarjetas()

function traerDatos(){
  // fetch('./data.json') 
 fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(datosApi =>{
     // console.log(datosApi)
      eventosTraidos = datosApi.events
     // console.log(eventosTraidos)
     dibujarTarjetas(eventosTraidos)

     eventosTraidos.forEach((tarjeta) => {
      if (!arrayCategorias.includes(tarjeta.category)) {
        arrayCategorias.push(tarjeta.category);
    }})

    arrayCategorias.forEach((categoria) =>{
      categorias +=     `<label>
      <input type="checkbox" name="categorys" value="${categoria}" id="${categoria}" 
      class="sonCheck" onClick=dataFilter()>
      ${categoria}
      </label>`
    })
    rowCategorias.innerHTML = categorias
  })
  .catch(error => console.log(error.message))
}


// arrayCategorias.forEach((categoria) =>{
//   categorias +=     `<label>
//   <input type="checkbox" name="categorys" value="${categoria}" id="${categoria}" 
//   class="sonCheck" onClick=dataFilter()>
//   ${categoria}
//   </label>`
// })

function dataFilter(){
  let chekboxesChecked = Array.from(document.querySelectorAll(`.sonCheck:checked`) ).map(elemento => elemento.value)
  eventosFiltrados = eventosTraidos.filter( tarjeta =>{
    return (tarjeta.name.toLowerCase().includes(buscador.value.toLowerCase()) || 
            tarjeta.description.toLowerCase().includes(buscador.value.toLowerCase())
           )
        && (  chekboxesChecked.length === 0 || 
              chekboxesChecked.includes(tarjeta.category ) )             }     
  )
  if(eventosFiltrados.length == 0 && buscador.value.length !==0 ){
    window.alert("NO SE ENCONTRARON COINCIDENCIAS");
  }else{
    
    limpiarTarjetas()
    dibujarTarjetas(eventosFiltrados)
  }
 
}






// function recorrerCategorias(){
 
//   let checks = Array.from(document.querySelectorAll(`.sonCheck:checked`) ).map(each => each.value)


// eventosFiltrados = data.events.filter((tarjeta) => checks.includes(tarjeta.category))
// if(eventosFiltrados.length>0){
//   limpiarTarjetas()
//   dibujarTarjetas(eventosFiltrados)
// }else{
//   limpiarTarjetas()
//   dibujarTarjetas(data.events)
// }



// }





function dibujarTarjetas(arrayActual){
 
arrayActual.forEach((tarjeta) => {
 
  tarjetas += `<div class=" col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3" >
  <div class="card"> 
      <img src="${tarjeta.image}" class="card-img-top" alt="mc-app">
      <div class="card-body">
        <h5 class="card-title">${tarjeta.name}</h5>
        <p class="card-text" >${tarjeta.description}</p>
        <p class="card-text" >${tarjeta.date}</p>
        <p>Price: $${tarjeta.price}</p>
        <a href="details.html" class="btn btn-info" 
        target="_blank" rel="noopener" onclick="seeDetail('${tarjeta._id}')" >Details</a>
      </div>
    </div>
</div>` ;
})
rowTarjetas.innerHTML = tarjetas

}


function limpiarTarjetas(){
  tarjetas = " ";;
}


// ///////////////BUSCADOR
// //campoBus.addEventListener("change", ()=>{
//   function buscarPalabras(){
//   let eventosBuscados = data.events.filter((tarjeta) => tarjeta.name.toLowerCase().includes(buscador.value.toLowerCase()) || 
//   tarjeta.description.toLowerCase().includes(buscador.value.toLowerCase()))
//   if(eventosBuscados.length === 0){ 
//     limpiarTarjetas()
//     dibujarTarjetas(data.events);
    
//     window.alert("NO SE ENCONTRARON COINCIDENCIAS");
//   }else if ( buscador.value.trim().length === 0){
//     limpiarTarjetas()
//     dibujarTarjetas(data.events);
    
//   }else{
//     limpiarTarjetas()
//     dibujarTarjetas(eventosBuscados)
   
//   }
  
//   }
  
//}
  //)

  ////////DETAILS
function seeDetail(id) {
  window.location.href = `./details.html?id=${id}`

}












