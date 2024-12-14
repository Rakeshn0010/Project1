var products=[];
let html=``;
function displayCon(){
    var ele=document.getElementById("content");
    for(var i=0;i<products.length;i++){
        console.log(products[i].sor);
        html += `
        <div class="products">
                <div class="pic-p"><img src=${products[i].sor}></div>
                <div class="info-p">
                    <div class="name-p">${products[i].name}</div>
                    <div class="price-p">${products[i].price}&#8377;</div>
                    <div class="add-cart"><button>Add To Cart</button></div>
                </div>
            </div>`;
            console.log(html);
    }
    ele.innerHTML=html;
    console.log(html);
}
function addToProduct(sor,name,price){
    let a = {
        "sor":sor,
        "name":name,
        "price":price
    }
    products.push(a);
}

addToProduct("./image/pic1.jpg","Redmi Note 14 5G","18000");
addToProduct("./image/pic2.jpg","Real Me Narzo N61","7000");
addToProduct("./image/pic3.jpg","LG 4K Ultra HD Smart LED TV","49800");
addToProduct("./image/pic4.jpg","Sony BRAVIA 3 4K Ultra HD AI Smart LED Google TV","134000");
addToProduct("./image/pic5.jpg","MSI Gforce RTX 4060","50000");
addToProduct("./image/pic6.jpg","Rockstar Games PS5 GTA V","2000");
addToProduct("./image/pic7.jpg","Sony PlayStation 5 Console","54990");
addToProduct("./image/pic8.jpg","ASUS AiO M3 Series FHD","52990");
addToProduct("./image/pic9.jpg","Naruto Uzumaki","499");
addToProduct("./image/pic10.jpg","Sneakers","720");

displayCon();