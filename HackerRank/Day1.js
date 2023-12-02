function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    let secondinteger;
    let seconddouble;
    let secondstring;
    // Read and save an integer, double, and String to your variables.
    secondinteger = parseInt(readLine())
    seconddouble = parseFloat(readLine()) 
    secondstring = readLine()
    // Print the sum of both integer variables on a new line.
    console.log(secondinteger + i)
    // Print the sum of the double variables on a new line.
    console.log((seconddouble + d).toFixed(1))
    // Concatenate and print the String variables on a new line
    console.log(s + secondstring)
    // The 's' variable above should be printed first.

}