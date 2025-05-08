// script.js
import { getEmployees } from './modules/init.js';

// Wait for the DOM to load before running buildGrid
document.addEventListener('DOMContentLoaded', () => {
  buildGrid();
});

// Main function to build the employee table
async function buildGrid() {
  const employeeTableBody = document.querySelector('#employees tbody');
  const empCountOutput = document.getElementById('empCount');

  // Clear existing table rows
  employeeTableBody.innerHTML = '';

  // Fetch employee data from JSON file
  const employees = await getEmployees();

  // Loop through each employee and create table rows
  employees.forEach(employee => {
    const row = document.createElement('tr');

    // Add cells for each employee property
    Object.values(employee).forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      row.appendChild(td);
    });

    // Add delete button cell
    const deleteCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Delete';

    // Delete button click event
    deleteBtn.addEventListener('click', () => {
      row.remove();
      updateEmployeeCount();
    });

    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    employeeTableBody.appendChild(row);
  });

  // Update employee count after building the grid
  updateEmployeeCount();
}

// Function to update the employee count display
function updateEmployeeCount() {
  const empCountOutput = document.getElementById('empCount');
  const employeeTableBody = document.querySelector('#employees tbody');
  const rowCount = employeeTableBody.getElementsByTagName('tr').length;
  empCountOutput.textContent = `(${rowCount})`;
}
