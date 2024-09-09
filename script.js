document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('boneco_jogo');
    const hearts = document.querySelectorAll('.coracoes');
    const restartBtn = document.querySelector('#botao_recomeco button');
    const nextPageBtn = document.querySelector('#proxima_pag button');
    let collectedHearts = 0;

    function startGame() {
        collectedHearts = 0;
        nextPageBtn.style.display = 'none'; // Inicialmente esconde o botão "Próxima Página"
        hearts.forEach(heart => {
            heart.style.display = 'block'; // Garante que todos os corações estão visíveis
        });
        positionPlayer();
        positionHearts();
    }

    function positionPlayer() {
        player.style.position = 'absolute';
        player.style.left = '0px';
        player.style.bottom = '0px';
        player.style.width = '60px';
        player.style.height = '95px';
        player.style.backgroundImage = 'url("img/rafa_player.png")'; // Defina a imagem do jogador
        player.style.backgroundSize = 'cover'; // Para garantir que a imagem cubra toda a área do jogador
    }
    
    function positionHearts() {
        const gameArea = document.getElementById('area_jogo');
        const gameRect = gameArea.getBoundingClientRect();
        hearts.forEach(heart => {
            const x = Math.floor(Math.random() * (gameRect.width - 30));
            const y = Math.floor(Math.random() * (gameRect.height - 30));
            heart.style.position = 'absolute';
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            heart.style.width = '45px';
            heart.style.height = '45px';
            heart.style.backgroundImage = 'url("img/coracao.png")'; // Defina a imagem do coração
            heart.style.backgroundSize = 'cover'; // Para garantir que a imagem cubra toda a área do coração
        });
    }

    // Adicionando movimentação por toque
    document.getElementById('area_jogo').addEventListener('touchstart', (event) => {
        movePlayerToTouch(event.touches[0]);
    });

    document.getElementById('area_jogo').addEventListener('touchmove', (event) => {
        movePlayerToTouch(event.touches[0]);
    });

    function movePlayerToTouch(touch) {
        const gameArea = document.getElementById('area_jogo');
        const gameRect = gameArea.getBoundingClientRect();
        const touchX = touch.clientX - gameRect.left - player.clientWidth / 2;
        const touchY = touch.clientY - gameRect.top - player.clientHeight / 2;

        // Limite o movimento do jogador à área do jogo
        player.style.left = `${Math.min(Math.max(touchX, 0), gameRect.width - player.clientWidth)}px`;
        player.style.top = `${Math.min(Math.max(touchY, 0), gameRect.height - player.clientHeight)}px`;

        checkCollisions();
    }

    // Movimentação por teclas do teclado
    document.addEventListener('keydown', (event) => {
        const step = 20;
        let left = parseInt(player.style.left, 10);
        let bottom = parseInt(player.style.bottom, 10);

        switch (event.key) {
            case 'ArrowUp':
                player.style.bottom = `${Math.min(bottom + step, document.getElementById('area_jogo').clientHeight - 50)}px`;
                break;
            case 'ArrowDown':
                player.style.bottom = `${Math.max(bottom - step, 0)}px`;
                break;
            case 'ArrowLeft':
                player.style.left = `${Math.max(left - step, 0)}px`;
                break;
            case 'ArrowRight':
                player.style.left = `${Math.min(left + step, document.getElementById('area_jogo').clientWidth - 50)}px`;
                break;
        }

        checkCollisions();
    });

    function checkCollisions() {
        hearts.forEach(heart => {
            const heartRect = heart.getBoundingClientRect();
            const playerRect = player.getBoundingClientRect();
    
            if (playerRect.left < heartRect.right &&
                playerRect.right > heartRect.left &&
                playerRect.bottom > heartRect.top &&
                playerRect.top < heartRect.bottom) {
                heart.style.display = 'none'; // Remove o coração da tela
                collectedHearts++;
    
                if (collectedHearts === hearts.length) {
                    nextPageBtn.style.display = 'block'; // Mostra o botão "Próxima Página"
                }
            }
        });
    }
    

    restartBtn.addEventListener('click', startGame);

    nextPageBtn.addEventListener('click', () => {
        window.location.href = 'pag/comeco.html'; // Substitua pelo URL da próxima página
    });

    startGame();
});
