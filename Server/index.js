let hellobutton = document.getElementById("HelloBTN")
let jokebutton = document.getElementById("JokeBTN")
let factbutton = document.getElementById("FactBTN")
let colorbutton = document.getElementById("ColorBTN")
let textbutton = document.getElementById("TextBTN")
let namebutton = document.getElementById("NameBTN")
let agebutton = document.getElementById("AgeBTN")
hellobutton.addEventListener("click", function(){
    alert("Привет рад тебя видеть!")
})
jokebutton.addEventListener("click", function(){
    alert("Для того чтобы похудеть, нужна сила воли, а сила воли в мясе.")
})
factbutton.addEventListener("click", function(){
    alert("Физика на греческом языке означает природа")
})
colorbutton.addEventListener("click", function(){
    let colors = ["red", "blue", "green", "yellow"]
    let randomindex = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomindex]
})
textbutton.addEventListener("click", function(){
    let heding = document.querySelector("h1")
    heding.textContent = "Ты изменил заголовок"
})
namebutton.addEventListener("click", function(){
    let username = prompt("Как тебя зовут?")
    alert("Приятно познокомится, " + username+" !")
})
agebutton.addEventListener("click", function(){
    let userage = prompt("Сколько тебя лет")
    userage = Number(userage)
    if(userage<=10){
        alert("Ты школьник")
    }
    else if(userage<17){
        alert("Ты подросток")
    }
    else{
        alert("Ты совершеннолетний")
    }
})