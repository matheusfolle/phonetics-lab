const expandableImage = document.querySelector('.expandable-image');
const imageOverlay = document.getElementById('image-overlay');
const expandedImage = document.getElementById('expanded-image');
const closeButton = document.getElementById('close-button');

expandableImage.addEventListener('click', () => {
    expandedImage.src = expandableImage.src;
    imageOverlay.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    imageOverlay.style.display = 'none';
});

imageOverlay.addEventListener('click', (event) => {
    if (event.target === imageOverlay) {
        imageOverlay.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item-conteim');

    items.forEach(item => {
        const word = item.getAttribute('data-word');
        const translation = item.getAttribute('data-translation');
        const wordSpan = item.querySelector('.word');
        const discoverLink = item.querySelector('.discover');

        discoverLink.addEventListener('click', (event) => {
            event.preventDefault();
            if (wordSpan.textContent === word) {
                wordSpan.textContent = translation;
                discoverLink.textContent = "Retornar";
            } else {
                wordSpan.textContent = word;
                discoverLink.textContent = "Descoberta!";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    let isTransitioning = false;
    const itemWidth = items[0].getBoundingClientRect().width + 20;

    const setInitialPositions = () => {
        items.forEach((item, index) => {
            item.style.left = `${index * itemWidth}px`;
        });
    };

    const moveToNext = () => {
        if (isTransitioning) return;
        isTransitioning = true;

        track.style.transition = 'transform 0.3s ease-in-out';
        track.style.transform = `translateX(-${itemWidth}px)`;

        track.addEventListener(
            'transitionend',
            () => {
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';

                const firstItem = track.firstElementChild;
                track.appendChild(firstItem);

                isTransitioning = false;
            },
            { once: true }
        );
    };

    const moveToPrev = () => {
        if (isTransitioning) return;
        isTransitioning = true;

        const lastItem = track.lastElementChild;
        track.insertBefore(lastItem, track.firstElementChild);

        track.style.transition = 'none';
        track.style.transform = `translateX(-${itemWidth}px)`;

        requestAnimationFrame(() => {
            track.style.transition = 'transform 0.3s ease-in-out';
            track.style.transform = 'translateX(0)';
        });

        track.addEventListener(
            'transitionend',
            () => {
                isTransitioning = false;
            },
            { once: true }
        );
    };

    nextButton.addEventListener('click', moveToNext);
    prevButton.addEventListener('click', moveToPrev);

    setInitialPositions();
});