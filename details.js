let params = new URLSearchParams(document.location.search)
let id = params.get("id")

traerDatos()


function traerDatos() {
  // fetch('./data.json') 
  fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(datosApi => {
     // console.log(datosApi)
      dateEvents = datosApi.currentDate
      eventosTraidos = datosApi.events
     
   


//console.log(id)
let cardSelected = eventosTraidos.filter(tarjeta => tarjeta._id == id);

const rowTarjetas = document.querySelector("#description")

let tarjetas = " ";   
    tarjetas += `<div class="card mb-6" style="max-width: auto;">
    <div class="row g-0">
      <div class="col-md-6">
        <img src="${cardSelected[0].image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">${cardSelected[0].name}</h5>
          <p class="card-text">${cardSelected[0].description}</p>
          <p class="card-text">Date: ${cardSelected[0].date}</p>
          <p class="card-text">Price: $ ${cardSelected[0].price}</p>
          <p class="card-text">Place: ${cardSelected[0].place}</p>         
          <p class="card-text">Category: ${cardSelected[0].category}</p>
          <p class="card-text">Assistance: ${cardSelected[0].assistance}</p>
          <p class="card-text">Capacity: ${cardSelected[0].capacity}</p>
        
         
        </div>
      </div>
    </div>
  </div>`


rowTarjetas.innerHTML = tarjetas
})
.catch(error => console.log(error.message))
}