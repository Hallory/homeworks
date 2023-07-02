


let sum = 0;
const a = Number(prompt("A: "));
const b = Number(prompt("B: "));
let par = prompt('Bool "false" or "true" : ');
if (!isNaN(a)&&!isNaN(b)) {
    
        for (let i = a; i <= b; i++) {
            if(par == true ){
                if (i%2==0) {
                sum+=i;
            }
            }else{
                sum+=i;
            }
            
               
               
        } 
      
}else{
    alert("Not a number")
}


  

console.log(sum) ;