// Function to get query parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        id: params.get('id'),
        types: params.get('types')
        ? params.get('types').split(',').map(t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()) 
        : []
    

    };
}

// Function to display Pokemon information
async function displayPokemonInfo() {
    const { name, id, types } = getQueryParams();
    if (!name || types.length === 0) {
        alert('Invalid Pokemon data');
        return;
    }

    // Set Pokemon name and id
    document.getElementById('pokemon-name-id').textContent = `${name.toUpperCase()} (ID: ${id})`;

    // Set Pokemon type
    document.getElementById('pokemon-types').textContent = `${types}`;

    // Set Pokemon sprite
    document.getElementById('pokemon-sprite').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    // Fetch types.json file
    const res = await fetch('types.json');
    const data = await res.json();

    console.log(data)

    // Set Strengths and Wekanesses
    const strengths = []
    const weaknesses = []
    types.forEach(type => {
        if (data[type]) { 
            strengths.push(...data[type].strongAgainst);
            weaknesses.push(...data[type].weakAgainst);
        }
    })

    // Populate strengths list
    const strengthsList = document.getElementById('strengths-list');
    strengthsList.innerHTML = '';
    strengths.forEach(type => {
        const li = document.createElement('li');
        li.textContent = type;
        li.classList.add(type);
        strengthsList.appendChild(li);
    });

    // Populate weaknesses list
    const weaknessesList = document.getElementById('weaknesses-list');
    weaknessesList.innerHTML = '';
    weaknesses.forEach(type => {
        const li = document.createElement('li');
        li.textContent = type;
        li.classList.add(type);
        weaknessesList.appendChild(li);
    });
}

// Call the function to display Pokemon info on page load
window.onload = displayPokemonInfo;