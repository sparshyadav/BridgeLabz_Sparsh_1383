// //Q3.
// // Approach 1
// // a. Take a list of employees with their salaries
// function addEmpoyee(empName, empSalary) {
//     let employee = {
//         name: empName,
//         salary: empSalary
//     }

//     employees.push(employee);
// }

// let employees = [];
// addEmpoyee("Sparsh", 90000);
// addEmpoyee("Rakshit", 30000);
// addEmpoyee("Raghav", 75000);
// addEmpoyee("Tanmay", 25000);
// addEmpoyee("Vaibhai", 66000);
// console.log(employees);

// // b. Filter employees who earn more than 50000
// const higherSalary = employees.filter((obj) => {
//     return obj.salary > 50000;
// })
// console.log(higherSalary);

// // c. Increase filtered employees salary by 10%
// const incrementedSalary = higherSalary.map((obj) => {
//     let newObj = {
//         name: obj.name,
//         salary: obj.salary += (obj.salary) / 10
//     }

//     return newObj;
// })
// console.log(incrementedSalary);

// // d. Calculate the total salary after increment
// const totalSalary = incrementedSalary.reduce((sum, obj) => {
//     return sum + obj.salary;
// }, 0);
// console.log(`Total Incremented Salary is: ${totalSalary}`);


// Approach 2 - OOPS
class Employees {
    #employeeList = [];
    moreSalary = [];
    increasedSalary = [];

    addEmployee(empName, empSalary) {
        let newEmp = {
            name: empName,
            salary: empSalary
        }

        this.#employeeList.push(newEmp);
    }

    highEarners() {
        let highEarn = this.#employeeList.filter((obj) => {
            return obj.salary > 50000;
        })

        this.moreSalary = highEarn;
        console.log(this.moreSalary);
    }

    increaseSalary() {
        this.increasedSalary = this.moreSalary.map((obj) => {
            let newObj = {
                name: obj.name,
                salary: obj.salary += (obj.salary) / 10
            }

            return newObj;
        })

        console.log(this.increasedSalary);
    }

    totalSalary() {
        let total = this.increasedSalary.reduce((sum, obj) => {
            return sum + obj.salary;
        }, 0);

        return total;
    }
}

let emp = new Employees();
emp.addEmployee("Sparsh", 90000);
emp.addEmployee("Rakshit", 30000);
emp.addEmployee("Raghav", 75000);
emp.addEmployee("Tanmay", 25000);
emp.addEmployee("Vaibhai", 66000);

emp.highEarners();
emp.increaseSalary();
console.log(emp.totalSalary());




