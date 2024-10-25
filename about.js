var card = document.querySelectorAll(".card");
card.forEach(function(card) {
    card.addEventListener("click", function(){
        if (card.classList.contains("open")) { 
            card.className = "card";
        }
        else { 
        card.className = "card open";
        }
        
    });    
});