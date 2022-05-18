const fetchData=async()=>{ 
    try {
        let data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')  
        if(!data.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
            let response =await data.json();
            response.results.forEach(function(pokemon){    
            fetchPokeData(pokemon) ;
            })
            // return response;


    } catch (error) {
        console.log(error);  
    }
}

async function fetchPokeData(pokemon){
    let url = pokemon.url                                                       // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)  
    try {
        let data = await fetch(url);  
        if(!data.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
            let response =await data.json();
            console.log(response.abilities);
            

    } catch (error) {
        console.log(error);  
    }
}

// function renderPage(pokeData){
//     let allPokemonContainer = document.getElementById('poke-container');
//     let pokeContainer = document.createElement("div")                           //div will be used to hold the data/details for indiviual pokemon.{}
//     let pokeName = document.createElement('h4')
//     pokeName.innerText = pokeData.name
//     let pokeNumber = document.createElement('p')
//     pokeNumber.innerText = `#${pokeData.id}`
//     let pokeTypes = document.createElement('ul')                                //ul list will hold the pokemon 
//     typescreateTypes(pokeData.types, pokeTypes)                                 // helper function to go through the types array and create li tags for each one
//     pokeContainer.append(pokeName, pokeNumber, pokeTypes);                      //appending all details to the pokeContainer div
//     allPokemonContainer.appendChild(pokeContainer);                             //appending that pokeContainer div to the main div which will hold all the pokemon cards
// }



fetchData();

