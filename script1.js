const input = document.getElementById("search-input");
const sbtn = document.getElementById("search-button");
const pokeName = document.getElementById("pokemon-name");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const atk = document.getElementById("attack");
const def = document.getElementById("defense");
const sAtk = document.getElementById("special-attack");
const sDef = document.getElementById("special-defense");
const spd = document.getElementById("speed");
const sprite = document.getElementById("sprite");
const spriteLink = document.getElementById("sprite-link");
const oneOrMoreType = document.getElementById("oneOrMoreType");

const getPokemon = async (event) => {
  try {
    const nameOrId = input.value.toLowerCase();
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`);
    const data = await res.json();
    pokeName.textContent = `${data.name.toUpperCase()}`;
    id.textContent = `${data.id}`;
    weight.textContent = `${data.weight}`;
    height.textContent = `${data.height}`;
    types.innerHTML = `${data.types.map(slot => `<span>${slot.type.name.toUpperCase()}</span>`).join(' ')}`;
    oneOrMoreType.textContent = types.textContent.includes(" ") ? "Types" : "Type";
    hp.textContent = `${data.stats[0].base_stat}`;
    atk.textContent = `${data.stats[1].base_stat}`;
    def.textContent = `${data.stats[2].base_stat}`;
    sAtk.textContent = `${data.stats[3].base_stat}`;
    sDef.textContent = `${data.stats[4].base_stat}`;
    spd.textContent = `${data.stats[5].base_stat}`;
    sprite.src = data.sprites.front_default;
    spriteLink.classList.remove("disabled");

    // Extract types and construct the URL for extra.html
    const typesArray = data.types.map(slot => slot.type.name.toUpperCase());
    spriteLink.href = `extra.html?name=${data.name}&id=${data.id}&types=${typesArray.join(',')}`;
  } catch (err) {
    console.log(err);
    alert("Pokémon not found");
  }
}

const clear = () => {
  pokeName.textContent = ``;
  id.textContent = ``;
  weight.textContent = ``;
  height.textContent = ``;
  types.textContent = ``;
  hp.textContent = ``;
  atk.textContent = ``;
  def.textContent = ``;
  sAtk.textContent = ``;
  sDef.textContent = ``;
  spd.textContent = ``;
  sprite.src = ``;
  spriteLink.classList.add("disabled");
  spriteLink.href = ``;
};

sbtn.addEventListener("click", (event) => {
  clear();
  event.preventDefault();
  getPokemon(event);
});