// Bubble Sorting:
 let total = 0
    
 for(let i = 0;i<a.length;i++){
     // let swap = 0
     for(let j = 0;j< a.length-1;j++){
         if(a[j]>a[j+1]){
             
             let temp = a[j]
             a[j] = a[j+1]
             a[j+1] = temp
             
             total++
             // swap++;
             
         }
     }
     // if(!swap)break;
 }
 let last = a.pop()
 console.log(`Array is sorted in ${total} swaps.`)
 console.log(`First Element: ${a[0]}`)
 console.log(`Last Element: ${last}`)
