// script.js

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
      renderTask(task);
    });
  }
  
  function saveTasks() {
    const items = document.querySelectorAll("#TaskList li");
    const tasks = [];
    items.forEach(item => {
      const text = item.firstChild.textContent.trim();
      tasks.push(text);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function renderTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText + " ";
  
    const btn = document.createElement("button");
    btn.textContent = "x";
    btn.onclick = function () {
      const confirmDelete = confirm("Bạn có chắc muốn xoá nhiệm vụ này không?");
      if (confirmDelete) {
        li.remove();
        saveTasks();
      }
    };
  
    li.appendChild(btn);
    document.getElementById("TaskList").appendChild(li);
  }
  
  function add() {
    let str = document.getElementById("a").value.trim();
  
    if (str !== "") {
      renderTask(str);
      saveTasks();
      document.getElementById("a").value = "";
    } else {
      alert("Vui lòng nhập 1 nhiệm vụ");
    }
  }
  