// init.js
export async function getEmployees() {
    try {
      const response = await fetch('../data/employees.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const employees = await response.json();
      return employees;
    } catch (error) {
      console.error("Could not fetch employee data:", error);
    }
  }
  