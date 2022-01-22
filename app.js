const rocket = document.getElementById("rocket");
const earth = document.getElementById("earth");
const moon = document.getElementById("moon");
const saturn = document.getElementById("saturn");
const jupyter = document.getElementById("jupyter");
const earthText = document.querySelector(".earth-text");
const moonText = document.querySelector(".moon-text");
const saturnText = document.querySelector(".saturn-text");
const jupyterText = document.querySelector(".jupyter-text");

const class_name = ["earth", "moon", "saturn", "jupyter"];

let left = 40.5;
let cnt = 1;

const earth_css = document.styleSheets[1].rules[10].style;
const moon_css = document.styleSheets[1].rules[11].style;
const saturn_css = document.styleSheets[1].rules[12].style;
const jupyter_css = document.styleSheets[1].rules[13].style;

// Input Keyboard Function
const handleMove = (e) => {
    const key = e.key;
    c_name = rocket.className;

    if (key == "ArrowRight" && left < 80.5) {
        rocket.style.left = `${left}%`;
        rocket.classList.replace(c_name, class_name[cnt]);
        imageAnimation(class_name[cnt]);
        cnt += 1;
        left += 15;
    } else if (key == "ArrowLeft" && left > 40) {
        imageAnimation(class_name[cnt - 1]);
        rocket.classList.replace(c_name, class_name[cnt - 1]);
        left -= 15;
        cnt -= 1;
        rocket.style.left = `${left}%`;
    }
    if (key === "Enter") {
        console.log("다음 페이지로 이동!");
    }
};

// Insert Animation Function
const imageAnimation = (name) => {
    if (name == earth.className) {
        earth_css.animation = "1.5s ease-in-out 0s infinite normal none running imageMove";
        moon_css.animation = "";
        saturn_css.animation = "";
        jupyter_css.animation = "";
        earthText.innerText = "Press Enter";
        moonText.innerText = "";
        saturnText.innerText = "";
        jupyterText.innerText = "";
    } else if (name == moon.className) {
        moon_css.animation = "1.5s ease-in-out 0s infinite normal none running imageMove";
        earth_css.animation = "";
        saturn_css.animation = "";
        jupyter_css.animation = "";
        moonText.innerText = "Press Enter";
        earthText.innerText = "";
        saturnText.innerText = "";
        jupyterText.innerText = "";
    } else if (name == saturn.className) {
        saturn_css.animation = "1.5s ease-in-out 0s infinite normal none running imageMove";
        earth_css.animation = "";
        moon_css.animation = "";
        jupyter_css.animation = "";
        saturnText.innerText = "Press Enter";
        earthText.innerText = "";
        moonText.innerText = "";
        jupyterText.innerText = "";
    } else {
        jupyter_css.animation = "1.5s ease-in-out 0s infinite normal none running imageMove";
        earth_css.animation = "";
        moon_css.animation = "";
        saturn_css.animation = "";
        jupyterText.innerText = "Press Enter";
        earthText.innerText = "";
        moonText.innerText = "";
        saturnText.innerText = "";
    }
};

imageAnimation(rocket.className);

window.addEventListener("keydown", handleMove);
