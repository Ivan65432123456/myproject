let quiz = [
    {question: "Сколько железных слиток нужно чтобы скрафтить железный блок?", answer: "9"},
    {question: "Какая самая последния версия маинкрафта?", answer: "1.21.8"},
    {question: "Что нужно чтобы сделать портал в ад?", answer: "обсидиан"},
    {question: "Сколько максимум железа выподает когда убиваешь железного голема?", answer: "5"}
]
let corectquestindex = 0
let score = 0
let questionelem = document.getElementById("question")
let answerinput = document.getElementById("answerinput")
let checkbtn = document.getElementById("checkbtn")
let resultelem = document.getElementById("result")
let scoreelem = document.getElementById("score")
let texth1 = document.getElementById("texth1")
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
        resultelem.style.fontSize = "30px"
        resultelem.style.color = "green"
        score ++
    }else{
        resultelem.textContent = `Неправильно. Правильный ответ: ${quiz[corectquestindex].answer}`
        resultelem.style.fontSize = "18px"
        resultelem.style.transition = "font-size 2s ease"
        resultelem.style.color = "red"
    }
    setTimeout(function(){
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
    texth1.style.transition = "font-size 3s ease, width 1s"
    texth1.style.fontSize = "10px"
    texth1.style.width = "15%"
    checkbtn.style.display = "none"
}
window.onload = showQuestion