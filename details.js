let params = new URLSearchParams(document.location.search)
let id = params.get("id")
//console.log(id)
let cardSelected = data.events.filter(tarjeta => tarjeta._id == id);

const rowTarjetas = document.querySelector("#description")

let tarjetas = " ";



   
    tarjetas += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-6">
        <img src="${cardSelected[0].image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">${cardSelected[0].name}</h5>
          <p class="card-text">${cardSelected[0].description}</p>
          <p class="card-text">Date: ${cardSelected[0].date}</p>
          <p class="card-text">Place: ${cardSelected[0].place}</p>
          <p class="card-text">Category: ${cardSelected[0].category}</p>
          <p class="card-text">Capacity: ${cardSelected[0].capacity}</p>
        
         
        </div>
      </div>
    </div>
  </div>`


rowTarjetas.innerHTML = tarjetas