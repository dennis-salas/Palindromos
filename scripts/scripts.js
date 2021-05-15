
    function palinDrome() {
        
        var textval = document.getElementById("palabra").value;
        
        todoMinuscula = textval.toLowerCase();
        limpiarFrase = todoMinuscula.normalize('NFD').replace(/[^a-zA-Z0-9s]/g, '');
       
        var resulttxt = "";
        
        for (i =  limpiarFrase.length - 1; i >= 0; i--) {
        resulttxt +=  limpiarFrase.charAt(i);
        }
      
        if (limpiarFrase === resulttxt) {
        document.getElementById("resultado").innerHTML = " Si es un palindromo";
        }
        else {
        document.getElementById("resultado").innerHTML = " No es un palindromo";
        }
        }
        
        document.getElementById("boton").addEventListener("click", palinDrome);