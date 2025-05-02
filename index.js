const URL = "https://striveschool-api.herokuapp.com/api/product/";
const row = document.getElementById("cards-show");
const getAndShowProducts = () => {
  fetch(URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTJmMDFjMjUwNDAwMTUxYWI2YjciLCJpYXQiOjE3NDYxNzg4MDEsImV4cCI6MTc0NzM4ODQwMX0.BiTk1JQfqU_xliYrcsdyhwTdzwT2lgnuhSmT4Og83Rc ",
    },
  })
    .then((resp) => {
      console.log(resp);
      if (!resp.ok) {
        if (resp.status >= 500) {
          throw new Error("Errore lato server");
        } else {
          throw new Error("Errore nella fetch");
        }
      }
      return resp.json();
    })
    .then((product) => {
      product.forEach((product) => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        const card = document.createElement("div");
        card.className = "card mb-4 shadow-sm";

        const img = document.createElement("img");
        img.src = "product.imageUrl";
        img.className = "bd-placeholder-img card-img-top";
        img.alt = "product Photo";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.textContent = product.name;

        const p = document.createElement("p");
        p.className = "card-text";

        const dFlex = document.createElement("div");
        dFlex.className = "d-flex justify-content-between align-items-center";

        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";

        const btn1 = document.createElement("button");
        btn1.type = "button";
        btn1.className = "btn btn-sm btn-outline-secondary";
        btn1.textContent = "Scopri di più";

        const btn2 = document.createElement("button");
        btn2.type = "button";
        btn2.className = "btn btn-sm btn-outline-secondary";
        btn2.textContent = "Aggiungi al carrello";
        btn2.setAttribute("onclick", "handleHideButton(event)");

        btnGroup.appendChild(btn1);
        btnGroup.appendChild(btn2);

        const small = document.createElement("small");
        small.className = "text-muted";
        small.textContent = "ciccio";

        dFlex.appendChild(btnGroup);
        dFlex.appendChild(small);

        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(dFlex);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);

        row.appendChild(col);
      });
    })
    .catch((error) => {
      console.log(error);
      generateAlert(error.message);
    });
};
window.onload = function () {
  row.innerHTML = "";
  getAndShowProducts();
};
