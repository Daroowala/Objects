function check(){
    var score = 0
var rightAnswer1 = document.getElementById("q1-a1"); 
var qus1Answer2 = document.getElementById("q1-a2");
var qus1Answer3 = document.getElementById("q1-a3");
var qus1Answer4 = document.getElementById("q1-a4");
if(rightAnswer1.checked == true){
score++
alert("Your Q1 Answer is Correct")
}
else {
    alert("Your Q1 Answer is !!Wrong!!")
}





var rightAnswer2 = document.getElementById("q2-a1"); 
var qus2Answer2 = document.getElementById("q2-a2");
var qus2Answer2 = document.getElementById("q2-a3");
var qus2Answer2 = document.getElementById("q2-a4");
if(rightAnswer2.checked == true){
score++
alert("Your Q2 Answer is Correct")
}
else {
    alert("Your Q2 Answer is !!Wrong!!")
}
}
// var myQuestion = [
//     {
//         Question: "What is your name",
//         Answer: {
//             a: "Ali",
//             b: "Ahmed",
//             c: "Rehan"
//         },
//         CorrectAnswer: "c"
//     },
//     {
//         Question: "What is your age",
//         Answer: {
//             a: "12",
//             b: "20",
//             c: "16"
//         },
//         CorrectAnswer: "b"
//     }
// ]