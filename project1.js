const button = document.getElementById("buttonHeader");

button.addEventListener("click",lightMode)

/* function prueba()
    { alert("hola");

} */

function lightMode(){
    document.querySelector("body").classList.toggle("change-mode-body");

    document.querySelectorAll(".aHeader").forEach(element => { element.classList.toggle("change-mode-aHeader")
    });

    document.querySelectorAll(".cajagrande").forEach(element=>{element.classList.toggle("change-mode-cajagrande");
    });

    document.querySelectorAll("h3").forEach(element=>{element.classList.toggle("change-mode-h3")
    });

    document.querySelectorAll(".h4").forEach(element=>{element.classList.toggle("change-mode-h4")
    });

    document.querySelectorAll(".cajagrande4").forEach(element=>{element.classList.toggle("change-mode-cajagrande");
    });

    document.querySelector(".contactSmile").classList.toggle("change-mode-contactSmile");
}
