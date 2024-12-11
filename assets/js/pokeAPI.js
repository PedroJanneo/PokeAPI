
const pokeApi = {}
                  // se nao passar nda, offset/limit tera esses valores como default
pokeApi.getPokemons = (offset =0 ,limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    fetch(url)
    .then((response) => response.json())
    .then((jsoBody) => jsoBody.results)
    .catch((error) => console.error(error))

}

