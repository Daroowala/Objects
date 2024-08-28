var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    
}
console.log(plan1)

var webCourse = {
    t1: "Ali",
    t2: "Ahmed",
    t3: "Basit",
    
}
console.log(webCourse)
webCourse.t4 = "Farhan"
webCourse.class = [9,12]

console.log(webCourse)
var abc = "t2" in webCourse;{
    
    console.log(abc)
}

var myQuestions = [
    {
        question: "What is your name?",
        answer : {
            a : "Ali",
            b : "Rehan",
            c : "Basit"
        },
        correctAnswer: "a"
    },

    {
        question: "What is your age?",
        answer : {
            a : 18,
            b : 12,
            c : 15
        },
        correctAnswer: "b"
    },
]

// is object mai koi new obj add karna aur abj mai koi property add karna ka tarika hai aur update karna bhi hai
let obj = {
    FullName: "sadksa",
    age: 18,
    id: 5655,
    }
    obj.inst = "Smit"
    obj.course = "web delvp"
    obj.id = 222383
    console.log(obj)
    obj.age = 20;
    
    console.log(obj)
    
    let check = "course" in obj;
    console.log(check)
    