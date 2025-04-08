let table = document.getElementById("employeeTable");
const employee = [
  {
    id: 1,
    name: "John",
    age: 14,
    address: "idk",
  },
  {
    id: 2,
    name: "Phú Thịnh",
    age: 18,
    address: "acb",
  },
  {
    id: 3,
    name: "Trọng Trí",
    age: 18,
    address: "bac",
  },
  {
    id: 4,
    name: "Hữu Khánh",
    age: 19,
    address: "cba",
  },
  {
    id: 5,
    name: "Đình Nghị",
    age: 20,
    address: "MImifds??",
  },
]

employee.forEach(employee => {
  let row = document.createElement("tr");
  row.innerHTML = `
  <td>${employee.id}</td>
<td>${employee.name}</td>
<td>${employee.age}</td>
<td>${employee.address}</td>`;
  table.append(row);
})