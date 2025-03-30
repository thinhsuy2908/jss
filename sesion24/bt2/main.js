let arr=[]
while(true){
alert("===============Menu============\n"
+"1. Nhập số phần tử cần nhập và giá trị các phần tử\n"
+"2. In ra giá trị các phần tử đang quản lý\n"
+"3. In ra giá trị các phần tử chẵn và tính tổng\n"
+"4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n"
+"5. In ra các phần tử nguyên tố trong mảng và tính tổng\n"
+"6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n"
+"7. Thêm 1 phần tử vào vị trí chỉ định\n"    
+"8. Thoát")
let input=Number(prompt("Vui Lòng nhập phương thức muốn chọn"))
switch(input){
    case 1:
        let a=Number(prompt("nhập số phần tử mà bạn muốn thêm"))
        if(isNaN(a)||a<0||a==0){
            alert("sai giá trị vui lòng nhập lại")
        }
        for(let i=0;i<a;i++){
            let b=Number(prompt("Vui Lòng thêm phần tử"))
            arr.push(b);
            alert("Thêm thành công");
        }
        break;
    case 2:
        if(arr.length===0){
            alert("Mảng rỗng");
        }
        else{
            alert("Mảng của bạn là: "+arr+"");
            break;
        }
    case 3:
        if (arr.length === 0) {
            alert("Mảng rỗng, không thể tìm các phần tử chẵn và lẻ.");
        } else {
            let chanNumbers = [];
            let leNumbers = [];
            for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                chanNumbers.push(arr[i]);
            } else {
                leNumbers.push(arr[i]);
            }
            }
            alert(`Các phần tử chẵn: ${chanNumbers.join(", ")}\nCác phần tử lẻ: ${leNumbers.join(", ")}`);
        }
        break;
    case 4:
        if (arr.length === 0) {
            alert("Mảng rỗng");
        } else {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            let average = sum / arr.length;
            alert("Trung bình cộng của các phần tử trong mảng là: " + average);
        }
        break;
    case 5:
        if (arr.length === 0) {
            alert("Mảng rỗng, không thể xóa phần tử.");
        } else {
            let viTri = Number(prompt("Nhập vào vị trí cần xóa (bắt đầu từ 0):"));
            if (!isNaN(viTri) && viTri >= 0 && viTri < arr.length) {
                arr.splice(viTri, 1);
                alert(`Mảng sau khi xóa phần tử: ${arr}`);
            } else {
                alert("Vị trí không hợp lệ, vui lòng nhập lại.");
            }
        }
        break;
    case 6:
        if (arr.length < 2) {
            alert("Mảng không đủ phần tử để tìm phần tử lớn thứ hai.");
        } else {
            let max = 0;
            let secondMax = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    secondMax = max;
                    max = arr[i];
                } else if (arr[i] > secondMax && arr[i] !== max) {
                    secondMax = arr[i];
                }
            }
            if (secondMax === 0) {
                alert("Không có phần tử lớn thứ hai trong mảng.");
            } else {
                alert("Phần tử lớn thứ hai trong mảng là: " + secondMax);
            }
        }
        break;
    case 7:
                break;                
    }  
    if(input===7){
        break;
    } 
}         