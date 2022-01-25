const a = document.querySelector(".login");

const handleOauth = () => {
    fetch("https://github.com/login/oauth/authorize");
};

a.addEventListener("click", handleOauth);
