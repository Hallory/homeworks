const getRandomArray = (length, max, min)=>{
    
    const myArr =  [...Array(length)]
    //const random = Math.floor(Math.random()*(max-min+1))+min;
    
    return Array.from(myArr, ()=>Math.floor(Math.random()*(max-min+1))+min)

    //return Array.from(Array(length), ()=>Math.floor(Math.random()*(max-min+1))+min)
    
}
let result = getRandomArray(10,1,100)

const getModa = ()=>{
    console.log(result)
    let modaNumber = 0;
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < i; j++) {
            if(result[j]===result[i]){
                modaNumber = result[i]
            }
            
        }
    }
    return modaNumber
}

console.log("Це число повторюється: "+getModa())

const getAverage=()=>{
    let averageNumber = 0;
    for (let i = 0; i < result.length; i++) {
        averageNumber += result[i]
        
    }
    return averageNumber/result.length
}
console.log("Середнє арифметичне є: "+getAverage())


const getMedian=()=>{
    
    let twoMedianNumber = result.sort((function(a,b){
        return a - b;
    })).slice(-2);
    console.log(twoMedianNumber)
    let medianNumber = (twoMedianNumber[0]+twoMedianNumber[1])/2
    
    return medianNumber
}
console.log("Медіаною є число: "+getMedian())