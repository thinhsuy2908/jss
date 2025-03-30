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
            alert("Mảng rỗng, không thể tìm phần tử lớn nhất.");
        } else {
            let max = arr[0];
            let argik = [];
            for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                argik = [i];
            } else if (arr[i] === max) {
                argik.push(i);
            }
            }
            alert(`Phần tử lớn nhất là: ${max}\nChỉ số của nó: ${argik.join(", ")}`);
        }
        break;
    case 4:
        if (arr.length === 0) {
            alert("Mảng rỗng");
        } else {
            let sum = 0;
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            if (count === 0) {
                alert("Không có số dương nào trong mảng.");
            } else {
                let average = sum / count;
                alert("Tổng các số dương trong mảng là: " + sum + "\nTrung bình cộng của các số dương là: " + average);
            }
        }
        break;
    case 5:
        if (arr.length === 0) {
            alert("Mảng rỗng, không thể đảo ngược.");
        } else {
            arr.reverse();
            alert(`Mảng sau khi đảo ngược: ${arr}`);
        }
        break;
    case 6:
        if (arr.length === 0) {
            alert("Mảng rỗng, không thể kiểm tra đối xứng.");
        } else {
            let flag = true;
            for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                alert("Mảng là đối xứng.");
            } else {
                alert("Mảng không đối xứng.");
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
