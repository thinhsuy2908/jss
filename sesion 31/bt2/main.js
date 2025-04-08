function changeBackgroundColor(){
    let test =document.getElementById("a")
    let title = document.getElementById("b")
    if(document.body.style.backgroundColor == "black"){
    test.style.color="black";
    title.style.color="black";
    document.body.style.backgroundColor="white";
    }
    else{
        test.style.color="white";
        title.style.color="white";
        document.body.style.backgroundColor="black";
    }
}
