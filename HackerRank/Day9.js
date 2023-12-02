// Recurcision:
function factorial(n) {
    // Write your code here
    let s = 1
    if(n==0||n<=1){
        return s
    }
    else if(n > 1){
        for(let i = n;i>=1;i--){
          s = s * i
        }
        return s
    }
    else{
        return 'input has to be positive number'
    }

}
