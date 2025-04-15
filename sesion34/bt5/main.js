function getEmployees() {
    return JSON.parse(localStorage.getItem("employees")) || [];
  }
  
  function saveEmployees(employees) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  
  function renderEmployees() {
    const list = document.getElementById("employeeList");
    list.innerHTML = "";
  
    const employees = getEmployees();
    employees.forEach((employee, index) => {
      const tr = document.createElement("tr");
      const tdStt = document.createElement("td");
      tdStt.textContent = index + 1;
      const tdName = document.createElement("td");
      tdName.textContent = employee.name;
  
      const tdPosition = document.createElement("td");
      tdPosition.textContent = employee.position;
  
      tr.appendChild(tdStt);
      tr.appendChild(tdName);
      tr.appendChild(tdPosition);
  
      list.appendChild(tr);
    });
  }
  
  function addEmployee() {
    const nameInput = document.getElementById("name");
    const positionInput = document.getElementById("position");
  
    const name = nameInput.value.trim();
    const position = positionInput.value.trim();
  
    if (name === "" || position === "") {
      alert("Vui lòng nhập đầy đủ tên và chức vụ!");
      return;
    }
  
    const employees = getEmployees();
    employees.push({ name, position });
    saveEmployees(employees);
    renderEmployees();
  
    nameInput.value = "";
    positionInput.value = "";
  }
  
  function loadEmployees() {
    renderEmployees();
  }
  