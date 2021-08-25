const NavbarListEls = document.querySelector(".product-navbar-list")

getData()

async function getData () {
    const resp = await fetch("http://localhost:3000/responses")
    const data = await resp.json()
    getCategories(data.params.userCategories,NavbarListEls)
}   
function getCategories(datas,html){
    NavbarListEls.innerHTML = ""
    for (let data of datas) {
        let li = document.createElement("li");
        li.classList.add('p-3', 'text-sm', 'text-gray-400', 'h-auto', 'font-medium', 'cursor-pointer', 'lg:ml-4', 'truncate')
        li.innerHTML = `<span>${data}</span>`
        
        html.appendChild(li)
    }
}