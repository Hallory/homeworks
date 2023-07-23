function getRandomChinese(lenght){
    return new Promise ((resolve, reject)=>{
        let result = ''

        const getRandom = () =>{
            const sign = Date.now().toString().slice(-5);
            const element = String.fromCharCode(sign);
            result+=element;

            if(result.length<lenght){
                setTimeout(getRandom, 50)
            }
            else{
                resolve(result)
            }
        };
        getRandom();
    })
}
getRandomChinese(4)
    .then((result)=>{
        console.log(result)
    })




































