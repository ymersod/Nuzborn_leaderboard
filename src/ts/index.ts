// Sample data for the leaderboard
/* const players = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 88 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 90 },
]; */

interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

async function fetchPokemonData(pokemonName: string): Promise<Pokemon | null> {
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);  
      const pokemon = await response.json();
      console.log(pokemon);
      return null;
  } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      return null;
  }
}

async function displayPokemon(pokemonName: string) {
  const pokemon = await fetchPokemonData(pokemonName);
  if (pokemon) {
      console.log(`Name: ${pokemon.name}`);
      console.log(`ID: ${pokemon.id}`);
      console.log(`Height: ${pokemon.height}`);
      console.log(`Weight: ${pokemon.weight}`);
      console.log("Types:", pokemon.types.map(t => t.type.name).join(", "));
  } else {
      console.log("Pokémon not found.");
  }
}

// Function to render the leaderboard
function renderLeaderboard(): void {
  const leaderboard = document.getElementById("leaderboard");

  if (leaderboard) {
      leaderboard.innerHTML = "<h2>Leaderboard</h2>";
      const list = document.createElement("ul");

     /*  players.forEach(player => {
          const listItem = document.createElement("li");
          listItem.textContent = `${player.name}: ${player.score} points`;
          list.appendChild(listItem);
      }); */

      leaderboard.appendChild(list);
  }
}

// Function to randomly update player scores
function refreshLeaderboard(): void {
  /* players.forEach(player => {
      // Generate a random score change between -10 and +10
      const scoreChange = Math.floor(Math.random() * 21) - 10;
      player.score = Math.max(0, player.score + scoreChange); // Ensure score doesn't go below 0
  }); */
  renderLeaderboard();
}

// Set up event listener for the refresh button
document.getElementById("getPokeButton")?.addEventListener("click", () => displayPokemon("ditto"));

document.getElementById("refreshButton")?.addEventListener("click", refreshLeaderboard);

// Initial render
renderLeaderboard();