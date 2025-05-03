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
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
        col.innerHTML = `
        <div class="card mb-4 shadow-sm slide-fwd-center">
          <img src="${product.imageUrl}" class="card-img-top cover-img" alt="product Photo" />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}€ </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <a href="./details.html?appId=${product._id}" class="btn btn-warning  btn-sm border border-danger">Scopri di Più</a>
                </div>
                <div class="col-12 col-lg-4">
                 <a href="#" class="btn btn-warning  btn-sm border border-danger">Aggiungi al carrello</a>
                </div>
                <div class="col-12 col-lg-4">
                  <a href="./backoffice-modifica.html?appId=${product._id}" class="btn btn-warning btn-sm  border border-danger">Modifica</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

        row.appendChild(col);
        /*
        const card = document.createElement("div");
        card.className = "card mb-4 shadow-sm slide-fwd-center";

        const img = document.createElement("img");
        img.src = product.imageUrl;
        img.className = "card-img-top cover-img";
        img.alt = "product Photo";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.textContent = product.name;

        const p = document.createElement("p");
        p.className = "card-text";
        p.textContent = `${product.price}€ `;

        const dFlex = document.createElement("div");
        dFlex.className = "d-flex justify-content-between align-items-center";

        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";

        const btn1 = document.createElement("button");
        btn1.type = "button";
        btn1.className = "btn   btn-warning";
        btn1.innerHTML = `<a href="./details.html?appId=${product._id}"> Scopri di Più</a>`;

        const btn2 = document.createElement("button");
        btn2.type = "button";
        btn2.className = "btn m-1 btn-warning";
        btn2.textContent = "Aggiungi al carrello";
        btn2.setAttribute("onclick", "handleBuyButton(event)");

        const btn3 = document.createElement("button");
        btn3.type = "button";
        btn3.className = "btn  btn-warning";
        btn3.textContent = "Modifica";
        btn3.innerHTML = `<a href="./backoffice-modifica.html?appId=${product._id}"> Modifica </a>`;
    

        btnGroup.appendChild(btn1);
        btnGroup.appendChild(btn2);
        btnGroup.appendChild(btn3);

        dFlex.appendChild(btnGroup);

        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(dFlex);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);
*/
      });
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};

// const handleEditButton = function (productId) {
//   window.location.assign(`./backoffice-modifica.html?appId=${productId}`);
// };
window.onload = function () {
  row.innerHTML = "";
  getAndShowProducts();
};
