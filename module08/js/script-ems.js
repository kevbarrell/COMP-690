// CREATE AN ARRAY OF EMPLOYEES
let employees = [];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
} else {
    employees = [
        [12345678, 'Wade Wilson', 1234, 'mercwiththemouth@example.com', 'Engineering'],
        [23456789, 'Cad Bane', 2345, 'bluebounty@example.com', 'Marketing'],
        [34567890, 'Peter Parker', 3456, 'spideyfan@example.com', 'Sales'],
        [45678901, 'Travis Touchdown', 4567, 'santadestroy@example.com', 'Executive'],
        [56789012, 'Din Djarin', 5678, 'theway@example.com', 'QA']
    ];
    localStorage.setItem('employees', JSON.stringify(employees));
}

// GET DOM ELEMENTS
const form = document.getElementById('addForm');
const empTable = document.getElementById('empTable');
const empCount = document.getElementById('empCount');
const id = document.getElementById('id');
const name = document.getElementById('name');
const extension = document.getElementById('extension');
const email = document.getElementById('email');
const department = document.getElementById('department');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const empId = parseInt(id.value);
    const empName = name.value;
    const empExt = parseInt(extension.value);
    const empEmail = email.value;
    const empDept = department.value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = [empId, empName, empExt, empEmail, empDept];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    id.focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {

    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        const rowIndex = e.target.closest('tr').rowIndex - 1;

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex, 1);

        // BUILD THE GRID
            buildGrid();
        }
    }
});


// BUILD THE EMPLOYEES GRID
function buildGrid() {

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const oldTbody = empTable.querySelector('tbody');
    if (oldTbody) empTable.removeChild(oldTbody);

    // REBUILD THE TBODY FROM SCRATCH
    const newTbody = document.createElement('tbody');

    for (const emp of employees) {
        const row = document.createElement('tr');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (const data of emp) {
        const cell = document.createElement('td');
        cell.textContent = data;
        row.appendChild(cell);
    }

    const deleteCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn btn-sm btn-danger delete';
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    // REBUILDING THE ROW STRUCTURE
    newTbody.appendChild(row);
}
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(newTbody);

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = `(${employees.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
}