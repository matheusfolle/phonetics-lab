document.addEventListener('DOMContentLoaded', () => {
    const articleContainer = document.getElementById('article-container');
    const imageOverlay = document.getElementById('image-overlay');
    const overlayImage = document.getElementById('overlay-image');

    const article = {
        title: "Uma árvore genealógica da linguagem",
        thumbnail: "./img/oldworldlanguages.webp",
        fullImage: "./img/treelanguages.webp", 
        content: [
            { type: "paragraph", text: "A árvore genealógica da linguagem oferece uma visão abrangente das conexões entre idiomas. Ela mapeia as origens e relações entre as línguas." },
            { type: "paragraph", text: "Essa árvore traz uma reflexão cultural, afinal, não é apenas um mapa linguístico, mas uma representação de como povos e culturas se conectaram e evoluíram ao longo da história. Cada ramo carrega séculos de história e adaptações regionais." },
            { type: "subtitle", text: "Os Ramos Principais" },
            { type: "paragraph", text: "<b>Línguas Românicas:</b> Derivadas do Latim, incluem o Português, Espanhol, Italiano, Francês e outras. São representadas como um ramo robusto ligado ao tronco itálico." },
            { type: "paragraph", text: "<b>Línguas Germânicas:</b> De onde surgiram o Inglês, Alemão e outras línguas do norte da Europa, conectadas pelo tronco germânico." },
            { type: "paragraph", text: "<b>Línguas Eslavas:</b> Representadas por línguas como o Russo, Polonês e Ucraniano, que compartilham um tronco comum." },
            { type: "paragraph", text: "<b>Grupo Indo-Iraniano:</b> Uma ramificação oriental, incluindo línguas como o Hindi, Urdu e Persa." },
            { type: "subtitle", text: "A Família Uraliana" },
            { type: "paragraph", text: "Menos extensa na árvore, mas igualmente significativa, abrange línguas predominantemente faladas em regiões da Europa Oriental e do norte da Ásia, como o Finlandês e o Húngaro, que não têm relação com as línguas Indo-Europeias." }
        ]
    };

    const title = document.createElement('h1');
    title.textContent = article.title;

    articleContainer.appendChild(title);

    article.content.forEach((item, index) => {
        let element;

        if (index === 2) {
            const thumbnail = document.createElement('img');
            thumbnail.src = article.thumbnail;
            thumbnail.alt = article.title;
            thumbnail.style.cursor = 'pointer';

            thumbnail.addEventListener('click', () => {
                overlayImage.src = article.fullImage;
                imageOverlay.style.display = 'flex';
            });

            articleContainer.appendChild(thumbnail);
        }

        if (item.type === "paragraph") {
            element = document.createElement('p');
            element.innerHTML = item.text;
        } else if (item.type === "subtitle") {
            element = document.createElement('h2');
            element.textContent = item.text;
        } else if (item.type === "list") {
            element = document.createElement('ul');
            item.items.forEach((listItemText) => {
                const listItem = document.createElement('li');
                listItem.textContent = listItemText;
                element.appendChild(listItem);
            });
        }
        articleContainer.appendChild(element);
    });

    imageOverlay.addEventListener('click', () => {
        imageOverlay.style.display = 'none';
    });
});