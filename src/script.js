
    
/*document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll("input[type='radio']");*/

    document.querySelectorAll(".activity").forEach(input => {
        
        input.addEventListener('change', function () {
            document.querySelectorAll('#chcolor').forEach(div => {
                div.style.backgroundColor = ''; });
            document.querySelectorAll('#popis').forEach(h3 => {
                h3.style.color = ''; // Reset na výchozí                
            });
            
               
            const parentDiv = this.closest('#chcolor');
            const h3 = parentDiv.querySelector('h3');
            
            
            if (this.checked) {
                if (this.value === "activity") {
                   
                    parentDiv.style.backgroundColor = "#e6f0ff";
                    h3.style.color = "red";
                                       
                } else if (this.value === "mentions") {
                    //this.style.accentColor = "blue";
                    parentDiv.style.backgroundColor = "#e6f0ff";
                    h3.style.color = "red";
                    
                } else if (this.value === "customised") {
                    //this.style.accentColor = "blue";
                    parentDiv.style.backgroundColor = "#e6f0ff";
                    h3.style.color = "red";                  
                }
                
                
            }
             
        });
    });

   
