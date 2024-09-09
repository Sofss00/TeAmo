document.addEventListener("DOMContentLoaded", function() {
    const balloonContainer = document.getElementById('balloons-container');
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundImage = 'url("img_pag/balao_coracao.png")'; // Substitua "sua-imagem.jpg" pelo caminho da sua imagem
        balloonContainer.appendChild(balloon);

        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }

    // Cria balões a cada 500ms
    const balloonInterval = setInterval(createBalloon, 500);

    // Para a animação e faz os balões desaparecerem após 3 segundos
    setTimeout(() => {
        clearInterval(balloonInterval);
        const balloons = document.querySelectorAll('.balloon');
        balloons.forEach(balloon => {
            balloon.classList.add('stop');
            setTimeout(() => {
                balloon.classList.add('fade-out');
                setTimeout(() => {
                    balloon.remove();
                }, 1000); // Remove o balão após o desaparecimento
            }, 500); // Adiciona um pequeno atraso para garantir que os balões parem antes de desaparecer
        });
    }, 15000);
});
