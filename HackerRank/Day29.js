// bitwise:=
function bitwiseAnd(N, K) {
    let max = 0;
    
    for(let i = 1; i <= N; i++) {
        for(let j = N; j > i; j--) {
            let bitAndOp = i & j;
            if(bitAndOp > max && bitAndOp < K ) {
                max = bitAndOp;
            }
        }
    }
    
    return max;
}