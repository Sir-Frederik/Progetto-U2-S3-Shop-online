window.onload = function () {
  const form = document.getElementById("productForm");
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("appId");

  if (productId) {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTJmMDFjMjUwNDAwMTUxYWI2YjciLCJpYXQiOjE3NDYxNzg4MDEsImV4cCI6MTc0NzM4ODQwMX0.BiTk1JQfqU_xliYrcsdyhwTdzwT2lgnuhSmT4Og83Rc",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Errore nel recupero del prodotto");
        }
        return resp.json();
      })
      .then((product) => {
        document.getElementById("name").value = product.name;
        document.getElementById("description").value = product.description;
        document.getElementById("brand").value = product.brand;
        document.getElementById("imageUrl").value = product.imageUrl;
        document.getElementById("price").value = product.price;
      })
      .catch((error) => {
        console.error(error);
        alert("Errore nel caricamento dei dati del prodotto.");
      });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const productData = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      brand: document.getElementById("brand").value,
      imageUrl: document.getElementById("imageUrl").value,
      price: document.getElementById("price").value,
    };

    if (productId) {
      fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTJmMDFjMjUwNDAwMTUxYWI2YjciLCJpYXQiOjE3NDYxNzg4MDEsImV4cCI6MTc0NzM4ODQwMX0.BiTk1JQfqU_xliYrcsdyhwTdzwT2lgnuhSmT4Og83Rc",
        },
        body: JSON.stringify(productData),
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Errore nell'aggiornamento del prodotto");
          }
          return resp.json();
        })
        .then((data) => {
          alert("Prodotto aggiornato con successo!");

          window.location.href = "./index.html";
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    }
  });
};
