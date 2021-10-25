const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeStats = document.querySelector('[data-poke-stats]');

const buscarPokemon = event => {
    event.preventDefault();
    // Fetch pokeapi
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(respuesta => informacionPokemon(respuesta))
}
// Pokemones
const informacionPokemon = data => {
    // sprite delantero
    const sprite = data.sprites.front_default;
    // tipo y stats
    const { stats} = data;
    // Informacion
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `N ${data.id}`;
    estadisticas(stats); 
}

const estadisticas = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        // creacion de card
        const statElement = document.createElement('div');
        const statElementName = document.createElement('div');
        const statElementAmount = document.createElement('div');
        // Informacion
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}
