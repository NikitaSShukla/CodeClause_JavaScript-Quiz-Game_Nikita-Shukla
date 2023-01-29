const quizData = [{
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "JavaScript is an ___ Language?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None of the above",
        correct: "a",
    },
    {
        question: " Which of the following keywords is used to define  a variable in JavaScript?",
        a: "var",
        b: "let",
        c: "Both a and b",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following methods is used to access HTML elements using JavaScript?",
        a: "getElementsbyId()",
        b: "getElementsbyByClassName()",
        c: "Both a and b",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        a: "Node",
        b: "Vue",
        c: "React",
        d: "Cassandra",
        e: "Only a and b",
        f: "Only c",
        g: "Only a , b, and c",
        h: "None of the above",
        correct: "g",
    }

];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);