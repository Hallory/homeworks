export const getRandomArray = (length, max, min)=>{
    
    const myArr =  [...Array(length)]
    //const random = Math.floor(Math.random()*(max-min+1))+min;
    
    return Array.from(myArr, ()=>Math.floor(Math.random()*(max-min+1))+min)

    //return Array.from(Array(length), ()=>Math.floor(Math.random()*(max-min+1))+min)
    
}
let result = getRandomArray(10,-35,100)
console.log(result)

const countPositiveNumber = () =>{
    let countPositive = 0
    for (let i = 0; i < result.length; i++) {
        if(result[i]>0){
            countPositive++
        }
        
    }
    return countPositive;
}   
console.log("Чисел більше 0: "+countPositiveNumber())

const getDividedByFive = ()=>{
    let isNotDevidedNumber = result => result %5 !== 0;
    let devidedNumber = result.filter(isNotDevidedNumber)
    return devidedNumber;
}
console.log("Фільтр 5: "+getDividedByFive())

const getModa = ()=>{
    
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


