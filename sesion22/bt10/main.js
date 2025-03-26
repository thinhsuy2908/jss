let arr =[]
while(true){
alert("     Menu\n"
    + "1. Thêm phần tử vào mảng\n"
    + "2. Hiển thị mảng\n"
    + "3. Thêm phần tử trong mảng\n"
    + "4. Sửa phần tử trong mảng\n"
    + "5. Xóa phần tử trong mảng\n"
    + "6. Thoát");
let input=Number(prompt("    Lựa chọn của bạn<br>"));
switch(input){
    case 1:
        let n=Number(prompt("Nhập số bạn muốn thêm"));
        arr.push(n);
        alert("Thêm thành công");
        break;
    case 2:
        if(arr.length===0){
            alert("Mảng rỗng");
        }
        else{
            document.writeln("Mảng của bạn là: "+arr+"");
            break;
        }    
    case 3:
        let a=Number(prompt("Nhập số bạn muốn thêm"));
        let b=Number(prompt("Nhập vị trí bạn muốn thêm"));
        arr.splice(b,0,a);
        alert("Thêm thành công");
        break;
    case 4:
        let c=Number(prompt("Nhập số bạn muốn sửa"));
        let d=Number(prompt("Nhập vị trí bạn muốn sửa"));
        arr[d]=c;
        alert("Sửa thành công");
        break;
    case 5: 
        let e=Number(prompt("Nhập vị trí bạn muốn xóa"));
        arr.splice(e,1);
        alert("Xóa thành công");
        break;  
    case 6:
        document.writeln("Thoát chuong trình");
        break;    
    default:
        alert("Lựa chọn không hợp lệ");
        break;
        
}
    if(input===6){
        break;
    }

}
