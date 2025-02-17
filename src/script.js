
    
/*document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll("input[type='radio']");*/

    document.querySelectorAll(".activity").forEach(input => {
        
        input.addEventListener('change', function () {
            document.querySelectorAll('#chcolor').forEach(div => {
                div.style.backgroundColor = ''; // Reset na výchozí
            });
            const parentDiv = this.closest('#chcolor');

            if (this.checked) {
                if (this.value === "activity") {
                    this.style.accentColor = "blue";
                    parentDiv.style.backgroundColor = "#e6f0ff";
                    
                } else if (this.value === "mentions") {
                    this.style.accentColor = "blue";
                    parentDiv.style.backgroundColor = "#e6f0ff";
                    
                } else if (this.value === "customised") {
                    this.style.accentColor = "blue";
                    parentDiv.style.backgroundColor = "#e6f0ff";
                    
                }
                
            }
              
        });
    });

