const list = document.querySelector("#list");

(() => {

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => renderData(data))
        .catch(err => console.log(err))

        function renderData(data){

            data.forEach(datacha => {
                list.innerHTML += `<li class = "item">
                <img src="${datacha.image}" alt="" width="200px" class="product-image">
                <ul class="wrapper-list">
                    <li class="list__prise">${datacha.price}</li>
                    <li class="list__category">${datacha.category}</li>
                    <li class="list__title">${datacha.title}</li>
                    <img src="./images/bin.png" alt="picsum" class="korzinka">
                </ul>
            </li>`                                                                                  
                
            });
        }

})()

list.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("korzinka")) {
        console.log("deleted");
    }
})