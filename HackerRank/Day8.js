// Dictonaries:
function processData(input) {
    //Enter your code here
    const phoneBook = new Map();
    const arr = input.split("\n");
    const totalNo = Number(arr[0]);
    arr.slice(1).forEach((a,i)=> {
        if(i<totalNo) {
            const str = a.split(' ');        
            phoneBook.set(str[0],str[1]);
        } else {
            if(phoneBook.has(a)) console.log(`${a}=${phoneBook.get(a)}`);
            else console.log("Not found")
        }
    })
} 