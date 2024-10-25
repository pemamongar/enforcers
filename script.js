// Declaring  varaibles to contain html 


let sec3h1 = document.getElementById("sec3h1");

let sec3p = document.getElementById("sec3p");

let divBtn =  document.getElementById("divBtn");

let sec3div2 = document.getElementById("sec3div2");





// The function below is for our first scene

function belives(){

    sec3h1.style.marginTop = "50px";

    sec3h1.innerText = "Belives of Bhutanese";

    sec3p.innerText = "We are a small nation, but our self-belief is great.When we come together citizens and guests-we are capable of moving moving mountains. The proof is in our culture: diverse, continuous,stories.The capacity is in our character: dependable, adaptable, ingenious We see a bright future enabled by humanity's highest ideales and collective effort.We believe in our ability and responsibility to realise it. ";

    divBtn.innerHTML = "<button onclick='future()'>Future</button>  <button onclick='worth()'>Worth</button> <button onclick='nature()'>Nature</button>";

}


function worth(){

    sec3h1.style.marginTop = "50px";


    sec3h1.innerText = "Our worth ";

    sec3p.innerText = "We are caretakers of a precious place and a rich, irreplaceable culture. Our shared responsibility, which we woe to future generations, is to preserve and enhance it. Our task is to balance welcome with prudence, and access with protection. It requires an investment. This is not to shut people but to safeguard the wonders within . Each person who visits contributes meaningfully to our nation's preservation and progression.";
    
    divBtn.innerHTML = " <button onclick='belives()'>Belives</button>   <button onclick='future()'>Future</button>   <button onclick='nature()'>Nature</button>" ;





}







function future(){

    sec3h1.style.marginTop = "50px";

    sec3h1.innerText = "Future of Bhutanese";

    sec3p.innerText = "The kingdom is steeped in history, but our gaze is fixed on the future.The future requires us to protect and preserve our heritage but also to forge new pathways leading forthcoming and generations to fresh possibilites.This is our moment of evolution; a moment devoted to ensuring that the opportunities our young people seek are found, and realised, here.";

    divBtn.innerHTML = " <button onclick='belives()'>Belives</button>   <button onclick='worth()'>Worth</button>   <button onclick='nature()'>Nature</button>" ;


}


function nature(){

    sec3h1.style.marginTop = "50px";

    sec3h1.innerText = "Our Nature";

    sec3p.innerText = "Nature shows us the way: change, adaptation, tenacity-and evolution. In Bhutan, we are guardains of some of the world's most pristine, wild and sacred places.They are also vulnerable .They are essential to our culture, ecosystems, watersheds and spirits. In our built and busy world , they are vital counterabalance. They are a gateway to the expensive experiences we humans fundamentally need.";

    divBtn.innerHTML = " <button onclick='belives()'>Belives</button>   <button onclick='future()'>Future</button>   <button onclick='worth()'>Worth</button>  " ;

}

// scrolling

var copy = document.querySelector(".skills-slide").cloneNode(true);
document.querySelector(".skills").appendChild(copy);



