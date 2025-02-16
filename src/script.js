
    
/*document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll("input[type='radio']");*/

    document.querySelector("#activity").addEventListener("click", function(){
        const zmena = document.querySelector("#chcolor");
        if (zmena) {zmena.style.backgroundColor = "#1B1A53"};
        if (zmena) {zmena.style.color = "yellow"};
    });
