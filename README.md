# [Pokedex](https://rhuynh06.github.io/pokedex/)

This is a simple yet feature-rich Pokédex web application that allows users to search for Pokémon by name or ID and view detailed information, including stats, sprite, and strengths/weaknesses based on type.

## Features

- Search for Pokémon by **name** or **ID**
- Display full Pokémon data:
  - Name, ID, weight, height
  - Type(s) and whether it has one or multiple types
  - Base stats: HP, Attack, Defense, Special Attack, Special Defense, Speed
- Show front sprite and link to additional info
- Dynamically load strengths and weaknesses based on type using a local `types.json` file
- Highlights multiple types if present
- Validates input and alerts on invalid Pokémon entries

## Technologies Used

- HTML, CSS, JavaScript (Vanilla)
- [PokéAPI Proxy by freeCodeCamp](https://pokeapi-proxy.freecodecamp.rocks/)
- `types.json` (local file) to determine type matchups