window.onload = function () {
  const form = document.getElementById("productForm");
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("appId");
  console.log("Product ID:", productId);

  if (productId) {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTJmMDFjMjUwNDAwMTUxYWI2YjciLCJpYXQiOjE3NDYxNzg4MDEsImV4cCI6MTc0NzM4ODQwMX0.BiTk1JQfqU_xliYrcsdyhwTdzwT2lgnuhSmT4Og83Rc",
      },
    })
      .then((resp) => {
        console.log("Response:", resp);
        if (!resp.ok) {
          throw new Error("Errore nel recupero del prodotto");
        }
        return resp.json();
      })
      .then((product) => {
        const productDetailsContainer = document.getElementById("product-details");
        productDetailsContainer.innerHTML = `
            <div class="col-12 col-md-8 col-lg-6">
      <div class="card shadow-sm border-0">
        <img src="${product.imageUrl}" class="card-img-top cover-img rounded-top" alt="Product Image" />
        <div class="card-body">
          <h5 class="card-title text-primary fw-bold">${product.name}</h5>
          <p class="card-text text-muted mb-1">${product.description}</p>
          <p class="card-text mb-1"><strong>Marca:</strong> ${product.brand}</p>
          <p class="card-text fs-5"><strong>Prezzo:</strong> ${product.price}€</p>
            <a href="#" class="btn btn-warning  btn-sm border border-danger">Aggiungi al carrello</a>
              <a href="./backoffice-modifica.html?appId=${product._id}" class="btn btn-warning btn-sm  border border-danger">Modifica</a>
              <button type="button"  class="btn btn-danger btn-sm  border border-danger" onclick="handleDelete(${product._id})">Elimina</button>
        </div>
      </div>
    </div>
  </div>
</div>
        `;
      })
      .catch((error) => {
        console.error(error);
        alert("Errore nel caricamento dei dati del prodotto.");
      });
  }
};

const handleDelete = function () {};
