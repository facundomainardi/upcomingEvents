const rowTarjetas = document.querySelector("#cajas")
const rowCategorias = document.querySelector("#categorias")
let arrayCategorias = [];
let eventosTraidos = [];
let eventosPasados = [];
let categorias = " ";
let dateEvents
let tarjetas = " ";


traerDatos()

limpiarTarjetas()

function traerDatos(){
  // fetch('./data.json') 
 fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(datosApi =>{
     // console.log(datosApi)
      dateEvents = datosApi.currentDate
      eventosTraidos = datosApi.events
     // console.log(eventosTraidos)
      eventosPasados = eventosTraidos.filter(tarjeta => tarjeta.date < dateEvents)
      dibujarTarjetas(eventosPasados)

      eventosPasados.forEach((tarjeta) => {
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
  

 
  
  function dataFilter(){
    let chekboxesChecked = Array.from(document.querySelectorAll(`.sonCheck:checked`) ).map(elemento => elemento.value)
    eventosFiltrados = eventosPasados.filter( tarjeta =>{
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
  
  //  function recorrerCategorias(){
   
  //   let chekboxesChecked = Array.from(document.querySelectorAll(`.sonCheck:checked`) ).map(elemento => elemento.value)
  
  
  // eventosFiltrados = eventosPasados.filter((tarjeta) => chekboxesChecked.includes(tarjeta.category))
  // if(eventosFiltrados.length>0){
  //   limpiarTarjetas()
  //   dibujarTarjetas(eventosFiltrados)
  // }else{
  //   limpiarTarjetas()
  //   dibujarTarjetas(eventosPasados)
  // }
  
  
  
  // }

rowCategorias.innerHTML = categorias
rowTarjetas.innerHTML = tarjetas

// function buscarPalabras(){
//   let eventosBuscados = eventosPasados.filter((tarjeta) => tarjeta.name.toLowerCase().includes(buscador.value.toLowerCase()) || 
//   tarjeta.description.toLowerCase().includes(buscador.value.toLowerCase()))
//   if(eventosBuscados.length === 0){ 
//     limpiarTarjetas()
//     dibujarTarjetas(eventosPasados);
    
//     window.alert("NO SE ENCONTRARON COINCIDENCIAS");
//   }else if ( buscador.value.trim().length === 0){
//     limpiarTarjetas()
//     dibujarTarjetas(eventosPasados);
    
//   }else{
//     limpiarTarjetas()
//     dibujarTarjetas(eventosBuscados)
   
//   }
  
//   }


  function seeDetail(id) {
    window.location.href = `./details.html?id=${id}`
  }