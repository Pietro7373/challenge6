
    
/*document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll("input[type='radio']");*/

    document.querySelector("#activity").addEventListener("click", function(){
        const zmena = document.querySelector("#chcolor");
        if (zmena) {zmena.style.backgroundColor = "#1B1A53"};
        if (zmena) {zmena.style.color = "yellow"};
    });


/*document.addEventListener("DOMContentLoaded", function () {
    const dialog = document.getElementById("myDialog");
    const openButton = document.getElementById("openDialog");
    const closeButton = document.getElementById("closeDialog");

    openButton.addEventListener("click", function () {
        dialog.showModal();
        openButton.classList="invisible"; // Otevře dialog
    });

    closeButton.addEventListener("click", function () {
        dialog.close();
        openButton.classList="visible"; // Zavře dialog
    });
});*/
