const menus = document.querySelectorAll(".menu")

menus.forEach((menu) =>{
    menu.addEventListener("click", () => {
        const menuAtual = document.querySelector(".ativo")

        if(menuAtual){
            menuAtual.classList.remove("ativo")
        }
        menu.classList.add("ativo")
    })

    
})

const removeAtivoDoMenu = document.querySelector(".capa-blog")
removeAtivoDoMenu.addEventListener("mouseenter", () => {

    const menuativo = document.querySelector(".menu-servicos")
    menuativo.classList.remove("ativo")
})

const setaAvancar = document.getElementById("seta-avancar")
const setaVoltar = document.getElementById("seta-voltar")
const caixas = document.querySelectorAll(".caixa")
let caixaAtual = 0


setaAvancar.addEventListener("click",() => {
    if(caixaAtual === caixas.length -1){
        caixaAtual = -1
    }

    caixaAtual ++

    esconderCaixapassada()

    caixas[caixaAtual].classList.add("mostrar")

})

setaVoltar.addEventListener("click", () =>{
    if(caixaAtual === 0){
        caixaAtual = 6
    }

    caixaAtual --

    esconderCaixapassada()

    caixas[caixaAtual].classList.add("mostrar")
})


function esconderCaixapassada() {
    const esconderCaixa = document.querySelector(".mostrar")
    esconderCaixa.classList.remove("mostrar")
}

const numeros = document.querySelectorAll(".numero")
const containes = document.querySelectorAll(".containe")
const paginas = document.querySelectorAll(".pagina-cartegoria")

numeros.forEach((numero, containe,) => {
    numero.addEventListener("click", () => {
        const mostrarLinhaDoNumero = document.querySelector(".numero-selecionado")
        mostrarLinhaDoNumero.classList.remove("numero-selecionado")

        numero.classList.add("numero-selecionado")

        const containeSelecionado = document.querySelector(".selecionado")
        containeSelecionado.classList.remove("selecionado")

        containes[containe].classList.add("selecionado")

        const paginaAtiva = document.querySelector(".ativa")
        paginaAtiva.classList.remove("ativa")

        paginas[containe].classList.add("ativa")
        paginas[containe].classList.add("ativa1")
    })
})

const paginas1 = document.querySelectorAll(".pagina-1")

paginas1.forEach(pagina => {
    pagina.addEventListener("click", () => {
        const paginaAtiva = document.querySelector(".ativa")
        paginaAtiva.classList.remove("ativa")

        paginas[4].classList.add("ativa")
        
        const mostrarLinhaDoNumero = document.querySelector(".numero-selecionado")
        mostrarLinhaDoNumero.classList.remove("numero-selecionado")

        numeros[0].classList.add("numero-selecionado")

        const containeSelecionado = document.querySelector(".selecionado")
        containeSelecionado.classList.remove("selecionado")

        containes[0].classList.add("selecionado")
    })
})


const paginas2 = document.querySelectorAll(".pagina-2")

paginas2.forEach(pagina => {
    pagina.addEventListener("click", () => {
        const paginaAtiva = document.querySelector(".ativa")
        paginaAtiva.classList.remove("ativa")

        paginas[5].classList.add("ativa")

        const mostrarLinhaDoNumero = document.querySelector(".numero-selecionado")
        mostrarLinhaDoNumero.classList.remove("numero-selecionado")

        numeros[1].classList.add("numero-selecionado")
        
        const containeSelecionado = document.querySelector(".selecionado")
        containeSelecionado.classList.remove("selecionado")
        
        containes[1].classList.add("selecionado")
    })
})

const paginas3 = document.querySelectorAll(".pagina-3")

paginas3.forEach(pagina => {
    pagina.addEventListener("click", () => {
        const paginaAtiva = document.querySelector(".ativa")
        paginaAtiva.classList.remove("ativa")
        
        paginas[6].classList.add("ativa")
        
        const mostrarLinhaDoNumero = document.querySelector(".numero-selecionado")
        mostrarLinhaDoNumero.classList.remove("numero-selecionado")
        
        numeros[2].classList.add("numero-selecionado")
        
        const containeSelecionado = document.querySelector(".selecionado")
        containeSelecionado.classList.remove("selecionado")
        
        containes[2].classList.add("selecionado")
    })
})

const paginas11 = document.querySelectorAll(".pagina-1-1")

paginas11.forEach(pagina => {
    pagina.addEventListener("click", () => {
        const paginaAtiva = document.querySelector(".ativa1")
        paginaAtiva.classList.remove("ativa1")

        paginas[0].classList.add("ativa1")
        
        const mostrarLinhaDoNumero = document.querySelector(".numero-selecionado")
        mostrarLinhaDoNumero.classList.remove("numero-selecionado")

        numeros[0].classList.add("numero-selecionado")

        const containeSelecionado = document.querySelector(".selecionado")
        containeSelecionado.classList.remove("selecionado")

        containes[0].classList.add("selecionado")
    })
})

const paginas21 = document.querySelectorAll(".pagina-2-1")

paginas21.forEach(pagina => {
    pagina.addEventListener("click", () => {
        const paginaAtiva = document.querySelector(".ativa1")
        paginaAtiva.classList.remove("ativa1")

        paginas[1].classList.add("ativa1")

        const mostrarLinhaDoNumero = document.querySelector(".numero-selecionado")
        mostrarLinhaDoNumero.classList.remove("numero-selecionado")

        numeros[1].classList.add("numero-selecionado")

        const containeSelecionado = document.querySelector(".selecionado")
        containeSelecionado.classList.remove("selecionado")

        containes[1].classList.add("selecionado")
    })
})

const paginas31 = document.querySelectorAll(".pagina-3-1")

paginas31.forEach(pagina => {
    pagina.addEventListener("click", () => {
        const paginaAtiva = document.querySelector(".ativa1")
        paginaAtiva.classList.remove("ativa1")

        paginas[2].classList.add("ativa1")

        const mostrarLinhaDoNumero = document.querySelector(".numero-selecionado")
        mostrarLinhaDoNumero.classList.remove("numero-selecionado")

        numeros[2].classList.add("numero-selecionado")

        const containeSelecionado = document.querySelector(".selecionado")
        containeSelecionado.classList.remove("selecionado")

        containes[2].classList.add("selecionado")
    })
})

const btnAbriMenuDeCartegorias = document.getElementById("categoria")

// btnAbriMenuDeCartegorias.addEventListener("change", () => {
//     const menuDeCategoria = document.querySelector(".categoria-ul")
//     menuDeCategoria.classList.toggle("apertada")

//     if(menuDeCategoria.classList.contains("apertada")){
//         menuDeCategoria.classList.add("apertada")
//     } else {
//         menuDeCategoria.classList.remove("apertada")
//     }
// })


btnAbriMenuDeCartegorias.addEventListener("change", () => {
    const menuDeCategoria = document.querySelectorAll(".categoria-ul")
    menuDeCategoria[1].classList.toggle("apertada")

    if(menuDeCategoria[1].classList.contains("apertada")){
        menuDeCategoria[1].classList.add("apertada")
    } else {
        menuDeCategoria[1].classList.remove("apertada")
    }
})


AOS.init();

window.sr =  ScrollReveal({reset: true})

sr.reveal(".t1",{
    rotate:{x:100, y:0, z:0},
    duration:1500
})

sr.reveal(".b1",{
    rotate:{x:0, y:100, z:0},
    duration:1700
})