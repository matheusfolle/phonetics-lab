document.addEventListener('DOMContentLoaded', () => {
        const carouselTrack = document.getElementById('carousel-track');

        if (carouselTrack) {
            const images = [
                { src: 'img/deutsch.png', alt: 'Alemão', link: 'cursos.html' },
                { src: 'img/espanol.png', alt: 'Espanhol', link: 'cursos.html' },
                { src: 'img/english.png', alt: 'Inglês', link: 'cursos.html' },
                { src: 'img/francais.png', alt: 'Francês', link: 'cursos.html' }
            ];

            function loadImages() {
                images.concat(images, images, images).forEach(({ src, alt, link }) => {
                    const carouselItem = document.createElement('a');
                    carouselItem.href = link;
                    carouselItem.classList.add('carousel-item');

                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = alt;

                    carouselItem.appendChild(img);
                    carouselTrack.appendChild(carouselItem);
                });
            }

            loadImages();

            let translateX = 0;
            const speed = 0.905;

            function moveCarousel() {
                translateX -= speed;

                if (Math.abs(translateX) >= carouselTrack.scrollWidth / 4) {
                    translateX = 0;
                }

                carouselTrack.style.transform = `translateX(${translateX}px)`;
                requestAnimationFrame(moveCarousel);
            }

            moveCarousel();
        }
    });