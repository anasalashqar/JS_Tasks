"use strict";

const array = [];
document.addEventListener("DOMContentLoaded", () => {
  fetchFunc();
  fetch("")
});

const fetchFunc = async () => {
  try {
    const response = await fetch("./product.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const text = await response.text();

    const data = JSON.parse(text);
    array.push(data);
    renderPage(data);
    console.log(array[0]);
    return array;
  } catch (e) {
    console.error(e, "error message");
  }
};

const renderPage = (data) => {
  console.log(array);
  data.map((i) => {

    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let price = document.createElement("p");
    let image = document.createElement("img");

    
    image.src = `${i.image}`;
    image.classList.add("card-img-top"); 
    h2.textContent = `${i.name}`;
    h2.classList.add("card-title");
    p.textContent = `${i.category}`;
    p.classList.add("card-text"); 
    price.textContent = `$${i.price}`; 
    price.classList.add("card-text", "text-muted"); 

    div.classList.add("card", "m-3");
    div.style.width = "18rem"; 

   
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body"); 

    cardBody.appendChild(h2);
    cardBody.appendChild(p);
    cardBody.appendChild(price);

    div.appendChild(image);
    div.appendChild(cardBody);

    document.body.appendChild(div);
});
};
