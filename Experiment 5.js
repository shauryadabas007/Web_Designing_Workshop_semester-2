let employees = [];

const nameInp = document.getElementById('empName');
const idInp = document.getElementById('empID');
const salaryInp = document.getElementById('empSalary');
const deptInp = document.getElementById('empDept');
const container = document.getElementById('resultContainer');

document.getElementById('btnAdd').addEventListener('click', addEmployee);
document.getElementById('btnDisplayAll').addEventListener('click', displayAllEmployees);
document.getElementById('btnFilterSalary').addEventListener('click', filterHighSalaries);
document.getElementById('btnTotalSalary').addEventListener('click', calculateTotalSalary);
document.getElementById('btnAvgSalary').addEventListener('click', calculateAverageSalary);
document.getElementById('btnCountDept').addEventListener('click', countByDepartment);

function addEmployee() {
    const name = nameInp.value.trim();
    const id = idInp.value.trim();
    const salary = parseFloat(salaryInp.value);
    const department = deptInp.value.trim();

    if (!name || !id || isNaN(salary) || !department) {
        alert("Please fill in all employee fields correctly.");
        return;
    }

    const employee = { name, id, salary, department };

    employees.push(employee);

    alert("Employee Added Successfully!");

    nameInp.value = '';
    idInp.value = '';
    salaryInp.value = '';
    deptInp.value = '';
}

function displayAllEmployees() {
    container.innerHTML = ''; 

    if (employees.length === 0) {
        container.innerHTML = `<div class="summary-text">No employee records found.</div>`;
        return;
    }

    const title = document.createElement('div');
    title.className = 'result-title';
    title.innerText = 'All Employees';
    container.appendChild(title);

    employees.forEach(emp => {
        const item = document.createElement('div');
        item.className = 'employee-item';
        item.innerText = `Name: ${emp.name} | ID: ${emp.id} | Salary: ₹${emp.salary} | Dept: ${emp.department}`;
        container.appendChild(item);
    });
}

function filterHighSalaries() {
    container.innerHTML = '';

    const highSalaryEmps = employees.filter(emp => emp.salary > 50000);

    const title = document.createElement('div');
    title.className = 'result-title';
    title.innerText = 'Employees with Salary > ₹50,000';
    container.appendChild(title);

    if (highSalaryEmps.length === 0) {
        return; 
    }

    highSalaryEmps.forEach(emp => {
        const item = document.createElement('div');
        item.className = 'employee-item';
        item.innerText = `Name: ${emp.name} | ID: ${emp.id} | Salary: ₹${emp.salary} | Dept: ${emp.department}`;
        container.appendChild(item);
    });
}

function calculateTotalSalary() {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    container.innerHTML = `<div class="summary-text">Total Salary Payout: ₹${total}</div>`;
}

function calculateAverageSalary() {
    if (employees.length === 0) {
        container.innerHTML = `<div class="summary-text">Average Salary: ₹0.00</div>`;
        return;
    }

    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const average = total / employees.length;
    
    container.innerHTML = `<div class="summary-text">Average Salary: ₹${average.toFixed(2)}</div>`;
}

function countByDepartment() {
    const targetDept = prompt("Enter Department Name:");
    if (targetDept === null) return; 
    
    const formattedDept = targetDept.trim();
    if (formattedDept === "") {
        alert("Department name cannot be empty.");
        return;
    }

    const count = employees.filter(emp => emp.department.toLowerCase() === formattedDept.toLowerCase()).length;
    
    container.innerHTML = `<div class="summary-text">Employees in ${formattedDept.toUpperCase()}: ${count}</div>`;
}