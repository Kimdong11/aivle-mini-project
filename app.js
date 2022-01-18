const game1 = document.getElementById("game1");
const game2 = document.getElementById("game2");
const game3 = document.getElementById("game3");
const game4 = document.getElementById("game4");
const link = document.querySelector(".game-title")
const image = document.getElementById("game-img")
const a = document.createElement("a")

const chanegeContents = (event) => {
    id = event.target.id;
    if (id === "game1") {
        a.text = "상식 퀴즈 입니다. 이동하시겠습니까?"
        a.href = "./game1.html"
        image.src = "./image/1.jpeg";
        link.append(a)
    }
    else if (id === "game2") {
        image.src = "./image/2.jpeg";
        a.text = "속담 퀴즈 입니다. 이동하시겠습니까?"
        a.href = "./game2.html"
        link.appendChild(a)
    }
    else if (id === "game3") {
        image.src = "./image/3.jpeg";
        a.text = "영화 퀴즈 입니다. 이동하시겠습니까?"
        a.href = "./game3.html"
        link.appendChild(a)
    }
    else {
        image.src = "./image/4.jpeg";
        a.text = "랜덤 퀴즈 입니다. 이동하시겠습니까?"
        a.href = "./game4.html"
        link.appendChild(a)
    }
}


game1.addEventListener('click', chanegeContents)
game2.addEventListener("click", chanegeContents)
game3.addEventListener("click", chanegeContents)
game4.addEventListener("click", chanegeContents)

