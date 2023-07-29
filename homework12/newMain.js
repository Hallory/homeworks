const btn = document.querySelector(".get-info-button");
const charactersContainer = document.querySelector(".characters-container");
let currentPage = 1;
let totalPages = 1;
const itemsPerPage = 5;
const charactersPhotos = {
  "Luke Skywalker":
    "https://static.wikia.nocookie.net/jedipedia/images/b/b8/LukeMitLichtschwert.jpg/revision/latest/scale-to-width-down/1647?cb=20150227214206&path-prefix=de",
  "Darth Vader":
    "https://static.wikia.nocookie.net/antagonisten/images/0/08/Vader-sw-promo-1.png/revision/latest?cb=20210222091614&path-prefix=de",
  "R2-D2":
    "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
  "C-3PO":
    "https://lumiere-a.akamaihd.net/v1/images/6023eab8d941ed00018d113f-image_6f532508.jpeg?region=336%2C0%2C864%2C864",
  "Leia Organa":
    "https://static.wikia.nocookie.net/swfanon/images/f/f3/Leia.jpg/revision/latest?cb=20130911173052&path-prefix=de",
  "Wedge Antilles":
    "https://static.wikia.nocookie.net/starwars/images/7/7e/WedgesEntireHead-ROTJ.png/revision/latest?cb=20200511024543",
  Yoda: "https://cdn.prod.www.spiegel.de/images/0f7d4148-0001-0004-0000-000000270988_w1200_r1_fpx50_fpy40.44.jpg",
  Palpatine:
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/0/02/Palpatine_1.jpg?width=1280",
  Lobot:
    "https://static.wikia.nocookie.net/jedipedia/images/b/b2/Lobot.jpg/revision/latest?cb=20060607190716&path-prefix=de",
  "Obi-Wan Kenobi":
    "https://www.imfernsehen.de/gfx/pics/1200/Ewan-Mcgregor-Als-Obi-Wan-Kenobi.jpg",
  "Boba Fett":
    "https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=271%2C18%2C835%2C835",
  "IG-88":
    "https://static.wikia.nocookie.net/starwars/images/f/fe/IG-88B-TESB40.png/revision/latest?cb=20211224193425",
  Chewbacca:
    "https://static.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest/scale-to-width-down/1200?cb=20221108044917",
  "Han Solo":
    "https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg",
  Bossk:
    "https://static.wikia.nocookie.net/jedipedia/images/d/d2/Bossk.jpg/revision/latest?cb=20090224174417&path-prefix=de",
  "Lando Calrissian":
    "https://upload.wikimedia.org/wikipedia/en/c/cb/Lando6-2.jpg",
};
const planetsContainer = document.createElement("div");
btn.onclick = () => {
  getPeople();
};
const peoplesUrl = "https://swapi.dev/api/films/2";
const planetsUrl = "https://swapi.dev/api/planets";
async function getPeople() {
  console.log("Started");
  btn.disabled = true;

  try {
    charactersContainer.innerHTML = "";

    await getPlanet();
    const response = await fetch(peoplesUrl);
    const data = await response.json();
    const characters = data["characters"];
    for (const url of characters) {
      const char = await getInfo(url);
      const characterDiv = document.createElement("div");
      characterDiv.className = "character";
      const characterPhoto = document.createElement("div");
      characterPhoto.className = "character-img";
      characterPhoto.innerHTML = `<img src= "${
        charactersPhotos[char.name]
      }"></img>`;
      const characterInfo = document.createElement("div");
      characterInfo.innerHTML = `<div class="character-details">
            <span class = "character-name">${char.name}</span>
            <span class = "character-birth-date">${char.birth_year}</span>
            <span class = "character-gender">${char.gender}</span>
            </div>`;
      characterDiv.appendChild(characterPhoto);
      characterDiv.appendChild(characterInfo);
      charactersContainer.appendChild(characterDiv);
    }
  } catch (e) {
    console.error(e);
  }
  btn.disabled = false;
}

async function getInfo(filmUrl) {
  try {
    const response = await fetch(filmUrl);
    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e);
  }
}

async function getPlanet() {
  try {
    const planetsData = await getInfo(planetsUrl);
    const planets = planetsData["results"];
    const allPlanets = document.createElement("div");
    allPlanets.className = "allplanet-container";
    planetsContainer.className = "planets-container";
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-container";
    const nextButton = document.createElement("button");
    nextButton.className = "next-button";
    nextButton.textContent = "Next";
    const previousButton = document.createElement("button");
    previousButton.className = "next-button";
    previousButton.textContent = "Previous";
    planetsContainer.innerHTML = "";

    allPlanets.appendChild(planetsContainer);
    charactersContainer.appendChild(allPlanets);
    allPlanets.appendChild(buttonsContainer);
    buttonsContainer.appendChild(previousButton);
    buttonsContainer.appendChild(nextButton);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < planets.length; i++) {
      const planetDiv = document.createElement("div");
      planetDiv.className = "planet-div";
      planetDiv.textContent = planets[i].name;
      planetsContainer.appendChild(planetDiv);
    }
    nextButton.onclick = () => {
        planetsContainer.innerHTML = "";
        forPlanets(Math.ceil(planets.length / 2), planets.length, planets);

    previousButton.onclick = () => {
        planetsContainer.innerHTML = "";
        forPlanets(startIndex, endIndex, planets);
      };
    };
  } catch (e) {
    console.error(e);
  }
}

function forPlanets(startIndex, endIndex, planets) {
  for (let i = startIndex; i < endIndex; i++) {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet-div";
    planetDiv.textContent = planets[i].name;
    planetsContainer.appendChild(planetDiv);
    currentPage = 2;
  }
}
