// Scope:
function main() {
    // Enter your code here
    class Difference {
        elements: Array<number>;
        public maximumDifference: number;
        constructor(elements: Array<number>) {
            this.elements = elements;
        }
        public computeDifference(): void {
            this.maximumDifference = this.elements.reduce<number>((acc, item) => {
                this.elements.forEach((i) => {
                    const abs = Math.abs(item - i)
                    if (abs > acc) { acc = abs }
                })
                return acc;
            }, 0);
            
            // let max = 0;
            // for (let i = 0; i < this.elements.length; i++) {
            //     for (let j = 0; j < this.elements.length; j++) {
            //         let abs = Math.abs(this.elements[i] - this.elements[j]);
            //         if (abs > max) max = abs;
            //     }
            // }
            // this.maximumDifference = max;
        }
    }
    let d = new Difference(inputLines[1].toString()
        .split(" ")
        .map(x => parseInt(x)));
    d.computeDifference();
    console.log(d.maximumDifference);
}
