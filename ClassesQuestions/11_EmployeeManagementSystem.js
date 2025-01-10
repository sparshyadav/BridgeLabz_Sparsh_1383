// Employee Management System
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return {
            id: this.id,
            name: this.name,
            salary: this.salary
        }
    }

    static compareSalaries(emp1, emp2) {
        if (emp1.salary > emp2.salary) {
            return `${emp1.name} has Higher Salary`;
        }
        else if (emp2.salary > emp1.salary) {
            return `${emp2.name} has Higher Salary`;
        }
        else {
            return `Both have the same Salary`;
        }
    }
}

const emp1 = new Employee(123, "Sparsh", 150000);
const emp2 = new Employee(123, "Rakshit", 100000);
const emp3 = new Employee(123, "Raghav", 120000);

console.log(emp1.getDetails());
console.log("Comparing Salaries: ", Employee.compareSalaries(emp1, emp2));
console.log("Comparing Salaries: ", Employee.compareSalaries(emp3, emp2));