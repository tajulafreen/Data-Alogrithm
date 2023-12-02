// Running time and complexity:=
 //Enter your code here
 const numbers = input.split("\n").slice(1).map(n => parseInt(n))
 let answer;
 
 for(i = 0; i < numbers.length; i++) {
     if(numbers[i] === 1) {
         console.log("Not prime")
         continue;
     }
     let squareRoot = Math.sqrt(numbers[i])
     for(j = 2; j < squareRoot + 1; j++) {
         const number = numbers[i];
         if(number === 2) {
             answer = "Prime"; 
             break;   
         } else if(number % j === 0) {
             answer = "Not prime"; 
             break;   
         } else {
         answer = "Prime";
         }
     }
     console.log(answer)
 }

