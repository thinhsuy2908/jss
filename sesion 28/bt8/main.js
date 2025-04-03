let newAdd=[]
function add(){
    let id=prompt("vui lòng nhập id sinh viên")
    let name=prompt("vui lòng nhập tên")
    let position=prompt("vui lòng nhập vị trí")
    let salary=prompt("vui lòng nhập số lương")
    let employees={
        id,
        name,
        position,
        salary
    }
    newAdd.push(employees)
    alert("Đã thêm thành công ")
}
function deleteEm() {
    let indexfind = findid("Nhập mã sinh viên bạn muốn xoá");
    if (indexfind !== -1) {
        let confirmDelete = window.confirm(`Bạn có chắc là muốn xoá nhân viên: ${newAdd[indexfind].name} không?`);
        if (confirmDelete) {
            newAdd.splice(indexfind, 1);
            alert("Đã xoá nhân viên thành công.");
        }
    } else {
        console.log("Không tìm thấy id.");
    }
}

function findid(message) {
    let id = prompt(message);
    return newAdd.findIndex(employee => employee.id === id);
}
const edit = () => {
    let indexFind = findid("Nhập mã sinh viên cần sửa");
    if (indexFind !== -1) {
        let newSalary = prompt("Nhập lương mới");
        if (newSalary) {
            newAdd[indexFind].salary = newSalary;
            alert("Cập nhật lương thành công.");
        } 
    } else {
        console.error("Không tìm thấy id.");
    }
};
function Menu(){
    let input;
do{
    alert("1. Thêm chức năng mới \n"
        +"2. Xoá nhân viên theo id \n"
        +"3. Cập nhật mức lương theo id \n"
        +"4. Tìm kiếm theo tên nhân viên \n"
    )
 input=(Number(prompt("vui lòng nhập lựa chọn của bạn")))
switch(input){
    case 1:
        add();
        break;
    case 2:
        deleteEm
        break;
    case 3:
        edit();
        break
    case 4:
        alert("thoát")
        break;
    default:
        alert("lựa chọn sai vui lòng chọn lại")   
}         
}
while(input!==4){
}
}
Menu();