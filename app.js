const rocket = document.getElementById("rocket")

let cnt = 40.5;
const handleMove = (e) => {
    const key = e.key;
    if (key == "ArrowRight" && cnt < 85.5) {
        rocket.style.left = `${cnt}%`;
        cnt += 15
    }
    else if (key == "ArrowLeft" && cnt > 25.5) {
        cnt -= 15
        rocket.style.left = `${cnt}%`
    }
}

window.addEventListener('keydown', handleMove)

