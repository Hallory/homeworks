function getRandomColor(){
    let color = "#";
    let randomColor = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        color += randomColor[Math.floor(Math.random()*16)]
    }
    return color;
}




function generateBlocks(){
const  container = document.querySelector(".container")

const maxBox = 25;

const maxBoxPerLine = 5;

container.innerHTML = "";


for (let i = 0; i < maxBox; i++) {
    const color = getRandomColor();
    const newBox = document.createElement("div");
    newBox.textContent = "Box" + (i+1);
    newBox.className = "my-block";
    newBox.style.backgroundColor = color;
    container.appendChild(newBox);
    
    if ((i+1)%maxBoxPerLine === 0) {
       container.appendChild(document.createElement("br"));
    }
    
}


}

function generateBlocksInterval(){
    setInterval(generateBlocks, 1000)
    return true
}
















































