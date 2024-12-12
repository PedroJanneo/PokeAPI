const pokeApi = {};


function convertPokeApiDetail(pokemonDetail){
        const pokemon = new Pokemon();
        pokemon.name = pokemonDetail.name
        pokemon.number = pokemonDetail.id

        const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
        const [type] = types
        pokemon.types =  types

        pokemon.type = type
        pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

        return pokemon

}


pokeApi.getPokemonsDetail = (pokemon) => {
   return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetail)
                
            
}
// se nao passar nda, offset/limit tera esses valores como default
pokeApi.getPokemons = (offset = 0, limit = 25) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsoBody) => jsoBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
   
};


