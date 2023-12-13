document.addEventListener("DOMContentLoaded", function() {
    const quadrado = document.getElementById("meuQuadrado");
    const contadorElement = document.getElementById("contador");

    let tempoMouseDentro = 0;
    let movimentoInterval;
    let contadorInterval;

    function moverQuadrado() {
        const maxX = window.innerWidth - quadrado.clientWidth;
        const maxY = window.innerHeight - quadrado.clientHeight;

        const novoX = Math.floor(Math.random() * maxX);
        const novoY = Math.floor(Math.random() * maxY);

        quadrado.style.transform = `translate(${novoX}px, ${novoY}px)`;
    }

    function iniciarContador() {
        contadorInterval = setInterval(function() {
            tempoMouseDentro += 100; 
            contadorElement.innerText = `Tempo: ${tempoMouseDentro / 100}s`;
        }, 100);
    }

    function pararContador() {
        clearInterval(contadorInterval);
    }

    quadrado.addEventListener("mouseover", function() {
        iniciarContador();
        movimentoInterval = setInterval(moverQuadrado, 3000); // Movimento a cada 500 milissegundos (0.5 segundos)
    });

    quadrado.addEventListener("mouseout", function() {
        pararContador();
        
        clearInterval(movimentoInterval);
    });

    // Mover o quadrado inicialmente
    moverQuadrado();
});
