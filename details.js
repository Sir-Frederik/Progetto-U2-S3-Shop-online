window.onload = function () {
  const form = document.getElementById("productForm");
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("appId");
  const container = document.getElementById("product-details");

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
        container.innerHTML = `
            <div class="col-12 col-md-8 col-lg-6">
      <div class="card shadow-sm border-0">
        <img src="${product.imageUrl}" class="card-img-top cover-img rounded-top" alt="Product Image" />
        <div class="card-body">
          <h5 class="card-title text-primary fw-bold">${product.name}</h5>
          <p class="card-text text-muted mb-1">${product.description}</p>
          <p class="card-text mb-1"><strong>Marca:</strong> ${product.brand}</p>
          <p class="card-text fs-5"><strong>Prezzo:</strong> ${product.price}€</p>
          <div class ="button-group"> 
            <a href="#" class="btn btn-warning  btn-sm border border-danger">Aggiungi al carrello</a>
              <a href="./backoffice-modifica.html?appId=${product._id}" class="btn btn-warning btn-sm  border border-danger">Modifica</a>
          <button type="button" id = "delete-btn" class="btn btn-danger btn-sm  border border-danger" onclick="handleDelete(${product._id})">Elimina</button>
          </div>
          <a href="./index.html" class="btn  btn-outline-warning  btn-sm border  mt-3">Torna alla Home</a>
        </div>
      </div>
    </div>
  </div>
</div>
        `;
        // const cardBody = document.querySelector(".card-body");
        const buttonGroup = document.querySelector(".button-group");

        const deleteBtn = document.getElementById("delete-btn");
        deleteBtn.addEventListener("click", () => {
          buttonGroup.innerHTML = "";
          const p = document.createElement("p");
          p.textContent = "Sei Sicuro??";
          p.className = "fw-bold fs-3";
          const buttonYes = document.createElement("button");
          buttonYes.type = "button";
          buttonYes.className = "btn btn-danger   border border-danger";
          buttonYes.textContent = "Sì";
          const buttonNope = document.createElement("button");
          buttonNope.type = "button";
          buttonNope.className = "btn btn-warning  border border-warning m-3";
          buttonNope.textContent = "ANNULLA";

          buttonGroup.appendChild(p);
          buttonGroup.appendChild(buttonYes);
          buttonGroup.appendChild(buttonNope);

          buttonNope.addEventListener("click", () => {
            window.location.reload();
          });
          buttonYes.addEventListener("click", () => {
            handleDelete();
          });
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Errore nel caricamento dei dati del prodotto.");
      });
  }
};
