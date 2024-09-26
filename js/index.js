let products = JSON.parse(localStorage.getItem("products"));   
let prodDom = document.querySelector(".prods");  //<div class="prods"> -- will carry items later
let cartprodMenu = document.querySelector(".cart-prods");
let cartprodMenuDiv = document.querySelector(".cart-prods div");
let cartItemNum = document.querySelectorAll(".cart-prods div p") // to get number of all <p> = to get  length later
let badgDom = document.querySelector(".badge");
let shopcart = document.querySelector(".shoppingcart");



//in data. js
/*let products = [
    {
        id: 1,
        imgurl: "image/inderma.jpg",
        title: "Iderma Cleanser Set",
        desc: "Looking for extra hydration?",
        price: '270 $'
    },
    {
        id: 2,
        imgurl: "image/lorin colardo 1.jpg",
        title: "Lauren Conrad Set",
        desc: "Makeup & Skincare",
        price: '350 $'
    },
    {
        id: 3,
        imgurl: "image/serum.jpg",
        title: "Wild Doe Anti-aging Serum Set",
        desc: "Brightening Vitamin C Serum for Face ",
        price: '200 $'
    },
    {
        id: 4,
        imgurl: "image/Moira purp1.jpg",
        title: "Moira Oil Control Skincare Collection",
        desc: "10% Niacinamide & 1.9% Salicylic Acid Oil Control Serum",
        price: '250 $'
    },
    {
        id: 5,
        imgurl: "image/nuxe.jpg",
        title: "Nuxuriance Ultra Collection",
        desc: "It's anti-ageing skincare products",
        price: "320 $"
    }   
];*/

// function for add     arr items title and price....  ,  in   new html div (will hold data)
// in index.js.. creat   new html div  by js,  by templt string  -  div will not appear in html page, .. but appear in consol
// new div will be repeated = number of arr items

function drawprod(products = []) {
   let productsUI = products.map((item) => {
        return `
        <div class="prodsItem">
                    <img src="${item.imgurl}" class="imgitem1" alt="inderma cleanser">

                    <div class="itemDesc">
                     <a onclick="saveItemData(${item.id})">${item.title}</a>  
                     <p>${item.desc}</p>
                       <h3>Price: ${item.price}</h3>
                       </div>

                    <div class="itemAction">
                        <button class="tocard" onclick="Addtocart(${item.id})"> Add to Card </button>
                        <i class="fa-regular fa-heart fa-lg"></i>
                       
                     </div>
                
        </div>
          `;
        } );

    prodDom.innerHTML = productsUI;  
        
};  //remove encapsulation to enabel  internal save func calling  inside drawprod fun

drawprod(JSON.parse(localStorage.getItem("products")));



// check presence of items/products in local storage

let addeditem = localStorage.getItem("prodinCart")                     // to add more products without deleting 1st
                ? JSON.parse(localStorage.getItem("prodinCart")) 
                : [];
if(addeditem) {
    addeditem.map(item => {
    cartprodMenuDiv.innerHTML += `<p>${item.title}</p>`;
})
};

badgDom.style.display = "block";
badgDom.innerHTML = addeditem.length;




// Add to cart


function Addtocart(id) {            //  this func for    onclick="Addtocart();    in button addtocart
    
    if(localStorage.getItem("username")) {
    let choositem = products.find(item => item.id === id);
   
    cartprodMenuDiv.innerHTML += `<p>${choositem.title}</p>`;
    
    /*let addeditem = localStorage.getItem("prodinCart")                     // to add more products without deleting 1st
                    ? JSON.parse(localStorage.getItem("prodinCart"))         // transefer it outside  addtocart(id)  - abov it
                    : [];*/
    addeditem = [...addeditem, choositem];
    localStorage.setItem("prodinCart", JSON.stringify(addeditem));

    
    
    let cartItemNum = document.querySelectorAll(".cart-prods div p") // to get number of all <p> = to get  length later
    badgDom.innerHTML = cartItemNum.length;
    badgDom.style.display = "block";} else {
        window.location = "login.html";
    }

};

Addtocart(); //call func



//open cart menu
shopcart.addEventListener("click", opencartMenu);
 
function opencartMenu() {
    if(cartprodMenuDiv.innerHTML !== "" &&
       cartprodMenu.style.display === "block") {
          cartprodMenu.style.display === "none";
        } else {
            cartprodMenu.style.display === "block";}
        }; 
      

function saveItemData(id) {
    localStorage.setItem("prodId", id);
    window.location = "details.html";
    };



//---------------------------------    

let inpsearch = document.getElementById("search"); 

inpsearch.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) 
                //console.log("enter");
        search(e.target.value, JSON.parse(localStorage.getItem("products")));
    
    if(e.target.value.trim() === "") 
        drawprod(JSON.parse(localStorage.getItem("products")));
        
    });



 function search(title, myarr){
    let arr = myarr.filter(item => item.title === title);
    //console.log(arr); 
    drawprod(arr); // pass param  (json.parse...)  in origin func call   above
 }

//search("Inderma Cleanser Set", JSON.parse(localStorage.getItem("products")));










