const produtos = [

{
nome:"Scania SDP3 Diagnóstico",
url:"/pages/produtos/scania-sdp3.html"
},

{
nome:"Volvo Tech Tool PTT",
url:"/pages/produtos/volvo-ptt.html"
},

{
nome:"Mercedes Xentry Trucks",
url:"/pages/produtos/xentry.html"
},

{
nome:"Scanner Jaltest",
url:"/pages/produtos/jaltest.html"
},

{
nome:"Cummins Insite",
url:"/pages/produtos/cummins-insite.html"
},

{
nome:"Caterpillar ET",
url:"/pages/produtos/cat-et.html"
}

]

const input = document.getElementById("searchInput")
const results = document.getElementById("searchResults")

input.addEventListener("keyup",function(){

let value = input.value.toLowerCase()

results.innerHTML=""

if(value.length < 2){

results.style.display="none"
return

}

let encontrados = produtos.filter(produto =>
produto.nome.toLowerCase().includes(value)
)

encontrados.forEach(produto => {

let item = document.createElement("div")

item.classList.add("search-item")

item.innerText = produto.nome

item.onclick = () => {

window.location.href = produto.url

}

results.appendChild(item)

})

results.style.display="block"

})