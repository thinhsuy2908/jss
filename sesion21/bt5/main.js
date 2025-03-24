let count=0
let num=0
for(let i=1;i<100;i++){
   num++;
   if(num%3===0){
       document.writeln(num+" Fizz")
   }
    else if(num%5===0){
         document.writeln(num+" Buzz")
    }
    else if(num%3===0 && num%5===0){
         document.writeln(num+" FizzBuzz")
    }
    else{
         document.writeln(num)
    }
}