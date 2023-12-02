// inheritance:
class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
     constructor(firstName,lastName, id, testScores){
         super(firstName,lastName, id, testScores)
         this.scores = testScores
     }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        let sum = 0
        for(let i = 0;i<=this.scores.length-1;i++){
            sum+= this.scores[i]
        }
        let targetsum = sum/this.scores.length
        if(targetsum >= 90 && targetsum <= 100){
            return 'O'
        }
        if(targetsum >= 80 && targetsum <90){
            return 'E'
        }
        if(targetsum >= 70 && targetsum <80){
            return 'A'
        }
        if(targetsum >= 55 && targetsum < 70){
            return 'P'
        }
        if(targetsum >= 40 && targetsum < 55){
            return 'D'
        }
        if(targetsum < 40){
            return 'T'
        }
    }
     
}