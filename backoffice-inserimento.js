let form = document.getElementById("productForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let productData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
    price: document.getElementById("price").value,
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTJmMDFjMjUwNDAwMTUxYWI2YjciLCJpYXQiOjE3NDYxNzg4MDEsImV4cCI6MTc0NzM4ODQwMX0.BiTk1JQfqU_xliYrcsdyhwTdzwT2lgnuhSmT4Og83Rc ",
    },
    body: JSON.stringify(productData),
  })
    .then((resp) => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error("Errore nell'inserimento del prodotto");
      }
      return resp.json();
    })
    .then((data) => {
      alert("Prodotto aggiunto con successo!");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
});
