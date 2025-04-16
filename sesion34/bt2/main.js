let acount = JSON.parse(localStorage.getItem("acountList")) || [
    { nameProjetc: "Learn Javascript Session 01", dob: "2023-04-17", nameLeder: "Hồ Xuân Hùng", status: 1 },
    { nameProjetc: "lập trình AI", dob: "2023-04-17", nameLeder: "Nguyễn Quốc Tuấn", status: 1 },
    { nameProjetc: "Learn CSS Session 1", dob: "2023-04-17", nameLeder: "Mai Nhật Tân", status: 1 }
];
let statusName = ["Pending", "Hoàn Thành", "Trễ Hạn"];
let editingIndex = -1;

const getStatusByIndex = (index) => {
    return statusName[index - 1] || "Không xác định";
};
function formatDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${year}-${month}-${day}`;
}
function renderAcount(list = acount) {
    const tbody = document.getElementById("taskList");
    tbody.innerHTML = "";
    list.forEach((project, index) => {
        const row = `
            <tr>
                <td>${project.nameProjetc}</td>
                <td>${formatDate(project.dob)}</td>
                <td>${project.nameLeder}</td>
                <td>${getStatusByIndex(project.status)}</td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="editProject(${index})">Sửa</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteProject(${index})">Xoá</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}
function deleteProject(index) {
    if (confirm("Bạn có chắc muốn xoá công việc này không?")) {
        acount.splice(index, 1);
        renderAcount();
        localStorage.setItem("acountList", JSON.stringify(acount));
    }
}
function editProject(index) {
    const project = acount[index];
    document.getElementById("tenCongViec").value = project.nameProjetc;
    document.getElementById("hanChot").value = project.dob;
    document.getElementById("nguoiPhuTrach").value = project.nameLeder;
    document.getElementById("trangThai").value = project.status;
    editingIndex = index;
}
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const nameInput = document.getElementById("tenCongViec");
    const dobInput = document.getElementById("hanChot");
    const leaderInput = document.getElementById("nguoiPhuTrach");
    const statusInput = document.getElementById("trangThai");
    const name = nameInput.value.trim();
    const dob = dobInput.value;
    const leader = leaderInput.value.trim();
    const status = parseInt(statusInput.value);

    let isValid = true;
    if (!name) {
        nameInput.classList.add("is-invalid");
        isValid = false;
    } else {
        nameInput.classList.remove("is-invalid");
    }
    if (!dob) {
        dobInput.classList.add("is-invalid");
        isValid = false;
    } else {
        dobInput.classList.remove("is-invalid");
    }
    if (!leader) {
        leaderInput.classList.add("is-invalid");
        isValid = false;
    } else {
        leaderInput.classList.remove("is-invalid");
    }
    if (isNaN(status)) {
        statusInput.classList.add("is-invalid");
        isValid = false;
    } else {
        statusInput.classList.remove("is-invalid");
    }
    if (!isValid) return;

    const newProject = { nameProjetc: name, dob, nameLeder: leader, status };
    if (editingIndex === -1) {
        acount.push(newProject);
    } else {
        acount[editingIndex] = newProject;
        editingIndex = -1;
    }

    document.querySelector("form").reset();
    [nameInput, dobInput, leaderInput, statusInput].forEach(input => {
        input.classList.remove("is-invalid");
    });

    localStorage.setItem("acountList", JSON.stringify(acount));
    renderAcount();
});
renderAcount();
