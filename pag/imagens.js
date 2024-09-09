document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('intro-video');
    const carouselContainer = document.getElementById('carousel-container');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelector('.modal .close');

    // Lista de imagens e o intervalo entre cada uma
    const images = [
        'img_pag/1.jpg',
        'img_pag/2.jpg',
        'img_pag/3.jpg',
        'img_pag/4.jpg',
        'img_pag/5.jpg',
        'img_pag/6.jpg',
        'img_pag/7.jpg',
        'img_pag/8.jpg',
        'img_pag/9.jpg',
        'img_pag/10.jpg',
        'img_pag/11.jpg',
        'img_pag/12.jpg',
        'img_pag/13.jpg',
        'img_pag/14.jpg',
        'img_pag/15.jpg',
        'img_pag/16.jpg',
        'img_pag/17.jpg',
        'img_pag/18.jpg',
        'img_pag/19.jpg',
        'img_pag/20.jpg',
        'img_pag/21.jpg',
        'img_pag/22.jpg',
        'img_pag/23.jpg',
        'img_pag/24.jpg',
        'img_pag/25.jpg',
        'img_pag/26.jpg',
        'img_pag/27.jpg',
        'img_pag/28.jpg',
        'img_pag/29.jpg',
        'img_pag/30.jpg',
        'img_pag/31.jpg',
        'img_pag/32.jpg',
        'img_pag/33.jpg',
        'img_pag/34.jpg',
        'img_pag/35.jpg',
        'img_pag/36.jpg',
        'img_pag/37.jpg',
        'img_pag/38.jpg',
        'img_pag/39.jpg',
        'img_pag/40.jpg',
        'img_pag/41.jpg',
        'img_pag/42.jpg',
        'img_pag/43.jpg',
        'img_pag/44.jpg',
        'img_pag/45.jpg',
        'img_pag/46.jpg',
        'img_pag/47.jpg',
        'img_pag/48.jpg',
        'img_pag/49.jpg',
        'img_pag/50.jpg',
        'img_pag/51.jpg',
        'img_pag/52.jpg',
        'img_pag/53.jpg',
        'img_pag/54.jpg',
        'img_pag/55.jpg',
        'img_pag/56.jpg',
        'img_pag/57.jpg',
        'img_pag/58.jpg',
        // Adicione mais imagens conforme necessário
        ];
    const imageDisplayInterval = 4000; // Intervalo em milissegundos (4 segundos)
    const fadeOutDuration = 70; // Duração do desvanecimento em milissegundos (1 segundo)

    function restartVideo() {
        video.style.display = 'block'; // Mostra o vídeo
        carouselContainer.style.display = 'none'; // Esconde o carrossel
        video.currentTime = 0; // Reinicia o vídeo
        video.play(); // Reproduz o vídeo
    }

    video.addEventListener('ended', () => {
        video.style.display = 'none';
        carouselContainer.style.display = 'block';

        let currentIndex = 0;

        function showNextImage() {
            if (currentIndex < images.length) {
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                const img = document.createElement('img');
                img.src = images[currentIndex];
                slide.appendChild(img);

                carouselContainer.innerHTML = '';
                carouselContainer.appendChild(slide);

                setTimeout(() => {
                    slide.style.opacity = 1;
                }, 100);

                currentIndex++;
                setTimeout(() => {
                    slide.style.opacity = 0;
                    setTimeout(showNextImage, fadeOutDuration);
                }, imageDisplayInterval);
            } else {
                // Quando todas as imagens foram exibidas, reinicie o vídeo
                setTimeout(restartVideo, fadeOutDuration);
            }
        }

        showNextImage();
    });

    carouselContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            modal.style.display = 'block';
            modalImage.src = event.target.src;
        }
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
