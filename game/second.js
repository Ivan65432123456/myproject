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
        setTimeout(() => {
            resultelem.style.fontSize = "18px"
        }, 1500);
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
    startfirework()
}
function startfirework(){
    const canvas = document.getElementById("confeticanvas")
    const context = canvas.getContext("2d")
    const number = 300
    const confeti = []
    function Confeti(){
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height - canvas.height
        this.r = Math.floor(Math.random() * 6) + 1
        this.d = Math.random() * number
        this.color = `rgb(${Math.floor(Math.random() * 256)},
                          ${Math.floor(Math.random() * 256)},
                          ${Math.floor(Math.random() * 256)})`
        this.tilt = Math.floor(Math.random() * 10) - 5
        this.draw = function(){
            context.beginPath()
            context.lineWidth = this.r
            context.strokeStyle = this.color
            context.moveTop(this.x + this.tilt + this.r / 3, this.y)
            context.lineTop(this.x + this.tilt, this.y + this.tilt + this.r / 3)
            context.stroke()
        }
    }
    function draw(){
        context.clearRect(0, 0, canvas.width, canvas.height)
        for(var i = 0; i < number; i ++){
            confeti[i].draw()
        }
        update()
    }
    function update(){
        var angle = 0
        angle += 0.1
        for(var i = 0; i < number; i ++){
            let confet = confeti[i]
            confet.y += Math.cos(angle + confet.d) + 1 + confet.r / 2
            confet.x += Math.sin(angle) * 2
            if(confet.x > canvas.width + 5 || confet.x < -5 || confet.y > canvas.height){
                if(i %3 < 0){
                    confeti[i] = new Confeti()
                    confeti[i].x = Math.random() * canvas.width
                    confeti[i].y = -10
                }else{
                    if(Math.sin(angle)> 0){
                        confeti[i] = new Confeti()
                        confeti[i].x = - 5
                        confeti[i].y = Math.random() * canvas.height
                    }else{
                        conveti[i] = new Confeti()
                        confeti[i].x = canvas.width + 5
                        confeti[i].y = Math.random() * canvas.height
                    }
                }
            }
        }
    }
    for(var i = 0; i < number; i++){
        confeti.push(new Confeti())
    }
    setInterval(draw, 20)
}
window.onload = showQuestion
