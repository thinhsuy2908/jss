    let arr=[]
    let input=Number(prompt("Nhập số phần tử bạn muốn thêm vào mảng"));
    if(isNaN(input)){
        alert("Nhập sai, vui lòng nhập lại");
    }
    else if(input<0){
        alert("Số lượng phần tử không được bé hơn 0");
    }
    else if(input===0){
        alert("Mảng không có phần tử");
    }
    else{
        let max=0
        let Maxnhat=0
        for(let i=0;i<input;i++){
            let n=Number(prompt("Nhập ký tự bạn muốn thêm"));
            if(isNaN(n)){
            alert("vui lòng nhập sô")
            }
            else{
                arr.push(n)
            for(let j=0;j<arr.length;j++){
                if(n>max){
                    Maxnhat=max
                    max=n
                }
                else if(n>Maxnhat&&n<max){
                    Maxnhat=n
                }
            } 
            }
        } 
        console.log(Maxnhat)   
    }
    

