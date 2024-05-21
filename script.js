
function CartShowHiden() {
    var btnCart = document.querySelector(".btncart")
    var cartItem = document.querySelector(".cartItems")

    btnCart.addEventListener("click", () => {
        cartItem.style.display = "block"
    })

    btnCart.addEventListener("mouseleave", () => {
        cartItem.style.display = "none"

    })

}


var Products = [
    {
        name: "Wooden Chair ", headline: "Best for daily use", price: "5$", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_RyYc8ByRSqiyJVHhYQO9mjlrWhzQVeTv3pdej5LFw&s"
    },
    {
        name: "Gaming Chair ", headline: "Best for Gaming ", price: "100$", src: "https://cdn.shopify.com/s/files/1/0073/0169/3551/files/playstation-legend-pedestal-2021029_1_abf77133-6820-4c4a-b19b-84fc0b491173.jpg?v=1697461959"
    },

    {
        name: "Comfort Chair ", headline: "Best for daily use", price: "30$", src: "https://interwood.pk/cdn/shop/products/fg050000478.jpg?v=1699177297"
    },

    {
        name: "Sofa Chair ", headline: "Best for daily use", price: "20$", src: "https://lieda.gov.pk/wp-content/uploads/2020/06/2-2.jpg"
    },

    {
        name: "Wooden Chair ", headline: "Best for daily use", price: "30$", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_RyYc8ByRSqiyJVHhYQO9mjlrWhzQVeTv3pdej5LFw&s"
    },

    {
        name: "Childern Chair ", headline: "Best for babies ", price: "5$", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_RyYc8ByRSqiyJVHhYQO9mjlrWhzQVeTv3pdej5LFw&s"
    },

    {
        name: "Boucle Occasional Chair", headline: "Best for daily use", price: "10$", src: "https://cdn11.bigcommerce.com/s-fj5u5hhzyb/images/stencil/1280x1280/products/27344/15554/NEW_Boucle_Occasional_Chair_Lores_01__99432.1675195686.jpg?c=1"
    },


]
var papolar = [

    {
        name: "Boucle Occasional Chair", headline: "Best for daily use", price: "10$", src: "https://cdn11.bigcommerce.com/s-fj5u5hhzyb/images/stencil/1280x1280/products/27344/15554/NEW_Boucle_Occasional_Chair_Lores_01__99432.1675195686.jpg?c=1"
    },
    

    {
        name: "Boucle Occasional Chair", headline: "Best for daily use", price: "10$", src: "https://cdn11.bigcommerce.com/s-fj5u5hhzyb/images/stencil/1280x1280/products/27344/15554/NEW_Boucle_Occasional_Chair_Lores_01__99432.1675195686.jpg?c=1"
    },

    {
        name: "Wooden Chair ", headline: "Best for daily use", price: "30$", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_RyYc8ByRSqiyJVHhYQO9mjlrWhzQVeTv3pdej5LFw&s"
    },
]

function PupolarShow() {
    var cutler = ""
    papolar.forEach( (obj, index)=> {
        cutler += `
        <div class="product rounded-lg flex flex-col border-black border-2 w-64 p-2">
        <div class="productimg m-auto w-52 h-44 flex flex-col">
          <img
            class="w-full h-full"
            src="${obj.src}"
            alt=""
          />
        </div>
        <div class="productContent items-center flex p-1 justify-between">
          <div class="content">
            <h1>${obj.name}</h1>
            <p>${obj.headline}</p>
            <p>${obj.price}</p>
          </div>
          
        </div>
      </div>
        
        `
    })
    document.querySelector(".popular").innerHTML = cutler
    
}

function ProductsShow() {
    var cutler = ""
    Products.forEach( (obj, index)=> {
        cutler += `
        <div class="product rounded-lg flex flex-col border-black border-2 w-64 p-2">
        <div class="productimg m-auto w-52 h-44 flex flex-col">
          <img
            class="w-full h-full"
            src="${obj.src}"
            alt=""
          />
        </div>
        <div class="productContent items-center flex justify-between">
          <div class="content">
            <h1>${obj.name}</h1>
            <p>${obj.headline}</p>
            <p>${obj.price}</p>
          </div>
          <div class="btnAddToCart">
            <button 
            data-index= "${index}"  class="add cursor-pointer px-2 py-1 text-white rounded-full bg-black "><i 
            data-index= "${index}" class="ri-add-line add"></i></button>
          </div>
        </div>
      </div>
        
        `
    })
    document.querySelector(".products").innerHTML = cutler

}
var cart = []
function addToCart() {
    document.querySelector(".products").addEventListener("click", (dets) => {
        if (dets.target.classList.contains('add')) {
            cart.push(Products[dets.target.dataset.index]);
            console.log(cart);
            showCart()
        }
    })
}


function showCart() {
    // document.querySelector(".cartItems").style.display = "block"
    cutler = ""


    cart.forEach((obj) => {
        cutler += `  <div
        class="item flex p-2 gap-3 rounded-lg border-black border-2"
      >
        <div class="itemImg w-32 h-24 object-cover">
          <img class="w-full h-full" src="${obj.src}" alt="" />
        </div>
        <div class="content">
          <h1>${obj.name}</h1>
          <p>${obj.headline}</p>
          <p>${obj.price}</p>
        </div>
      </div>
  `

    })
    document.querySelector(".items").innerHTML = cutler;
}

CartShowHiden();
ProductsShow()
PupolarShow()
addToCart()