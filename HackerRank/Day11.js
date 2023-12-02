// 2d arrays;
function main() {

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        
    
    } 
   let sum = 0;
   let arraySum = [];
   for (let i = 0; i < arr.length - 2; i++) {
      for (let j = 0; j < arr.length -2; j++) {
         sum  = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2] ;                     
         arraySum.push(sum);         
      }      
    }
    console.log(arraySum.reduce((a,b) => (a > b) ? a : b));
} 