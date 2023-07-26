const btn = document.querySelector(".getChar")
const container = document.querySelector(".container")

const charactersPhotos = 
    {name:"Luke Skywalker", url:'https://static.wikia.nocookie.net/jedipedia/images/b/b8/LukeMitLichtschwert.jpg/revision/latest/scale-to-width-down/1647?cb=20150227214206&path-prefix=de'}


const delay = (ms)=>{
    return new Promise (r =>setTimeout(()=>r(), ms))
}
const peopleUrl = 'https://swapi.dev/api/films/2';
async function getPeople(){
    console.log("started")

   try {
    await delay(500);
    const response = await fetch(peopleUrl);
    const data = await response.json();
    const characters = data['characters'];

    container.innerHTML = '';

    for (const pers in characters) {
        if (Object.hasOwnProperty.call(characters, pers)) {
            const char  =  getInfo(characters[pers]);
            const icon = document.createElement("div");
            icon.className = 'icon';
            const charDescription = document.createElement("div");
            charDescription.className = 'charDescription'
            const imgDiv = document.createElement("div");
            imgDiv.className = 'imageDiv';
            char.then((result)=>{
                container.appendChild(icon);
                icon.appendChild(imgDiv)
                imgDiv.innerHTML = `<img src = ${charactersPhotos.url}></img> `
                icon.appendChild(charDescription);
                charDescription.textContent = result;
            })
            
            
            
            
            
        }
}       
   }
   catch(e){
    console.error(e)
   }
}
async function getInfo(url) {
    try{
        await delay(500)
        const response=await fetch(url)
        const data=await response.json()
        return(`${data.name},${data.gender},${data.birth_year}`)
    }catch(e){
        console.error(e)
    }
}

btn.onclick = getPeople