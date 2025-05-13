const employees = [
    { name: "Smith", location: "Chennai", salary: 3200 },
    { name: "David", location: "Bengalore", salary: 4200 },
    { name: "Ram", location: "Trichy", salary: 2700 },
    { name: "Akash", location: "Trichy", salary: 4700 }
  ];
  
  function renderTable() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
  
    employees.forEach((emp, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.location}</td>
        <td><input type="number" value="${emp.salary}" min="0" onchange="updateSalary(${index}, this.value)" /></td>
        <td><button onclick="deleteEmployee(${index})">Delete</button></td>
      `;
  
      tbody.appendChild(row);
    });
  
    updateTotalSalary();
  }
  
  function updateSalary(index, newSalary) {
    employees[index].salary = parseInt(newSalary) || 0;
    updateTotalSalary();
  }
  
  function deleteEmployee(index) {
    employees.splice(index, 1);
    renderTable();
  }
  
  function updateTotalSalary() {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("totalSalary").textContent = total;
  }
  
  // Initial render
  renderTable();
  function addEmployee() {
    const name = document.getElementById("empName").value.trim();
    const location = document.getElementById("empLoc").value.trim();
    const salary = parseInt(document.getElementById("empSal").value);
  
    if (name && location && !isNaN(salary) && salary > 0) {
      employees.push({ name, location, salary });
      renderTable();
  
      // Clear form inputs
      document.getElementById("empName").value = "";
      document.getElementById("empLoc").value = "";
      document.getElementById("empSal").value = "";
    } else {
      alert("Please enter valid Name, Location, and Salary!");
    }
  }
    