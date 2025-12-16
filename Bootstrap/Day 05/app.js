


async function getProducts() {
    var response = await fetch("https://dummyjson.com/recipes");
    var data = await response.json();
    console.log(data)
    sectionProducts(data.recipes.slice(0, 4), "#trendingRecipes");
    sectionProducts(data.recipes.slice(5, 9), "#topRecipes");
    sectionProducts(data.recipes.slice(10, 20), "#tabRow1");
    sectionProducts(data.recipes.slice(0, 10), "#tabRow2");

}


function sectionProducts(recipes, title) {
    var sectionRecipe = document.querySelector(title);
    for (data of recipes) {
        var cardElement = document.createElement("div");
        cardElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
        console.log(data)
        cardElement.innerHTML = `
        <div class="card h-100">
          <img src=${data.image} class="card-img-top" alt="Product 1">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5 >
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div >
        </div >
            `
        sectionRecipe.appendChild(cardElement)
    }


}


getProducts()


