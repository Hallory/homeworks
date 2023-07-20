class Student{
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.isDismissed = false;
        this._marks = [5,4,4,5]
    }
    getInfo(){
        return `Студент ${this.university}  ${this.course}го курсу  ${this.fullName}`
    }
    getAverageMark(){
        if (this._marks.length === 0) {
            return 0;
        }
        const averageMark = this._marks.reduce((total, mark)=>total+mark)
        return averageMark/this._marks.length;
        }
        
        get marks(){
            return this.isDismissed ? null : this._marks
            
        }
        set marks(mark){
            if (!this.isDismissed) {
                    this._marks.push(mark)
                }
            }
            dismiss(){
                this.isDismissed = true;
                this._marks = null;
            }
            recover(){
                this.isDismissed = false;
                this._marks = []
            }
}

const student = new Student("Тдату","4","Микита");

console.log(student.getInfo())
console.log(student.getAverageMark())

console.log(student._marks)
student.dismiss()
console.log(student._marks)
student.recover()
console.log(student._marks)

class BudgetStudent extends Student {
    constructor(university, course, fullName){
        super(university, course, fullName);
        this.getScholarship();
        this.budgetMark = this.getAverageMark();
    }
    getScholarship(){
        if(this.budgetMark>4){
        setInterval(() => {
            console.log("Ви отримали 1400грн стипендії")
            
        }, 30000);
    }
    else{
        setInterval(() => {
            console.log("низький бал")
            
        }, 30000);
        
    }
    };
    
    
}

const budgetStudent = new BudgetStudent("Тдату","4","Alek")
console.log(budgetStudent.getAverageMark())

budgetStudent.marks = 1
budgetStudent.marks = 1
budgetStudent.marks = 5
budgetStudent.marks = 5
budgetStudent.marks = 5
budgetStudent.marks = 5
budgetStudent.marks = 5
budgetStudent.marks = 5
budgetStudent.marks = 5

console.log(budgetStudent._marks)
console.log(budgetStudent.getAverageMark())
