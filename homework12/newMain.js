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
  "Yoda": 
    "https://cdn.prod.www.spiegel.de/images/0f7d4148-0001-0004-0000-000000270988_w1200_r1_fpx50_fpy40.44.jpg",
  "Palpatine":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/0/02/Palpatine_1.jpg?width=1280",
  "Lobot":
    "https://static.wikia.nocookie.net/jedipedia/images/b/b2/Lobot.jpg/revision/latest?cb=20060607190716&path-prefix=de",
  "Obi-Wan Kenobi":
    "https://www.imfernsehen.de/gfx/pics/1200/Ewan-Mcgregor-Als-Obi-Wan-Kenobi.jpg",
  "Boba Fett":
    "https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=271%2C18%2C835%2C835",
  "IG-88":
    "https://static.wikia.nocookie.net/starwars/images/f/fe/IG-88B-TESB40.png/revision/latest?cb=20211224193425",
  "Chewbacca":
    "https://static.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest/scale-to-width-down/1200?cb=20221108044917",
  "Han Solo":
    "https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg",
  "Bossk":
    "https://static.wikia.nocookie.net/jedipedia/images/d/d2/Bossk.jpg/revision/latest?cb=20090224174417&path-prefix=de",
  "Lando Calrissian":
    "https://upload.wikimedia.org/wikipedia/en/c/cb/Lando6-2.jpg",
  "Owen Lars":
     "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/06/23065127/Uncle-Owen.jpg",
  "Beru Whitesun lars":
    "https://static.wikia.nocookie.net/starwars/images/8/84/BeruWhitesunLars.jpg/revision/latest?cb=20070625220148",
  "R5-D4":
    "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666",
  "Biggs Darklighter":
    "https://static.wikia.nocookie.net/jedipedia/images/a/a6/Biggs_darklighter.jpg/revision/latest?cb=20140714193136&path-prefix=de",
  "Wilhuff Tarkin":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/b/bc/Wilhuff_tarkin_bio_pic.jpeg",
  "Greedo":
    "https://www.cnet.com/a/img/resize/a52e1fb6dae2773b3d98c752daa6a28627066c49/hub/2019/11/12/d8253cd2-87f8-414e-81b7-a174196c040a/greedo-1.jpg?auto=webp&fit=crop&height=675&width=1200",
  "Jabba Desilijic Tiure":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRki680ghyccqKBwAYh1g2f-_3Vh9FoFiA-4A&usqp=CAU",
  "Jek Tono Porkins":
    "https://static.wikia.nocookie.net/rustarwars/images/3/39/%D0%9F%D0%BE%D1%80%D0%BA%D0%B8%D0%BD%D1%81.jpg/revision/latest/thumbnail/width/360/height/360?cb=20220309183207",
  "Raymus Antilles":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd60LEYA25x6fWKrZsVNWc3S13piVtlLtXEA&usqp=CAU",
  "Ackbar":
    "https://www.looper.com/img/gallery/the-touching-meaning-behind-admiral-ackbars-character-design/l-intro-1619268734.jpg",
  "Mon Mothma":
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/09/mon-mothma-andor-1.jpg",
  "Arvel Crynyd":
    "https://www.starwars-union.de/bilder/lexikon/20080112crynyd.jpg",
  "Wicket Systri Warrick":
    "https://static.wikia.nocookie.net/starwars/images/9/95/Deej.jpg/revision/latest/zoom-crop/width/500/height/500?cb=20071126024245",
  "Nien Nunb":
    "https://lumiere-a.akamaihd.net/v1/images/nien-nunb-main_1dbef681.jpeg",
  "Bib Fortuna":
    "https://static.wikia.nocookie.net/jedipedia/images/0/0c/Bib_Fortuna_%28The_Mandalorian%29.png/revision/latest?cb=20201221123814&path-prefix=de",
  "Nute Gunray":
    "https://static.wikia.nocookie.net/jedipedia/images/2/2f/Nute.jpg/revision/latest?cb=20100613092620&path-prefix=de",
  "Ayla Secura":
    "https://static.wikia.nocookie.net/jedipedia/images/b/bc/Aayla_Secura.jpg/revision/latest?cb=20070928224428&path-prefix=de",
  "Ki-Adi-Mundi":
    "https://static.wikia.nocookie.net/headhuntersholosuite/images/7/79/Ki-Adi-Mundi.jpg/revision/latest?cb=20190223224114",
  "Kit Fisto":
    "https://lumiere-a.akamaihd.net/v1/images/databank_kitfisto_01_169_21517d01.jpeg?region=436%2C0%2C878%2C878",
  "Eeth Koth":
    "https://static.wikia.nocookie.net/starwars/images/2/28/Eeth_Koth_TPM.png/revision/latest?cb=20131103212106",
  "Grievous":
    "https://upload.wikimedia.org/wikipedia/en/5/54/General_Grievous.png",
  "Tarfful":
    "https://static.wikia.nocookie.net/starwarsofthecaribbean/images/5/5a/Tarfful_new.jpg/revision/latest?cb=20191210202303",
  "Anakin Skywalker":
    "https://static.wikia.nocookie.net/jedipedia/images/f/fe/Anakinportr%C3%A4t.png/revision/latest?cb=20130622174740&path-prefix=de",
  "Jabba Desilijic Tiure":
    "https://static.wikia.nocookie.net/jedipedia/images/b/be/Jabba.jpg/revision/latest?cb=20060528110014&path-prefix=de",
  "Qui-Gon Jinn":
    "https://static.wikia.nocookie.net/jedipedia/images/f/f8/Quigon.jpg/revision/latest?cb=20091107155228&path-prefix=de",
  "Nute Gunray":
    "https://lumiere-a.akamaihd.net/v1/images/databank_nutegunray_01_169_9d66ded2.jpeg?region=195%2C0%2C1171%2C878",
  "Finis Valorum":
    "https://lumiere-a.akamaihd.net/v1/images/valorum_a31904f4.jpeg?region=572%2C0%2C955%2C955",
  "Padmé Amidala":
    "https://image.film.at/images/cfs_landscape_1864w_1049h/7903553/padme-amidala-feat.jpg",
  "Jar Jar Binks":
    "https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg?region=230%2C0%2C878%2C878",
  "Roos Tarpals":
    "https://lumiere-a.akamaihd.net/v1/images/databank_generaltarpals_01_169_cb2134d2.jpeg?region=0%2C49%2C1560%2C780",
  "Rugor Nass":
    "https://static.wikia.nocookie.net/jedipedia/images/8/89/Boss_Nass.jpg/revision/latest?cb=20060527115006&path-prefix=de",
  "Ric Olié":
    "https://static.wikia.nocookie.net/starwars/images/6/6f/RicOlie1.png/revision/latest?cb=20130129043831",
  "Watto":
    "https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg/revision/latest?cb=20081222024729",
  "Sebulba":
    "https://static.wikia.nocookie.net/jedipedia/images/7/7d/Sebulba-Portr%C3%A4t.PNG/revision/latest?cb=20140315150004&path-prefix=de",
  "Quarsh Panaka":
    "https://lumiere-a.akamaihd.net/v1/images/databank_captainpanaka_01_169_6a3ccac5.jpeg?region=341%2C0%2C878%2C878",
  "Shmi Skywalker":
    "https://static.wikia.nocookie.net/starwars/images/6/6c/ShmiSkywalkerLars-Databank.jpg/revision/latest?cb=20171114023541",
  "Darth Maul":
    "https://static.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png/revision/latest?cb=20140209162228",
  "Ayla Secura":
    "https://upload.wikimedia.org/wikipedia/ru/8/8a/%D0%AD%D0%B9%D0%BB%D0%B0_%D0%A1%D0%B5%D0%BA%D1%83%D1%80%D0%B0.webp",
  "Ratts Tyerel":
    "https://static.wikia.nocookie.net/starwars/images/0/05/Finalmoments.jpg/revision/latest?cb=20060614131230",
  "Dud Bolt":
    "https://static.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png/revision/latest?cb=20141214155313",
  "Gasgano":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIVuppklYAcblz6reNAQ7e6qbJqgrGDLTV13kqe4jt&s",
  "Ben Quadinaros":
    "https://lumiere-a.akamaihd.net/v1/images/databank_benquadinaros_01_169_0c77b6a0.jpeg?region=0%2C0%2C1560%2C878",
  "Mace Windu":
    "https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C51%2C1638%2C819",
  "Ki-Adi-Mundi":
    "https://lumiere-a.akamaihd.net/v1/images/databank_kiadimundi_01_169_0a8842d3.jpeg?region=0%2C49%2C1560%2C780",
  "Kit Fisto":
    "https://lumiere-a.akamaihd.net/v1/images/databank_kitfisto_01_169_21517d01.jpeg?region=436%2C0%2C878%2C878",
  "Eeth Koth":
    "https://lumiere-a.akamaihd.net/v1/images/Eeth-Koth2_246ea172.jpeg?region=24%2C12%2C1112%2C556",
  "Adi Gallia":
    "https://lumiere-a.akamaihd.net/v1/images/databank_adigallia_169_8b798f27.jpeg?region=0%2C0%2C1560%2C780",
  "Saesee Tiin":
    "https://static.wikia.nocookie.net/jedipedia/images/f/ff/SaeseeTiin.jpg/revision/latest?cb=20060603154138&path-prefix=de",
  "Yarael Poof":
    "https://static.wikia.nocookie.net/starwars/images/9/96/Yarael_Poof.png/revision/latest?cb=20131112121643",
  "Plo Koon":
    "https://static.wikia.nocookie.net/jedipedia/images/6/6e/PloKoonPortr%C3%A4t.jpg/revision/latest?cb=20100425120213&path-prefix=de",
  "Mas Amedda":
    "https://static.wikia.nocookie.net/rustarwars/images/3/3f/Mas12432.jpg/revision/latest?cb=20140530102439",
  "Gregar Typho":
    "https://static.wikia.nocookie.net/starwars/images/5/52/Gregar_Typho.jpg/revision/latest?cb=20090903192036",
  "Cordé":
    "https://static.wikia.nocookie.net/jedipedia/images/d/de/Cord%C3%A9.jpg/revision/latest?cb=20060719130333&path-prefix=de",
  "Cliegg Lars":
    "https://lumiere-a.akamaihd.net/v1/images/databank_cliegglars_01_169_c2f0b9cb.jpeg?region=0%2C49%2C1560%2C780",
  "Poggle the Lesser":
    "https://static.wikia.nocookie.net/starwars/images/7/79/Poggle_Geo.jpg/revision/latest?cb=20080118201719",
  "Luminara Unduli":
    "https://lumiere-a.akamaihd.net/v1/images/luminara_c05b2971.jpeg?region=0%2C0%2C1601%2C901",
  "Barriss Offee":
    "https://lumiere-a.akamaihd.net/v1/images/Barriss-Offee-main-image_a4f0cc76.jpeg?region=27%2C0%2C1640%2C821",
  "Dormé":
    "https://static.wikia.nocookie.net/rustarwars/images/8/8b/Dorme.jpg/revision/latest?cb=20120719182734",
  "Dooku":
    "https://static.wikia.nocookie.net/jedipedia/images/b/b9/Count_Dooku_Profil.jpg/revision/latest?cb=20200804145028&path-prefix=de",
  "Bail Prestor Organa":
    "https://static.wikia.nocookie.net/jedipedia/images/0/0d/Bail.jpg/revision/latest?cb=20060528210228&path-prefix=de",
  "Jango Fett":
    "https://static.wikia.nocookie.net/jedipedia/images/3/37/Jango_Wallpaper.png/revision/latest?cb=20200911124208&path-prefix=de",
  "Zam Wesell": "https://www.starwars-union.de/bilder/lexikon/20060704Zam.jpg",
  "Dexter Jettster":
    "https://lumiere-a.akamaihd.net/v1/images/databank_dexterjettster_01_169_09c89b71.jpeg?region=0%2C0%2C1560%2C878",
  "Lama Su":
    "https://static.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg/revision/latest?cb=20080117165735",
  "Taun We":
    "https://static.wikia.nocookie.net/starwars/images/3/30/Taun_We-Databank.jpg/revision/latest?cb=20200902052514",
  "Jocasta Nu":
    "https://static.wikia.nocookie.net/starwars/images/4/44/Jocasta_Nu.jpg/revision/latest?cb=20090909121527",
  "R4-P17": "https://lumiere-a.akamaihd.net/v1/images/r4-p17_19602f62.jpeg",
  "Wat Tambor":
    "https://www.syfy.com/sites/syfy/files/2019/12/wat-tambor-attack-of-the-clones-header.jpg",
  "San Hill":
    "https://static.wikia.nocookie.net/starwars/images/f/f5/SanHill-SWM43.png/revision/latest/scale-to-width-down/270?cb=20211109212022",
  "Shaak Ti":
    "https://lumiere-a.akamaihd.net/v1/images/shaak_ti_9523e7c7.jpeg?region=241%2C0%2C1438%2C809",
  "Sly Moore":
    "https://static.wikia.nocookie.net/rustarwars/images/9/9e/SlyMoore.jpg/revision/latest?cb=20120522072525",
  "Tion Medon":
    "https://static.wikia.nocookie.net/jedipedia/images/4/43/Tion_Medon.jpg/revision/latest?cb=20060810191638&path-prefix=de",
};
const btnWookiee = document.querySelector(".wookiee");
let selectElement = document.querySelector(".films__chooser");

const planetsContainer = document.createElement("div");
const wookieeFormat = '?format=wookiee';
btn.onclick = () => {
  getPeople();
};
btnWookiee.onclick = (isWookie = false) => {
  getPeople(true);
};

const planetsUrl = "https://swapi.dev/api/planets";

async function getPeople(isWookie = false) {
  console.log("Started");
  btn.disabled = true;

  try {
    
    const selectValue = selectElement.value;
    const peoplesUrl = `https://swapi.dev/api/films/${selectValue}`;
  
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


  