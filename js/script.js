function toggleDropdown(event) {
    event.preventDefault();
    const dropdownContent = event.target.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
};

function toggleAccordion(num) {
    const content = document.getElementById("content" + num);

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.querySelector('.search-icon');

    const siteData = [
        { title: "Home", url: "index.html" },
        { title: "Artigos", url: "artigos.html" },
        { title: "Cursos", url: "cursos.html" },
        { title: "Ranking de Usuários", url: "ranking.html" },
        { title: "Comunidade", url: "comunidade.html" },
        { title: "Exercícios - Memorize Palavras", url: "palavras.html" },
        { title: "Uma árvore genealógica da linguagem", url: "article.html" },
        { title: "Como usar o AFI ao meu favor?", url: "cursos.html" },
        { title: "Noite de filme alemão", url: "artigos.html" },
        { title: "Italiano com culinária", url: "artigos.html" },
        { title: "Inscrever", url: "comunidade.html" },
        { title: "Exercícios", url: "palavras.html" },
        { title: "Explore outras línguas no carrossel", url: "palavras.html" }
    ];

    const searchContainer = document.querySelector('.search-bar-container');

    const suggestionBox = document.createElement('div');
    suggestionBox.classList.add('suggestion-box');
    searchContainer.appendChild(suggestionBox);

    const updateSuggestions = (query) => {
        suggestionBox.innerHTML = '';
        if (query.trim() === '') return;

        const suggestions = siteData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = suggestion.title;
                suggestionItem.addEventListener('click', () => {
                    window.location.href = suggestion.url;
                });
                suggestionBox.appendChild(suggestionItem);
            });
        } else {
            const noResult = document.createElement('div');
            noResult.classList.add('no-result');
            noResult.textContent = 'Nenhum resultado encontrado';
            suggestionBox.appendChild(noResult);
        }
    };

    const performSearch = () => {
        const query = searchInput.value.trim();
        const result = siteData.find(item => 
            item.title.toLowerCase() === query.toLowerCase()
        );

        if (result) {
            window.location.href = result.url;
        } else {
            alert('Nenhum resultado encontrado.');
        }
    };

    searchInput.addEventListener('input', (e) => {
        updateSuggestions(e.target.value);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    searchIcon.addEventListener('click', () => {
        performSearch();
    });
});
