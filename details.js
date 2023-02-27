const rowTarjetas = document.querySelector("#description")

let tarjetas = " ";

for (const tarjeta of data.events) {

   
    tarjetas += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-6">
        <img src="${tarjeta.image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">${tarjeta.name}</h5>
          <p class="card-text">${tarjeta.description}</p>
          <p class="card-text">Date: ${tarjeta.date}</p>
          <p class="card-text">Place: ${tarjeta.place}</p>
          <p class="card-text">Category: ${tarjeta.category}</p>
          <p class="card-text">Capacity: ${tarjeta.capacity}</p>
        
         
        </div>
      </div>
    </div>
  </div>`
}

rowTarjetas.innerHTML = tarjetas