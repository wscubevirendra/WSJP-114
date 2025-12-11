var TOPMOVIESAPIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
var SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
var container = document.querySelector(".movies-section")


async function fetchMovies(API) {
    var response = await fetch(API);
    var data = await response.json()
    showMovies(data.results)
}

fetchMovies(TOPMOVIESAPIURL)


function showMovies(movies) {
    container.innerHTML = ""
    for (let data of movies) {
        var divElm = document.createElement("div");
        divElm.classList.add("card");
        divElm.innerHTML = `<img src=${"https://image.tmdb.org/t/p/w1280" + data.poster_path} alt="">
            <div class="overview">
                <div>
                    <h3>${data.title}</h3>
                    <span>${data.vote_average}/10</span>
                </div>
                <p>
                  ${data.overview}
                </p>
            </div>`

        container.append(divElm)
    }
}


document.querySelector('#inp').addEventListener(
    "keyup",
    function (event) {
        if (event.target.value == "") {
            fetchMovies(TOPMOVIESAPIURL)
        } else {
            fetchMovies(SEARCHAPI + event.target.value)
        }
    })