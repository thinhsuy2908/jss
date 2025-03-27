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
            alert("Mảng rỗng");
            break;
        }      
        let evenNumbers = [];
        let sumEven = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % 2 === 0) {
                evenNumbers.push(arr[j]);
                sumEven += arr[j];   
            }
        }
        evenNumbers.sort((a, b) => b - a);
        alert("Các số chẵn trong mảng (đã sắp xếp giảm dần): " + evenNumbers.join(", "));
        alert("Tổng các số chẵn là: " + sumEven);
        break;
        
    case 4:
        if(arr.length===0){
            alert("mảng rỗng")
            break;
        }
        let max=arr[0];
        let min=arr[0];
        for(let k=0;k<arr.length;k++){
            if(max<arr[k]){
                max=arr[k]
            }
            else if(arr[k]<min){
                min=arr[k]
            }
        }
        alert(max)
        alert(min)
        break;
    case 5:
            if (arr.length === 0) {
                alert("Mảng rỗng");
                break;
            }
        
            let primeNumbers = [];
            let sumPrime = 0;
        
            for (let i = 0; i < arr.length; i++) {
                let isPrime = true;
                if (arr[i] < 2) {
                    isPrime = false;
                } else {
                    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                        if (arr[i] % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }
        
                if (isPrime) {
                    primeNumbers.push(arr[i]);
                    sumPrime += arr[i];
                }
            }
        
            alert("Các số nguyên tố trong mảng là: " + primeNumbers.join(", "));
            alert("Tổng các số nguyên tố là: " + sumPrime);
            break;
        
    case 6:
        let count=0
        let po=Number(prompt("vui lòng nhập số mà bạn muốn kiểm tra"))
        for(let i=0;i<arr.length;i++){    
        if(po===arr[i]){
            count++
         }
        }
        alert(po+"xuất hiện"+count+"lần")
        break;
    case 7:
        let d=Number(prompt("Nhập số bạn muốn thêm"));
        let b=Number(prompt("Nhập vị trí bạn muốn thêm"));
        arr.splice(b,0,d);
        alert("Thêm thành công");
        break; 
    case 8:
        let e=Number(prompt("Nhập vị trí bạn muốn xóa"));
        arr.splice(e,1);
        alert("Xóa thành công");
        break; 
    case 9:
        let sortedAsc = [arr].sort((a, b) => a - b);
        let sortedDesc = [arr].sort((a, b) => b - a);
        alert("Mảng sau khi sắp xếp tăng dần: " + sortedAsc.join(", "));
        alert("Mảng sau khi sắp xếp giảm dần: " + sortedDesc.join(", "));
        break
    case 0:
        alert("Đang thoát chương trình")
        break;
    default:
        alert("lựa chọn không hợp lệ vui lòng chọn lại")    
    }
    if(input===0){
        break;
    }
}
