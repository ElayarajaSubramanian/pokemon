const body = document.querySelector("body");
let URL = "https://pokeapi.co/api/v2/pokemon/?limit=50";
const pokemonDiv = document.createElement("div");
pokemonDiv.classList.add("pokemon");

const btnSection = document.createElement("section");
btnSection.classList.add("btn-group");
const nextBtn = document.createElement("a");
nextBtn.classList.add("next-btn");
nextBtn.innerHTML = "Next";
const prevBtn = document.createElement("a");
prevBtn.classList.add("prevBtn");
prevBtn.innerHTML = "Previous";
body.appendChild(btnSection);
btnSection.appendChild(prevBtn);
btnSection.appendChild(nextBtn);

async function getPokemon() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const result = await data.results;

    for (poke of result) {
      for (let nameValue in poke) {
        if (Object.prototype.hasOwnProperty.call(poke, nameValue)) {
          let div = document.createElement("div");
          /* div.classList.add(poke[nameValue]); */
          div.innerHTML = poke[nameValue];
          pokemonDiv.appendChild(div);
          body.appendChild(pokemonDiv);
        }
      }
    }
    nextBtn.setAttribute("href", `${data.next}`);
  } catch {
    console.error("Something went wrong");
  }
}
getPokemon();
