const btnGenerator = document.querySelector(".btn-generator-color")
const directionsIcon = document.querySelectorAll(".group-direction i")
const colorOne = document.querySelector(".colorOne")
const colorTwo = document.querySelector(".colorTwo")
btnGenerator.addEventListener("click",gerarCor)
let direction = "to top"

directionsIcon.forEach((icons)=>{
    icons.onclick=()=>{
        direction = icons.getAttribute("data-dir")
    }
})    


function gerarCor(){
    const gradient = `linear-gradient(${direction},${colorOne.value},${colorTwo.value})`
    const backgroundTela = document.querySelector(".container-gradient-colors-wrapper")
    backgroundTela.style.backgroundImage=gradient
    const resultCor = document.querySelector(".codigo-hexadecimal")
    resultCor.innerHTML=gradient
}

