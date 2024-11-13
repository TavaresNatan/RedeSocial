createsearchbarsugestions("Test");

//para fins de test
const searchsugestions = 
[
    "sol", "lua", "mar", "vento",
     "fogo", "terra", "nuvem", "estrela",
      "chuva", "flor"
    ];

    searchsugestions.forEach((sug) => {
        createsearchbarsugestions(sug); 
    });

function createsearchbarsugestions(sugestion){

    const container = document.getElementById("searchbarsugestions");

    const sugbut = document.createElement("button");
    sugbut.className = "searchbarbutton";
    sugbut.innerText = sugestion;
    //criar as propriedades do botao e dizer que ao ser 
    //clicado ele pesquisa o conteudo dentro dele

    sugbut.addEventListener("click", function() {
        alert("Searching for: " + suggestion);
        // Here you could replace alert with actual search functionality
    });


    container.appendChild(sugbut);
}


