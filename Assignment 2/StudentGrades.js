// // Q2.
//// Approach 1
// // a. Take a List of Student with their Grades
// function addStudent(studentName, studentMarks){
//     let student={
//         name: studentName,
//         marks: studentMarks
//     }

//     students.push(student);
// }
// let students=[];
// addStudent("Sparsh", 90);
// addStudent("Rakshit", 30);
// addStudent("Raghav", 90);
// addStudent("Tanmay", 25);
// addStudent("Vaibhai", 90);
// console.log(students);

// // b. Classify them as Pass or Fail if they score 35%
// students.forEach((obj)=>{
//     if(obj.marks>35){
//         obj.grade="Pass"
//     }
//     else{
//         obj.grade="Fail"
//     }
// })
// console.log(students);

// // c. Print Passing Student Number
// const passingStudents=students.filter((obj)=>{
//     return obj.grade==="Pass";
// })
// console.log(`Number of Passing Students is: ${passingStudents.length}`);
// console.log(passingStudents);

// // Approach 2 - OOPS
// class studentGrades {
//     #students = [];

//     addStudent(studentName, studentGrade) {
//         let newStudent = {
//             name: studentName,
//             grade: studentGrade
//         }

//         this.#students.push(newStudent);
//     }

//     passOrFail() {
//         this.#students.forEach((stu) => {
//             if (stu.grade > 35) {
//                 stu.status = "Pass";
//             }
//             else {
//                 stu.status = "Fail";
//             }
//         })
//     }

//     passingStudents() {
//         let passStudent = this.#students.reduce((count, obj) => {
//             if (obj.status == "Pass") {
//                 return count + 1;
//             }
//             else {
//                 return count;
//             }
//         }, 0)

//         console.log(passStudent);
//     }

//     displayStudents() {
//         console.log(this.#students);
//     }
// }

// let sg = new studentGrades();
// sg.addStudent("Sparsh", 90);
// sg.addStudent("Rakshit", 30);
// sg.addStudent("Raghav", 90);
// sg.addStudent("Tanmay", 25);
// sg.addStudent("Vaibhai", 90);

// sg.passOrFail();
// sg.displayStudents();
// sg.passingStudents();