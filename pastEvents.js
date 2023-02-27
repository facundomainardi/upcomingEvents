const rowTarjetas = document.querySelector("#cajas")

let tarjetas = " ";

for (const tarjeta of data.events) {

    if(data.currentDate > tarjeta.date){
    tarjetas += `<div class=" col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3" >
    <div class="card"> 
        <img src="${tarjeta.image}" class="card-img-top" alt="mc-app">
        <div class="card-body">
          <h5 class="card-title">${tarjeta.name}</h5>
          <p class="card-text" >${tarjeta.description}</p>
          <p class="card-text" >${tarjeta.date}</p>
          <p>Price: $${tarjeta.price}</p>
          <a href="details.html" class="btn btn-info" 
              target="_blank" rel="noopener">Details</a>
        </div>
      </div>
</div>`
    

}
}
rowTarjetas.innerHTML = tarjetas