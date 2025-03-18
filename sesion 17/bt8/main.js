const startDate =new Date(prompt("xin mời nhập ngày bắt đầu"))
const endDate =new Date(prompt("xin mời nhập ngày kết thúc"))
const diffTime = endDate - startDate;
const diffDays = diffTime / (1000 * 60 * 60 * 24); 
document.writeln("độ lệch là",diffDays,"ngày")