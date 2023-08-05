 export function* createIdGenerator(){
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}
const idGenerator = createIdGenerator();


const upBtn = document.querySelector('.upBtn');
const downBtn = document.querySelector('.downBtn');
const container = document.querySelector('.container');

function* newFornGenerator(startSize){
    let fontSize = startSize;
    while(true){
    const direction = yield fontSize
            if (direction === "up") {
                fontSize+=2
    }
            else if(direction === "down"){
                fontSize-=2
    }
    }
    
}

const fontGenerator = newFornGenerator(14);
const initialFontSize = fontGenerator.next().value;
container.style.fontSize = `${initialFontSize}px`;

upBtn.addEventListener('click', ()=>{
    const newSize = fontGenerator.next("up").value;
    container.style.fontSize = `${newSize}px`
    console.log(newSize)
})
downBtn.addEventListener('click', ()=>{
    const newSize = fontGenerator.next("down").value;
    container.style.fontSize = `${newSize}px`
    console.log(newSize)

})
