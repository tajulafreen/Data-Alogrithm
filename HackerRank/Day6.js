// let's review:=
function processData(input) {
    
    let words = input.split('\n').slice(1);
    
    for(var i=0;i<words.length;i++){
        var word = words[i];
        var evenLetters= '';
        var oddLetters = '';
        for(var j=0;j<word.length;j++){
            if(j==0 || j%2==0){
                evenLetters += word[j];
            }else{
                oddLetters += word[j];
            }
        }
    
        console.log(evenLetters+' '+oddLetters);
    }
    
} 