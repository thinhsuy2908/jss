function add(){
   let str =document.getElementById("a").value
   if (str !== "") {
    const li = document.createElement("li");
    li.textContent = str;
    document.getElementById("subjectList").appendChild(li);
    document.getElementById("a").value = "";;
  } 
  else{
    alert("bạn phải nhập 1 môn học")
  }
}