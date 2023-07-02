let sony = 15.678;
let apple = 123.965;
let samsung = 90.2345;



console.log("Мінімальне: "+(Math.min(sony, samsung, apple)));
console.log("Максимальне: "+(Math.max(sony, samsung, apple)));

let sum = sony+apple+samsung;
console.log("Сума: "+(Math.floor(sum)));
console.log("Парне? : "+(Math.floor(sum)?sum%2 == true:false));   
console.log("Решта: "+(500-sum));
console.log("Округлення до ста: "+(Math.ceil(sum/100)*100));

const randomValue = Math.random()*10;
console.log("Знижка: "+randomValue)

console.log("Решта зі знижкою: "+(500-sum+randomValue).toFixed(2));


