class Student{
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.isDismissed = false;
        this._marks = [5,4,4,5];
    }
    getInfo(){
        return `Студент ${this.university}  ${this.course}го курсу  ${this.fullName}`
    }
    
        
        get marks(){
            return this.isDismissed ? null : this._marks
            
        }
        set marks(mark){
            if (!this.isDismissed) {
                    this._marks.push(mark)
                }
        }
        getAverageMark(){
            if (this.marks.length === 0) {
                return 0;
            }
            const averageMark = this.marks.reduce((total, mark)=>total+mark)
            return averageMark/this.marks.length;
            }
        dismiss(){
            this.isDismissed = true;
                
        }
        recover(){
            this.isDismissed = false;
                
        }
}

const student = new Student("Тдату","4","Микита");

console.log(student.getInfo())
console.log(student.getAverageMark())

console.log(student._marks)
student.dismiss()
console.log(student.marks)
student.marks = 5;
console.log(student.marks)
student.recover()
console.log(student.marks)




class BudgetStudent extends Student {
    
    constructor(university, course, fullName){
        super(university, course, fullName);
        this._marks = this.marks
        this.stipendyMark = this.getAverageMark();
        
        this.getScholarship();
            
        
        
    }
    getScholarship(){
        
        setInterval(() => {
            console.log("stipendy");
            console.log(this.stipendyMark)
        }, 30000);
}
    
}

    
const budgetStudent = new BudgetStudent("Тдату","4","Alek")

console.log(budgetStudent.getAverageMark())

console.log(budgetStudent._marks)
budgetStudent.marks=1;
budgetStudent.marks=3;
budgetStudent.marks=2;



console.log(budgetStudent.marks)
console.log(budgetStudent.getAverageMark())


