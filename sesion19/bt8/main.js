let input=Number(prompt("vui lòng nhập 1 tháng trong năm"))
if(!isNaN(input)){  
        if(input<=0||input>12){
            alert("có đi học không mà ko biết nhập tháng")
        }
        else{
                if(input>=1&&input<4){
                    alert("Mùa Xuân")
                }
                else if(input>=4&&input<7){
                    alert("Mùa Hạ")
                }
                else if(input>=7&&input<10){
                    alert("Mùa Thu")
                }
                else{
                    alert("Mùa Đông")
                }
            }  
    }
else{
    alert("biết đọc ko mà nhập bậy")
}