// Generics:=
function printArray<T>(items: T[]) {
    let length = 1 //=1 to enter loop
    while (length) {   
        length = Number(readLine()) //length of array to print
        for (let i = 0; i < length; i++) {  
            console.log(readLine()) //print elements of array
        }
    } 
}
printArray(inputLines)

