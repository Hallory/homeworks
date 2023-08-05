/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homework4_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../homework4/main */ \"../homework4/main.js\");\n/* harmony import */ var _homework5_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../homework5/main */ \"../homework5/main.js\");\n/* harmony import */ var _homework6_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../homework6/main */ \"../homework6/main.js\");\n/* harmony import */ var _homework7_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../homework7/main */ \"../homework7/main.js\");\n/* harmony import */ var _homework8_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../homework8/class */ \"../homework8/class.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log((0,_homework4_main__WEBPACK_IMPORTED_MODULE_0__.getPair)(_homework4_main__WEBPACK_IMPORTED_MODULE_0__.students1))\n\n//# sourceURL=webpack://homework15/./main.js?");

/***/ }),

/***/ "../homework4/main.js":
/*!****************************!*\
  !*** ../homework4/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPair: () => (/* binding */ getPair),\n/* harmony export */   students1: () => (/* binding */ students1)\n/* harmony export */ });\nconst students1 = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\",\"Світлана\"];\r\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\",\r\n\"Алгоритми і структури даних\"];\r\nconst marks = [4, 5, 5, 3, 4, 5];\r\nlet women \r\nlet men\r\nlet arr = []\r\n function getPair(students){\r\n\r\n    for (let i = 0; i < students.length; i++) {\r\n        const student = students[i];\r\n            if(student.charAt(student.length-1)=='а'||student.charAt(student.length-1)=='я'){\r\n                women = students.filter(sort=>{return (sort.charAt(sort.length-1)=='а')})\r\n               \r\n            }\r\n            else {\r\n                men = students.filter(sort=>{return sort.charAt(sort.length-1)!='а'})\r\n                \r\n            }\r\n            \r\n            \r\n            \r\n    }\r\n     console.log(women)\r\n     console.log(men)\r\n     \r\n}\r\n\r\ngetPair(students)\r\nlet pairs = [];\r\nfunction getThemes(pairs){\r\n    \r\n\r\n     for (let i = 0; i < men.length; i++) {\r\n        const pair = [men[i]+\" i \"+ women[i]+\" thema:\"+themes[i]];\r\n        pairs.push(pair);\r\n      }\r\n    return(pairs)\r\n}\r\nconsole.log(getThemes(pairs))\r\n \r\n\r\nfunction getMark(students,marks){\r\n    for (let i = 0; i < students.length; i++) {\r\n        students[i] = [students[i],marks[i]]\r\n        console.log(students[i])\r\n        \r\n    }\r\n}\r\ngetMark(students, marks)\r\n\r\nfunction getMarkForProject(pairs){\r\n    let x ;\r\n    for (let i = 0; i < pairs.length; i++) {\r\n        pairs[i].push(...[i], x=Math.random()*5)\r\n        console.log(pairs[i])\r\n    }\r\n    \r\n}\r\ngetMarkForProject(pairs)\n\n//# sourceURL=webpack://homework15/../homework4/main.js?");

/***/ }),

/***/ "../homework5/main.js":
/*!****************************!*\
  !*** ../homework5/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandomArray: () => (/* binding */ getRandomArray)\n/* harmony export */ });\nconst getRandomArray = (length, max, min)=>{\r\n    \r\n    const myArr =  [...Array(length)]\r\n    //const random = Math.floor(Math.random()*(max-min+1))+min;\r\n    \r\n    return Array.from(myArr, ()=>Math.floor(Math.random()*(max-min+1))+min)\r\n\r\n    //return Array.from(Array(length), ()=>Math.floor(Math.random()*(max-min+1))+min)\r\n    \r\n}\r\nlet result = getRandomArray(10,-35,100)\r\nconsole.log(result)\r\n\r\nconst countPositiveNumber = () =>{\r\n    let countPositive = 0\r\n    for (let i = 0; i < result.length; i++) {\r\n        if(result[i]>0){\r\n            countPositive++\r\n        }\r\n        \r\n    }\r\n    return countPositive;\r\n}   \r\nconsole.log(\"Чисел більше 0: \"+countPositiveNumber())\r\n\r\nconst getDividedByFive = ()=>{\r\n    let isNotDevidedNumber = result => result %5 !== 0;\r\n    let devidedNumber = result.filter(isNotDevidedNumber)\r\n    return devidedNumber;\r\n}\r\nconsole.log(\"Фільтр 5: \"+getDividedByFive())\r\n\r\nconst getModa = ()=>{\r\n    \r\n    let modaNumber = 0;\r\n    for (let i = 0; i < result.length; i++) {\r\n        for (let j = 0; j < i; j++) {\r\n            if(result[j]===result[i]){\r\n                modaNumber = result[i]\r\n            }\r\n            \r\n        }\r\n    }\r\n    return modaNumber\r\n}\r\n\r\nconsole.log(\"Це число повторюється: \"+getModa())\r\n\r\nconst getAverage=()=>{\r\n    let averageNumber = 0;\r\n    for (let i = 0; i < result.length; i++) {\r\n        averageNumber += result[i]\r\n        \r\n    }\r\n    return averageNumber/result.length\r\n}\r\nconsole.log(\"Середнє арифметичне є: \"+getAverage())\r\n\r\n\r\nconst getMedian=()=>{\r\n    \r\n    let twoMedianNumber = result.sort((function(a,b){\r\n        return a - b;\r\n    })).slice(-2);\r\n    console.log(twoMedianNumber)\r\n    let medianNumber = (twoMedianNumber[0]+twoMedianNumber[1])/2\r\n    \r\n    return medianNumber\r\n}\r\nconsole.log(\"Медіаною є число: \"+getMedian())\r\n\r\n\r\n\n\n//# sourceURL=webpack://homework15/../homework5/main.js?");

/***/ }),

/***/ "../homework6/main.js":
/*!****************************!*\
  !*** ../homework6/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAvarageMark: () => (/* binding */ getAvarageMark),\n/* harmony export */   students: () => (/* binding */ students)\n/* harmony export */ });\nconst students = [{\r\n    name: \"Tanya\",\r\n    course: 3,\r\n    subjects: {\r\n    math: [4, 4, 3, 4],\r\n    algorithms: [3, 3, 3, 4, 4, 4],\r\n    data_science: [5, 5, 3, 4]\r\n    }\r\n    }, {\r\n    name: \"Victor\",\r\n    course: 4,\r\n    subjects: {\r\n    physics: [5, 5, 5, 3],\r\n    economics: [2, 3, 3, 3, 3, 5],\r\n    geometry: [5, 5, 2, 3, 5]\r\n    }\r\n    }, {\r\n    name: \"Anton\",\r\n    course: 2,\r\n    subjects: {\r\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\r\n    english: [5, 3],\r\n    cosmology: [5, 5, 5, 5]\r\n    }\r\n    }];\r\n\r\n\r\n    function getAvarageMark(student) {\r\n        let arr = [] ;\r\n        let result = 0;\r\n        for (const subject in student.subjects) {\r\n          let newArr=student.subjects[subject]\r\n          for(let i=0;i<newArr.length;i++){\r\n            arr.push(newArr[i])\r\n            \r\n           \r\n          }\r\n          \r\n        }\r\n        for (let i = 0; i < arr.length; i++) {\r\n             result = (result + arr[i]);\r\n            \r\n        }\r\n        \r\n        return((result/arr.length).toFixed(2))\r\n        \r\n      }\r\n\r\n      console.log(getAvarageMark(students[2]))\r\n\r\n\r\n      const getStudentInfo=(student)=>{\r\n\r\n\r\n        return `Name: ${student.name}\\tCourse:${student.course}\\t Average:  ${getAvarageMark(student)}`\r\n      }\r\n      console.log(getStudentInfo(students[1]))\r\n\r\n\r\n      const getStudentsName = (student)=>{\r\n        let arr = []\r\n        student.map((student)=>{\r\n            arr.push(student.name)\r\n        })\r\n        return arr.sort()\r\n      }\r\n\r\n      console.log(getStudentsName(students))\r\n\r\n      const getBestStudent = (student)=>{\r\n        let best = 0;\r\n        let name ;\r\n        student.map((student)=>{\r\n            if(getAvarageMark(student)>best){\r\n                best = getAvarageMark(student)\r\n                name = student.name\r\n            }\r\n        })\r\n        \r\n        return(name +\" \"+ best)\r\n      }\r\n      console.log(getBestStudent(students))\r\n\r\n     \r\n\r\n      const calculateWordLetters = (word) => {\r\n        let splitedWord = word.split('');\r\n        let count = {};\r\n      \r\n        for (let i = 0; i < splitedWord.length; i++) {\r\n          let currentLetter = splitedWord[i];\r\n      \r\n          if (!count[currentLetter]) {\r\n            count[currentLetter] = 1;\r\n          } else {\r\n            count[currentLetter]++;\r\n          }\r\n        }\r\n      \r\n        \r\n      \r\n        \r\n        return count;\r\n      };\r\n      \r\n      console.log(calculateWordLetters(\"xxxtentacion\"));\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction getFirstLetterBig(word) {\r\n    let newWord=word.charAt(0).toUpperCase()+word.slice(1)\r\n    return newWord\r\n  }\r\n  function changeSymbols(word) {\r\n    let newWord=word.split('_').join(' ')\r\n    return newWord\r\n  }\r\n  \r\n  function getSubjects(student) {\r\n    let res=[]\r\n    for(let prop in student.subjects){\r\n      res.push(changeSymbols(getFirstLetterBig(prop)))\r\n    }\r\n    console.log(res)\r\n  }\r\n  \r\n  getSubjects(students[0])\n\n//# sourceURL=webpack://homework15/../homework6/main.js?");

/***/ }),

/***/ "../homework7/main.js":
/*!****************************!*\
  !*** ../homework7/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   country: () => (/* binding */ country),\n/* harmony export */   getMySalary: () => (/* binding */ getMySalary),\n/* harmony export */   latvia: () => (/* binding */ latvia),\n/* harmony export */   litva: () => (/* binding */ litva),\n/* harmony export */   ukraine: () => (/* binding */ ukraine)\n/* harmony export */ });\nconst ukraine = \r\n{   \r\n    tax: 0.195, \r\n    middleSalary: 1789, \r\n    vacancies: 11476 \r\n};\r\nconst latvia = \r\n{ \r\n    tax: 0.25, \r\n    middleSalary: 1586, \r\n    vacancies: 3921 \r\n};\r\nconst litva = \r\n{ \r\n    tax: 0.15, \r\n    middleSalary: 1509, \r\n    vacancies: 1114 \r\n};\r\n\r\nconst country = \r\n{\r\n    \r\n    getMyTaxes: function(salary){\r\n        return (salary * this.tax);\r\n    },\r\n    getMiddleTaxes: function(){\r\n        return (this.middleSalary*this.tax);\r\n    },\r\n    getTotalTaxes: function(){\r\n        return(this.tax*this.middleSalary*this.vacancies);\r\n    }\r\n}\r\nconsole.log(country.getMyTaxes.call(latvia,3500));\r\nconsole.log(country.getMiddleTaxes.call(latvia));\r\nconsole.log(country.getTotalTaxes.call(latvia));\r\n\r\nfunction getMySalary(){\r\n    const randomSalary = Math.floor(Math.random()*(2000-1500))+1500;\r\n    const myTax = country.getMyTaxes.call(this, randomSalary);\r\n    const myProfit = randomSalary - myTax;\r\n    const obj = {\r\n        salary:randomSalary,\r\n        tax:myTax,\r\n        profit:myProfit\r\n    }\r\n    \r\n\r\n    return obj;\r\n\r\n}\r\nconsole.log(getMySalary.call(latvia))\r\n\r\n\n\n//# sourceURL=webpack://homework15/../homework7/main.js?");

/***/ }),

/***/ "../homework8/class.js":
/*!*****************************!*\
  !*** ../homework8/class.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Student: () => (/* binding */ Student)\n/* harmony export */ });\nclass Student{\r\n    constructor(university, course, fullName){\r\n        this.university = university;\r\n        this.course = course;\r\n        this.fullName = fullName;\r\n        this.isDismissed = false;\r\n        this._marks = [5,4,4,5];\r\n    }\r\n    getInfo(){\r\n        return `Студент ${this.university}  ${this.course}го курсу  ${this.fullName}`\r\n    }\r\n    \r\n        \r\n        get marks(){\r\n            return this.isDismissed ? null : this._marks\r\n            \r\n        }\r\n        set marks(mark){\r\n            if (!this.isDismissed) {\r\n                    this._marks.push(mark)\r\n                }\r\n        }\r\n        getAverageMark(){\r\n            if (this._marks.length === 0) {\r\n                return 0;\r\n            }\r\n            const averageMark = this._marks.reduce((total, mark)=>total+mark)\r\n            return averageMark/this._marks.length;\r\n            }\r\n        dismiss(){\r\n            this.isDismissed = true;\r\n                \r\n        }\r\n        recover(){\r\n            this.isDismissed = false;\r\n                \r\n        }\r\n}\r\n\r\nconst student = new Student(\"Тдату\",\"4\",\"Микита\");\r\n\r\nconsole.log(student.getInfo())\r\nconsole.log(student.getAverageMark())\r\n\r\nconsole.log(student._marks)\r\nstudent.dismiss()\r\nconsole.log(student.marks)\r\nstudent.marks = 5;\r\nconsole.log(student.marks)\r\nstudent.recover()\r\nconsole.log(student.marks)\r\n\r\n\r\n\r\nclass BudgetStudent extends Student {\r\n    constructor(university, course, fullName) {\r\n      super(university, course, fullName);\r\n      this.stipendyMark = this.getAverageMark();\r\n      this.getScholarship();\r\n    }\r\n  \r\n    set marks(mark) {\r\n      if (!this.dismissed) {\r\n        super.marks = mark;\r\n        this.stipendyMark = this.getAverageMark();\r\n      } else {\r\n        console.log(\"Студента виключено, оцінки більше не можна ставити.\");\r\n      }\r\n    }\r\n    getScholarship() {\r\n        if (this.dismissed) {\r\n          console.log(\"Вас виключено, стипендію не отримаєте.\");\r\n        } else if (this.stipendyMark >= 4.0) {\r\n          console.log(\"Середній бал вище 4.0. Стипендія доступна.\");\r\n          this.startScholarshipInterval(); // Викликаємо метод для запуску інтервальної перевірки стипендії\r\n        } else {\r\n          console.log(\"Середній бал нижче 4.0, стипендію не отримаєте.\");\r\n        }\r\n      }\r\n    \r\n      startScholarshipInterval() {\r\n        setInterval(() => {\r\n          if (!this.dismissed && this.stipendyMark >= 4.0) {\r\n            console.log(\"Ви отримали стипендію!\");\r\n          }\r\n        }, 30000); // 30 секунд в мілісекундах\r\n      }\r\n    }\r\n\r\n  \r\n    \r\nconst budgetStudent = new BudgetStudent(\"Тдату\",\"4\",\"Alek\")\r\n\r\nconsole.log(budgetStudent.getAverageMark())\r\n\r\nconsole.log(budgetStudent._marks)\r\nbudgetStudent.marks=1;\r\nbudgetStudent.marks=3;\r\nbudgetStudent.marks=5;\r\nbudgetStudent.marks=5;\r\nbudgetStudent.marks=5;\r\nbudgetStudent.marks=5;\r\nbudgetStudent.marks=5;\r\n\r\nconsole.log(budgetStudent.getAverageMark())\r\n\r\n\r\n\n\n//# sourceURL=webpack://homework15/../homework8/class.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;