const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій","Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
let women 
let men
let arr = []
function getPair(students){

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
     
}

getPair(students)
let pairs = [];
function getThemes(pairs){
    

     for (let i = 0; i < men.length; i++) {
        const pair = [men[i]+" i "+ women[i]+" thema:"+themes[i]];
        pairs.push(pair);
      }
    return(pairs)
}
console.log(getThemes(pairs))
 

function getMark(students,marks){
    for (let i = 0; i < students.length; i++) {
        students[i] = [students[i],marks[i]]
        console.log(students[i])
        
    }
}
getMark(students, marks)

