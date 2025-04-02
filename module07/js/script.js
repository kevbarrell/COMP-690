document.addEventListener("DOMContentLoaded", () => {
    // GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
    const form = document.getElementById("addForm");
    form.noValidate = true; // Disable default browser validation
    const table = document.getElementById("employees");
    const empCount = document.getElementById("empCount");

    // SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    let employeeCounter = 0;

    // ADD EMPLOYEE
    form.addEventListener("submit", (e) => {
        // PREVENT FORM SUBMISSION
        e.preventDefault();
        
        // GET THE VALUES FROM THE TEXT BOXES
        const id = document.getElementById("id").value.trim();
        const name = document.getElementById("name").value.trim();
        const extension = document.getElementById("extension").value.trim();
        const email = document.getElementById("email").value.trim();
        const department = document.getElementById("department").value.trim();
        
        // Ensure all fields are filled
        if (!id || !name || !extension || !email || !department) {
            alert("All fields are required.");
            return;
        }
        
        // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
        let row = table.insertRow();
        
        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        row.insertCell(0).appendChild(document.createTextNode(id));
        row.insertCell(1).appendChild(document.createTextNode(name));
        row.insertCell(2).appendChild(document.createTextNode(extension));
        row.insertCell(3).appendChild(document.createTextNode(email));
        row.insertCell(4).appendChild(document.createTextNode(department));
        
        // CREATE THE DELETE BUTTON
        let deleteCell = row.insertCell(5);
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
        deleteBtn.textContent = "X";
        
        // DELETE EMPLOYEE
        deleteBtn.addEventListener("click", (e) => {
            if (confirm("Are you sure you want to delete this employee?")) {
                table.deleteRow(row.rowIndex);
                employeeCounter--;
                empCount.textContent = `(${employeeCounter})`;
            }
        });
        deleteCell.appendChild(deleteBtn);
        
        // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
        employeeCounter++;
        empCount.textContent = `(${employeeCounter})`;

        // RESET THE FORM
        form.reset();
        
        // SET FOCUS BACK TO THE ID TEXT BOX
        document.getElementById("id").focus();
    });
});
