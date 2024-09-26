let products = JSON.parse(localStorage.getItem("products"));
let prodID = localStorage.getItem("prodId");
let itemDom = document.querySelector(".item-detail");

let prodDetalis = products.find(item => item.id == prodID);

itemDom.innerHTML = `
                        <img src="${prodDetalis.imgurl}" alt="Inderma">
                        <h2>${prodDetalis.title}</h2>
                        <p>${prodDetalis.desc}</p>
                        <h4>Price: ${prodDetalis.price}</h4>
                 `;



