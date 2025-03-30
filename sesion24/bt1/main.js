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
            console.log("Mảng rỗng, không thể tìm giá trị lớn nhất và nhỏ nhất.");
        } else {
            console.log(`Phần tử lớn nhất: ${Math.max(...arr)}, Phần tử nhỏ nhất: ${Math.min(...arr)}`);
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
                alert("Tổng các phần tử trong mảng là: " + sum);
            }
            break;
    case 5:
                let numberToFind = Number(prompt("Nhập vào số cần tìm số lần xuất hiện trong mảng"));
                if (isNaN(numberToFind)) {
                    alert("Giá trị không hợp lệ, vui lòng nhập lại");
                } else {
                    let count = 0;
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === numberToFind) {
                            count++;
                        }
                    }
                    alert(`Số ${numberToFind} xuất hiện ${count} lần trong mảng`);
                }
                break;
    case 6:
                    arr.sort((a, b) => a - b);
                    alert("Mảng sau khi sắp xếp tăng dần: " + arr);
                    break;
    case 7:
                break;                
    }  
    if(input===7){
        break;
    } 
}         