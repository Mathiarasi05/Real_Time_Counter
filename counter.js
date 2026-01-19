const userInput = document.getElementById("userInput")
const count = document.getElementById("count")
const warning = document.getElementById("alert")

userInput.addEventListener("input", () => {
    count.textContent = userInput.value.length

    if(userInput.value.length == 200){
        count.style.color = "red"
        warning.style.display = "inline"
    }
    else{
        count.style.color = "black"
        warning.style.display = "none"
    }
})