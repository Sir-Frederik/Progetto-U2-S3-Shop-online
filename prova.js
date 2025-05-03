// Invariato
const col = document.createElement("div");
col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

// Aggiunto h-100 per altezza uniforme delle card
const card = document.createElement("div");
card.className = "card h-100 mb-4 shadow-sm slide-fwd-center";

// Modificato da cover-img a object-fit-cover e aggiunto height fisso
const img = document.createElement("img");
img.src = product.imageUrl;
img.className = "card-img-top object-fit-cover";
img.style = "height: 200px";
img.alt = "product Photo";

// Aggiunto d-flex flex-column per gestire meglio il layout
const cardBody = document.createElement("div");
cardBody.className = "card-body d-flex flex-column";

// Aggiunto fw-bold per enfasi
const h5 = document.createElement("h5");
h5.className = "card-title fw-bold";
h5.textContent = product.name;

// Aggiunto stile al prezzo con fs-5, fw-bold e text-success
const p = document.createElement("p");
p.className = "card-text fs-5 fw-bold text-success";
p.textContent = `${product.price}€`;

// Sostituito d-flex e btn-group con un nuovo div flex con gap
const btnGroup = document.createElement("div");
btnGroup.className = "d-flex gap-2 mt-auto";

// Convertito da button+a a solo tag a, aggiunto flex-grow-1
const btn1 = document.createElement("a");
btn1.href = `./details.html?appId=${product._id}`;
btn1.className = "btn btn-warning flex-grow-1";
btn1.textContent = "Scopri di Più";

// Aggiunto flex-grow-1 e rimosso m-1
const btn2 = document.createElement("button");
btn2.type = "button";
btn2.className = "btn btn-warning flex-grow-1";
btn2.textContent = "Aggiungi al carrello";
btn2.setAttribute("onclick", "handleBuyButton(event)");

// Convertito da button+a a solo tag a, aggiunto flex-grow-1
const btn3 = document.createElement("a");
btn3.href = `./backoffice-modifica.html?appId=${product._id}`;
btn3.className = "btn btn-warning flex-grow-1";
btn3.textContent = "Modifica";
