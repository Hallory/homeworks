const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій","Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
let women 
let men
let arr = []
for (let i = 0; i < students.length; i++) {
    const student = students[i];
        if(student.charAt(student.length-1)=='а'||student.charAt(student.length-1)=='я'){
            women = students.filter(sort=>{return (sort.charAt(sort.length-1)=='а')})
           
        }
        else {
            men = students.filter(sort=>{return sort.charAt(sort.length-1)!='а'})
            
        }
        
        
        
}
 console.log(women)
 console.log(men)

 const pairs = [];

 for (let i = 0; i < men.length; i++) {
    const pair = [men[i]+" i "+ women[i]+" thema:"+themes[i]];
    pairs.push(pair);
  }
console.log(pairs)

for (let i = 0; i < students.length; i++) {
    students[i] = [students[i],marks[i]]
    console.log(students[i])

}
