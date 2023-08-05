export const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];


    export function getAvarageMark(student) {
        let arr = [] ;
        let result = 0;
        for (const subject in student.subjects) {
          let newArr=student.subjects[subject]
          for(let i=0;i<newArr.length;i++){
            arr.push(newArr[i])
            
           
          }
          
        }
        for (let i = 0; i < arr.length; i++) {
             result = (result + arr[i]);
            
        }
        
        return((result/arr.length).toFixed(2))
        
      }

      console.log(getAvarageMark(students[2]))


      const getStudentInfo=(student)=>{


        return `Name: ${student.name}\tCourse:${student.course}\t Average:  ${getAvarageMark(student)}`
      }
      console.log(getStudentInfo(students[1]))


      const getStudentsName = (student)=>{
        let arr = []
        student.map((student)=>{
            arr.push(student.name)
        })
        return arr.sort()
      }

      console.log(getStudentsName(students))

      const getBestStudent = (student)=>{
        let best = 0;
        let name ;
        student.map((student)=>{
            if(getAvarageMark(student)>best){
                best = getAvarageMark(student)
                name = student.name
            }
        })
        
        return(name +" "+ best)
      }
      console.log(getBestStudent(students))

     

      const calculateWordLetters = (word) => {
        let splitedWord = word.split('');
        let count = {};
      
        for (let i = 0; i < splitedWord.length; i++) {
          let currentLetter = splitedWord[i];
      
          if (!count[currentLetter]) {
            count[currentLetter] = 1;
          } else {
            count[currentLetter]++;
          }
        }
      
        
      
        
        return count;
      };
      
      console.log(calculateWordLetters("xxxtentacion"));











function getFirstLetterBig(word) {
    let newWord=word.charAt(0).toUpperCase()+word.slice(1)
    return newWord
  }
  function changeSymbols(word) {
    let newWord=word.split('_').join(' ')
    return newWord
  }
  
  function getSubjects(student) {
    let res=[]
    for(let prop in student.subjects){
      res.push(changeSymbols(getFirstLetterBig(prop)))
    }
    console.log(res)
  }
  
  getSubjects(students[0])