




















// class Student{
    
//     constructor(options){
//         this.fullName = options.fullName;
//         this.universaity = options.university;
//         this.course = options.course;
//         this.city = options.city;
//         this.isDismissed = false;
//         this._marks = [5,4,4,5]
//     }

//     getInfo(){
//         return `Студент ${this.course}го курсу ${this.universaity} м.${this.city}${this.fullName}`
//     }
//     getAverageMark(){
//         if (this.marks.length ===0) {
//             return 0;
//         }
//         const sum = this.marks.reduce((total, mark)=>total+mark, 0)
//         return sum/this._marks.length;
//     }

//     get marks(){
//         return this.isDismissed ? null : this._marks
//     }
//     set marks(mark){
//         if (!this.isDismissed) {
//             this._marks.push(mark)
//         }
//     }
//     dismiss(){
//         this.isDismissed = true;
//         this._marks = null;
//     }
//     recover(){
//         this.isDismissed = false;
//         this._marks = []
//     }
// }
// const student = new Student(1, "Вищої Школи Психотерапії", "Одеса", "Остап Родоманський Бендер");

// console.log(student.getInfo()); 
// console.log(student.marks); // Виводить: [5, 4, 4, 5]
// console.log(student.getAverageMark()); // Виводить: 4.5

// student.marks = 5;
// console.log(student.marks); // Виводить: [5, 4, 4, 5, 5]

// student.dismiss();
// console.log(student.marks); // Виводить: null

// student.marks = 5; // Не зможемо поставити оцінку після виключення

// student.recover();
// console.log(student.marks); // Виводить: []

// student.marks = 3;
// console.log(student.marks); // Виводить: [3]

// class BudgetStudent extends Student{
//     constructor(options){
//         super(options);
//         this._scholarschipInterval = null;
   
//         this.getScholarship();
//      }
//      getScholarship(){
//         clearInterval(this._scholarschipInterval)

//         this._scholarschipInterval = setInterval(() => {
//             if(!this.isDismissed && this.getAverageMark()>=4.0){
//                 console.log(`Ви отримали 1400 грн. стипендії`)
//             }
//         }, 30000);
//      }
// }

// const budgetStudent = new BudgetStudent(1,"Вищої Школи Психотерапії", "Одеса", "Остап Родоманський Бендер");

// console.log(budgetStudent.getInfo());
// console.log(budgetStudent.marks);
// console.log(budgetStudent.getAverageMark());

// budgetStudent.marks = 5;
// console.log(budgetStudent.marks);

// budgetStudent.dismiss();
// console.log(budgetStudent.marks);

// budgetStudent.marks = 5;

