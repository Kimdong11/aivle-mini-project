const play = document.querySelector(".play-button");
const Pause = document.querySelector(".fa-pause");
const playButton = document.querySelector(".fa-play");

const audio = new Audio("test1.mp3");
let cnt = 0;

const musicStart = () => {
    if (cnt === 0) {
        audio.play();
        cnt += 1;
    } else {
        audio.pause();
        cnt = 0;
    }
    playButton.classList.toggle("hidden");
    Pause.classList.toggle("hidden");
};

play.addEventListener("click", musicStart);
