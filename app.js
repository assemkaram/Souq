let r=new XMLHttpRequest();
let container=document.querySelector(".Products-cointainer");




let input=document.querySelector("input");



let cat=document.querySelector(".categories")
input.addEventListener("input",()=>{
    console.log(input.value);
    let s=input.value;
    getdata(`https://dummyjson.com/products/search?q=${s}`);
})

function getdata(url){
    container.innerHTML="";
    r.open("GET",url,true);
r.onload=function(){
    if(r.status==200&&r.readyState==4){
        let response=JSON.parse(r.response);
        let products=response.products;
        products.map((e)=>{
            container.innerHTML+=`
            <div class="card">
            <img src="${e.thumbnail}">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
            <p class="price">price: <span>${e.price}</span> $</p>
            <button><i class="fa-solid fa-cart-arrow-down"></i> Add to Cart</button>
            </div>
            `
        })
    }
}
r.send();
}

getdata("https://dummyjson.com/products");
function getcategoies(){
    let s=new XMLHttpRequest();
    s.open("GET","https://dummyjson.com/products/categories",true);
    s.onload=function(){
        if(s.status==200&&s.readyState==4){
        let response=JSON.parse(s.response);
        response.map((e)=>{
            cat.innerHTML+=`
            <span onclick="getdata('${e.url}')">${e.name}</span>
            `
        })
    }
    }
    s.send();
}
getcategoies();