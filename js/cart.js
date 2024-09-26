

let prodDom = document.querySelector(".prods");
let noProd = document.querySelector(".noprod");

/*if(prodIncart) {
    let itemss = JSON.parse(prodIncart);
    drawprodCart(itemss);
};*/


// put allprod..  as thin   drawprodCart(allproducts = [])  as defualt param   for any arguments later when use func
 // for apear empy when removing all items

function drawprodCart(allproducts = []) {
//let allproducts = [];  or put it here /  empty arr   needed to appear empty   when removing  all item   from cart later.
    if(JSON.parse(localStorage.getItem("prodinCart")).length === 0)
    noProd.innerHTML = "There are no products!!";

    let products = JSON.parse(localStorage.getItem("prodinCart")) || allproducts;
    let productsUI = products.map((item) => {
         return `
         <div class="prodsItem">
                     <img src="${item.imgurl}" class="imgitem1" alt="inderma cleanser">
 
                     <div class="itemDesc">
                     
                      <h2>${item.title}</h2>  
                      <p>${item.desc}</p>
                      <h3>Price: ${item.price}</h3>
                     </div>
 
                     <div class="itemAction">
                         <button class="tocard" onclick="removeFromCart(${item.id})"> Remove From Cart </button>
                                  
                     
 
                     </div>
                 
         </div>
           `;
         } );
         
     prodDom.innerHTML = productsUI;  
         
 };
 drawprodCart();

//removeFromCart fuc   from button onclick event
 function removeFromCart(id) {
    let prodIncart = localStorage.getItem("prodinCart");
    if(prodIncart) {
        let itemcart = JSON.parse(prodIncart);
    let filtereditems = itemcart.filter(item => item.id !== id);
    drawprodCart(filtereditems);
    localStorage.setItem("prodinCart", JSON.stringify(filtereditems));
    }
 };


