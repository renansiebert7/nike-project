let body = document.querySelector("body")
let tenis = document.querySelector(".imagemtenis")

function mudarVisual(cor, imagem){
   tenis.classList.add("trocaefeito")

    body.style.background = cor
    tenis.src = imagem 

   setTimeout(() => {
    tenis.src = imagem
        tenis.classList.remove("trocaefeito")
   }, 500);
      
    
    
}

