window.addEventListener("DOMContentLoaded", chistesAleatorios)

let joke = document.getElementById("Joke");
let punchline = document.getElementById("punchline");
let button3 = document.querySelector("#button3");

button3.addEventListener("click", chistesAleatorios)

function chistesAleatorios(){
    const endpoint= "https://api.dadjokes.io/api/random/joke";
    async function apiAsync (){
        const response = await fetch(endpoint);
        const data = await response.json()
        const listaChiste = data.body;
        const joke = listaChiste [0];
        const jokes = joke.setup;
        const punchline = joke.punchline;
        document.getElementById("joke").textContent = jokes;
        document.getElementById("punchline").textContent = punchline;
     }
    apiAsync()
}

try{
    apiAsync()
 }catch(error){
    document.getElementById("punchline").textContent = "Error";
}