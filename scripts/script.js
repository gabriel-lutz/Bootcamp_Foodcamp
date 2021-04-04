
let comida = 0
let bebida = 0
let sobremesa = 0
let total = comida + bebida + sobremesa

function selecionar(categoria, item){
   
    const deselecionar = document.querySelector(".menu .categoria:nth-child("+ categoria +") .menu-sidescroll .borda")
    if (deselecionar !== null){
    deselecionar.classList.remove("borda")
    }
    const selecionado = document.querySelector(".menu .categoria:nth-child("+ categoria +") .menu-sidescroll .item:nth-child("+ item +") ")
    selecionado.classList.add("borda")
    

   
    if(categoria === 1){
        const valorComida = document.querySelector(".menu .categoria:nth-child("+ categoria +") .menu-sidescroll .item:nth-child("+ item +") .valor ")
        comida = Number(valorComida.innerHTML);
    }else if(categoria === 2){
        const valorBebida = document.querySelector(".menu .categoria:nth-child("+ categoria +") .menu-sidescroll .item:nth-child("+ item +") .valor ")
        bebida = Number(valorBebida.innerHTML);
    }else if(categoria === 3){
        const valorSobremesa = document.querySelector(".menu .categoria:nth-child("+ categoria +") .menu-sidescroll .item:nth-child("+ item +") .valor ")
        sobremesa = Number(valorSobremesa.innerHTML);
    }
    total = comida + bebida + sobremesa;
    
    if (comida > 0 && bebida > 0 && sobremesa > 0){
        const ativarBotao = document.querySelector(".msg")
        ativarBotao.classList.add("ativar")
        ativarBotao.innerHTML = ("<a href='https://wa.me/?text=OIIIIIIIIIIII' target='_blank'>Fechar pedido</a>")
    }

    
}



