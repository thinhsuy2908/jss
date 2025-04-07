let newAdd=[]
function add(){
    let id=Number(prompt("vui lòng nhập id Contact"))
    let name=prompt("vui lòng nhập tên của người liên hệ")
    let email=prompt("Email của người liên hệ.")
    let phone=prompt("Số điện thoại của người liên hệ.")
    let Contact={
        id,
        name,
        email,
        phone
    }
    newAdd.push(Contact)
    alert("Đã thêm thành công ")
}
function show() {
    if (newAdd.length === 0) {
        alert("Không có nhân viên nào trong danh sách.");
        return;
    }

    let output = newAdd.map((emp, index) =>
        `${index + 1}. ID: ${emp.id} - Tên: ${emp.name} - Email: ${emp.email} - Điện Thoại: ${emp.phone}`
    ).join("\n");

    alert("Danh sách nhân viên:\n" + output);
}
function deleteEm() {
    let indexfind = findid("Xóa một đối tượng Contact khỏi danh sách danh bạ theo id");
    if (indexfind !== -1) {
        let confirmDelete = window.confirm(`Bạn có chắc là muốn xoá Contact: ${newAdd[indexfind].name} không?`);
        if (confirmDelete) {
            newAdd.splice(indexfind, 1);
            alert("Đã xoá Contact thành công.");
        }
    } else {
        console.log("Không tìm thấy id.");
    }
}

function findid(message) {
    let id = Number(prompt(message));
    return newAdd.findIndex(Contact => Contact.id === id);
}
const edit = () => {
    let indexFind = findid("Nhập mã Contact cần sửa");
    if (indexFind !== -1) {
        let newName = prompt("Nhập Tên mới");
        let newEmail = prompt("Nhập Email mới");
        let newPhone = prompt("Nhập Số điện thoại mới");
        if (newName) {
            newAdd[indexFind].name = newName;
            alert("Đã đổi Tên Thành công.");
        } 
        if (newEmail) {
            newAdd[indexFind].email = newEmail;
            alert("Đã đổi email Thành công.");
        }
        if (newPhone) {
            newAdd[indexFind].phone = newPhone;
            alert("Đã đổi số điện thoại Thành công.");
        }
    } else {
        console.error("Không tìm thấy id.");
    }
};
const ContactById = (message) => {
let indexFind = findid("Nhập id nhân viên cần tìm");
if (indexFind !== -1) {
    let foundContact = newAdd[indexFind];
    alert(`Thông tin nhân viên:\nID: ${foundContact.id}\nTên: ${foundContact.name}\nEmail: ${foundContact.email}\nĐiện Thoại: ${foundContact.phone}`);
} else {
    alert("Không tìm thấy nhân viên với id đã nhập.");
}
}
function Menu(){
    let input;
do{
    alert("1. Thêm chức năng mới \n"
        +"2. Hiển thị danh bạ \n"
        +"3. Tìm kiến nhân viên theo id \n"
        +"4. Cập nhật thông tin  \n"
        +"5. Xoá 1 đối tượng\n"
        +"6. Thoát \n"
    )
 input=(Number(prompt("vui lòng nhập lựa chọn của bạn")))
switch(input){
    case 1:
        add();
        break;
    case 2:
        show();
        break;
    case 3:
        ContactById();
        break
    case 4:
        edit();
        break;
    case 5:
        deleteEm();
        break;        
    case 6:
        alert("thoát")
        break;
    default:
        alert("lựa chọn sai vui lòng chọn lại")   
}         
}
while(input!==6){
}
}
Menu();