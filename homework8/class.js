export class Student{
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
            if (this._marks.length === 0) {
                return 0;
            }
            const averageMark = this._marks.reduce((total, mark)=>total+mark)
            return averageMark/this._marks.length;
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
    constructor(university, course, fullName) {
      super(university, course, fullName);
      this.stipendyMark = this.getAverageMark();
      this.getScholarship();
    }
  
    set marks(mark) {
      if (!this.dismissed) {
        super.marks = mark;
        this.stipendyMark = this.getAverageMark();
      } else {
        console.log("Студента виключено, оцінки більше не можна ставити.");
      }
    }
    getScholarship() {
        if (this.dismissed) {
          console.log("Вас виключено, стипендію не отримаєте.");
        } else if (this.stipendyMark >= 4.0) {
          console.log("Середній бал вище 4.0. Стипендія доступна.");
          this.startScholarshipInterval(); // Викликаємо метод для запуску інтервальної перевірки стипендії
        } else {
          console.log("Середній бал нижче 4.0, стипендію не отримаєте.");
        }
      }
    
      startScholarshipInterval() {
        setInterval(() => {
          if (!this.dismissed && this.stipendyMark >= 4.0) {
            console.log("Ви отримали стипендію!");
          }
        }, 30000); // 30 секунд в мілісекундах
      }
    }

  
    
const budgetStudent = new BudgetStudent("Тдату","4","Alek")

console.log(budgetStudent.getAverageMark())

console.log(budgetStudent._marks)
budgetStudent.marks=1;
budgetStudent.marks=3;
budgetStudent.marks=5;
budgetStudent.marks=5;
budgetStudent.marks=5;
budgetStudent.marks=5;
budgetStudent.marks=5;

console.log(budgetStudent.getAverageMark())


