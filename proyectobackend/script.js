/*queryselector busca las clases del index y me captura */
const pantalla= document.querySelector(".pantalla");
const botones= document.querySelectorAll(".boton");
/*para recorrer un arreglo nos sirve un foreach  */
botones.forEach(boton =>{
    /*al hacer click este me haga un evento */
    boton.addEventListener("click", () =>{
       /* console.log(boton.textContent);*/
       const bottonOn =boton.textContent;

       if(boton.id == "limpiar"){
        pantalla.textContent="0";
        return;
       }

       if(boton.id === "eliminar"){
        if(pantalla.textContent.length === 1){
         pantalla.textContent ="0";
        }
        else{
            pantalla.textContent =pantalla.textContent.slice(0,-1);
        }
            return;
    }

    if(boton.id == "igual"){
        try{
            pantalla.textContent = eval(pantalla.textContent);
                
        } /*   
        

                
                else{
                    const resultado = eval(expresion);
                    if(isNaN(resultado)|| !isFinite(resultado)){
                        pantalla.textContent = "¡Error!";
                    }
                     else{
                    pantalla.textContent = resultado;
                     }
            } 
        }*/catch (error){
                pantalla.textContent="¡Error!";
            }
            return;
        }
        if(pantalla.textContent === "0" || pantalla.textContent === "¡Error!"){
            pantalla.textContent= bottonOn;
            
        }
        else{
            pantalla.textContent+= bottonOn
        }
    
        
      
       

    })
})
