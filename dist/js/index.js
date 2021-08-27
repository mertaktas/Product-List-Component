const NavbarListEl = document.querySelector(".product-navbar-list")
const ProductListEl = document.querySelector(".product-list")
const addToCartEl = document.querySelector(".add-to-cart")

// Start
window.onload = () => {
getData();
};

// Get Data for Json Server
async function getData () {
    const data = await (await fetch("http://localhost:3000/responses")).json() // Fetch Data
    const defaultProduct = data.params.recommendedProducts["Size Özel"] // First Product
    const defaulCategories = data.params.userCategories // Categories Data
    loadingCart(); // Loading
    getCategories(defaulCategories) // Call Categories
    getProducts(defaultProduct) // Call Products
    NavbarClickEvent('click',data); // Click Event
}

// Get Categories Function
function getCategories(datas){
    NavbarListEl.innerHTML = ""
    datas.map(data=>{
        let splitData = data.split('> ')
        let li = document.createElement("li");
        li.innerHTML += `
        <div class="p-3 lg:ml-4 text-sm relative text-gray-400 h-auto font-medium flex items-center cursor-pointer transition-all lg:rounded-md">
            <span data-value="${data}" class="pointer-events-none">${splitData.slice(-1)[0]}</span>
        </div>
        `
        NavbarListEl.appendChild(li)
    })
    NavbarListEl.firstChild.children[0].classList.add('navbar-list','text-gray-700', 'border-b-2', 'border-blue-400', 'lg:bg-green-100', 'lg:bg-green-50', 'lg:text-blue-700', 'lg:border-b-0')
}

// Product string
const strProduct = function (data) {
    str = `
    <li class="swiper-slide group p-2 mr-2 min-w-40 border border-gray-100 rounded-lg shadow-lg cursor-pointer">
        <img class="w-full rounded-lg lazy" src="${data.image}" alt="${data.name}">
        <h3 class="px-3 mt-4 h-8 mb-6 w-40 text-xs font-semibold break-all text-overflow: ellipsis truncate-2-lines">${data.name}</h3>
        <div class="price p-2 mb-2 text-lg text-gray-800 font-bold bg-gray-100 rounded-lg text-black">${data.priceText}</div>
        ${data.params.shippingFee == 'FREE' ? 
            `<div class="free-cargo relative mb-2 pl-2 text-xs font-medium text-gray-700 flex items-center">
                <svg class="hidden lg:block fill-current text-green-600 w-3 h-3 mr-1" x="0px" y="0px" viewBox="0 0 122.88 99.36"><g><path d="M78.29,23.33h18.44c5.52,0,4.23-0.66,7.33,3.93l15.53,22.97c3.25,4.81,3.3,3.77,3.3,9.54v18.99 c0,6.15-5.03,11.19-11.19,11.19h-2.28c0.2-0.99,0.3-2.02,0.3-3.07c0-8.77-7.11-15.89-15.89-15.89c-8.77,0-15.89,7.11-15.89,15.89 c0,1.05,0.1,2.07,0.3,3.07H58.14c0.19-0.99,0.3-2.02,0.3-3.07c0-8.77-7.11-15.89-15.89-15.89c-8.77,0-15.89,7.11-15.89,15.89 c0,1.05,0.1,2.07,0.3,3.07h-2.65c-5.66,0-10.29-4.63-10.29-10.29V63.05h64.27V23.33L78.29,23.33z M93.82,74.39 c6.89,0,12.48,5.59,12.48,12.49c0,6.89-5.59,12.48-12.48,12.48c-6.9,0-12.49-5.59-12.49-12.48C81.33,79.98,86.92,74.39,93.82,74.39 L93.82,74.39z M42.54,74.39c6.9,0,12.49,5.59,12.49,12.49c0,6.89-5.59,12.48-12.49,12.48c-6.89,0-12.48-5.59-12.48-12.48 C30.06,79.98,35.65,74.39,42.54,74.39L42.54,74.39z M42.54,83.18c2.04,0,3.7,1.65,3.7,3.7c0,2.04-1.65,3.69-3.7,3.69 c-2.04,0-3.69-1.66-3.69-3.69C38.85,84.83,40.51,83.18,42.54,83.18L42.54,83.18z M93.82,83.09c2.09,0,3.79,1.7,3.79,3.79 c0,2.09-1.7,3.79-3.79,3.79c-2.09,0-3.79-1.7-3.79-3.79C90.03,84.78,91.73,83.09,93.82,83.09L93.82,83.09z M89.01,32.35h3.55 l15.16,21.12v6.14c0,1.49-1.22,2.71-2.71,2.71h-16c-1.53,0-2.77-1.25-2.77-2.77V35.13C86.23,33.6,87.48,32.35,89.01,32.35 L89.01,32.35z M5.6,0h64.26c3.08,0,5.6,2.52,5.6,5.6v48.92c0,3.08-2.52,5.6-5.6,5.6H5.6c-3.08,0-5.6-2.52-5.6-5.6V5.6 C0,2.52,2.52,0,5.6,0L5.6,0z"/></g></svg>
                Ücretsiz Kargo
            </div>
            `
            : ''
        }
        <button onclick="addToCart();" class="lg:opacity-0 group-hover:opacity-100 transition-all block p-2 font-light tracking-wide text-center text-white w-full bg-blue-600 rounded-lg ">Sepete Ekle</button>
    </li>
`
return str
}

// Get Products Function
function getProducts(datas) {
    setTimeout(function(){ 
        ProductListEl.innerHTML = ""
        datas.map(data=>{
            ProductListEl.innerHTML += strProduct(data)
        }) 
     }, 200);
    
}

// Navbar Click Event Function
function NavbarClickEvent(event,data) {
    NavbarListEl.addEventListener(event,(e)=>{
        e.preventDefault();
        loadingCart();
        for (let i = 0; i <= NavbarListEl.childElementCount-1; i++) {
            NavbarListEl.children[i].children[0].classList.remove('navbar-list', 'text-gray-700', 'border-b-2', 'border-blue-400', 'lg:bg-green-100', 'lg:bg-green-50', 'lg:text-blue-700', 'lg:border-b-0')
        }
        e.target.classList.add('navbar-list', 'text-gray-700', 'border-b-2', 'border-blue-400', 'lg:bg-green-100', 'lg:bg-green-50', 'lg:text-blue-700', 'lg:border-b-0')
        getProducts(data.params.recommendedProducts[e.target.children[0].dataset.value])
    })
}

// Add To Cart Function
function addToCart(){
    addToCartEl.classList.remove('invisible')
    setTimeout(()=>{
        addToCartEl.classList.add('invisible')
    }, 2000);
}

// Close To Cart Function
function closeToCard() {
    addToCartEl.classList.add('invisible')
}

// Loading Cart Function
function loadingCart(){
    ProductListEl.innerHTML = ''
    for (let i = 0; i < 10; i++) {
        ProductListEl.innerHTML += `
        <li class="border border-green-50 shadow rounded-md p-2 max-w-sm w-full mx-auto min-w-40 mr-2">
            <div class="animate-pulse flex flex-col">
                <div class="rounded-lg bg-green-100 h-40 w-full"></div>
                <div class="flex-1 space-y-4 py-1">
                    <div class="space-y-1 mt-4 px-2">
                        <div class="h-3 bg-green-100 rounded-lg w-full"></div>
                        <div class="h-3 bg-green-100 rounded-lg w-full"></div>
                    </div>
                    <div class="space-y-3">
                    <div class="h-10 mt-6 bg-green-100 rounded-lg w-full flex items-center"></div>
                    <div class="h-3 bg-green-100 rounded-lg w-3/5"></div>
                    <div class="h-10 bg-green-100 rounded-lg w-full"></div>
                    </div>
                </div>
            </div>
        </li>
    `
    }
}
