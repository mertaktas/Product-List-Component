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
        
        li.classList.add('p-3', 'text-sm', 'text-gray-400', 'h-auto', 'font-medium', 'cursor-pointer', 'lg:ml-4','lg:truncate','break-all')
        li.innerHTML += `<span>${data}</span>`
        html.appendChild(li)
    }
    html.firstChild.classList.add('text-gray-700', 'border-b-2', 'border-blue-400', 'lg:bg-green-100', 'lg:bg-green-50', 'lg:text-blue-700', 'lg:border-b-0')
    let span = document.createElement("span");
    span.classList.add('h-full', 'w-1', 'bg-blue-700', 'absolute', 'rounded-r-sm', '-left-4')
    html.firstChild.appendChild(span)
}
