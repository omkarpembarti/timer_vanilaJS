(function () {
    let hrs = document.querySelector("#hours");
    let mins = document.querySelector("#minutes");
    let secs = document.querySelector("#seconds");

    let resetbtn = document.querySelector(".resetbtn");
    let startbtn = document.querySelector(".startbtn");
    let stopbtn = document.querySelector(".stopbtn");
    stopbtn.style.display = "none";

    let timerID;
    console.log("I runned");

    resetbtn.addEventListener("click", () => {
        stopbtn.style.display = "none";
        startbtn.style.display = "initial";
        hrs.value = "00";
        mins.value = "00";
        secs.value = "00";
        clearInterval(timerID);
    });

    startbtn.addEventListener("click", () => {
        startbtn.style.display = "none";
        stopbtn.style.display = "initial";
        timerID = setInterval(() => {
            timer();
        }, 1000);
    });
    stopbtn.addEventListener("click", () => {
        startbtn.style.display = "initial";
        resetbtn.style.display = "initial";
        stopbtn.style.display = "none";
        clearInterval(timerID);

    });



    function timer() {

        if (parseInt(secs.value) != 0) {
            secs.value = `${parseInt(secs.value) - 1 < 10 ? "0" : ""}${parseInt(secs.value) - 1}`;

        } else if (parseInt(mins.value) != 0 && parseInt(secs.value) == 0) {
            mins.value = `${parseInt(mins.value) - 1 < 10 ? "0" : ""}${parseInt(mins.value) - 1}`;
            secs.value = 59;

        } else if (parseInt(hrs.value) != 0 && parseInt(mins.value) == 0 && parseInt(secs.value) == 0) {
            hrs.value = `${parseInt(hrs.value) - 1 < 10 ? "0" : ""}${parseInt(hrs.value) - 1}`;
            mins.value = 59;
            secs.value = 59;
        }
        if (parseInt(hrs.value) == 0 && parseInt(mins.value) == 0 && parseInt(secs.value) == 0) {
            resetbtn.click();
        }
    }

})();


