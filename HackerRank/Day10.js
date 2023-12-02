// Binary number:
function main("7060831106",
    "7906717617") {
        const n = parseInt(readLine().trim(), 10);
            
        const binaries = (n >>> 0).toString(2).split('0')
        binaries.sort((a, b) => {
            return a - b;
        });
        console.log(binaries[binaries.length - 1].length);
    }