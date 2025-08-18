let quiz = [
    {question: "Сколько железных слиток нужно чтобы скрафтить железный блок?", answer: "9"},
    {question: "Какая самая последния версия маинкрафта?", answer: "1.21.8"},
    {question: "Что нужно чтобы сделать портал в ад?", answer: "Обсидиан"},
    {question: "Сколько максимум железа выподает когда убиваешь железного голема?", answer: "5"}
]
let corectquestindex = 0
let score = 0
let questionelem = document.getElementById("question")
let answerinput = document.getElementsById("answerinput")
let checkbtn = document.getElementById("checkbtn")
let resultelem = document.getElementById("result")
let scoreelem = document.getElementById("score")
function showQuestion(){
    questionelem.textContent = quiz[corectquestindex].question
    answerinput.value = ""
    resultelem.textContent = ""
    answerinput.focus()
}
checkbtn.addEventListener("click", function(){
    let useranswer = answerinput.value.toLowerCase().trim()
    if(useranswer === quiz[corectquestindex].answer){
        resultelem.textContent = "Правильно!"
        resultelem.style = "green"
    }else{
        resultelem.textContent = `Неправильно. Правильный ответ: ${quiz[corectquestindex].answer}`
        resultelem.style = "red"
    }
    settypeout(function(){
        corectquestindex++
        if(corectquestindex < quiz.length){
            showQuestion()
        }else{
            endgame()
        }
    }, 1000)
})
function endgame(){
    questionelem.textContent = "Отличная игра!"
    resultelem.textContent = `Вы набрали ${score} из ${quiz.length} балов`
    answerinput.style.display = "none"
    checkbtn.style.display = "none"
}
window.onload = showQuestion