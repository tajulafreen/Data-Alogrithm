// Array of sunshine:
function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    let reversed = ''
  for(let i = arr.length -1;i>=0;i--){
    reversed += arr[i]+' '
  }
  console.log(reversed)
}