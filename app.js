const game1 = document.querySelector(".circle1")
const gameText = document.querySelector(".circle-container h2")


const handleMouseIn = (event) => {
    console.log(event)
    gameText.text = "Click Me"
}

game1.addEventListener("mouseenter", handleMouseIn)

