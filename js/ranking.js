document.addEventListener('DOMContentLoaded', () => {
    const rankingBody = document.getElementById('ranking-body');
    const addUserBtn = document.getElementById('add-user-btn');
    const userNameInput = document.getElementById('user-name');
    const userScoreInput = document.getElementById('user-score');

    let users = [
        { name: "Ludwik Zamenhof", score: 11980, country: "Polônia" },
        { name: "Noam Chomsky", score: 7961, country: "Estados Unidos" },
        { name: "Johann Wolfgang von Goethe", score: 6740, country: "Alemanha" },
        { name: "Kato Lomb", score: 5020, country: "Hungria" },
        { name: "Ken Hale", score: 4100, country: "Estados Unidos" },
        { name: "Giuseppe Mezzofanti", score: 3924, country: "Itália" },
        { name: "Alan Turing", score: 3867, country: "Reino Unido"},
        { name: "Guido van Rossum", score: 3640, country: "Holanda"},
        { name: "Linus Torvalds", score: 2727, country: "Finlândia"},
        { name: "Matheus Saldanha", score: 1427, country: "Brasil"}
    ];

    const renderTable = () => {
        rankingBody.innerHTML = '';
    
        users
            .sort((a, b) => b.score - a.score)
            .forEach((user, index) => {
                const row = document.createElement('tr');
    
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.score}</td>
                    <td>${user.country}</td>
                `;
    
                rankingBody.appendChild(row);
            });
    };

    const addUser = () => {
        const name = userNameInput.value.trim();
        const score = parseInt(userScoreInput.value.trim());
        const country = document.getElementById('user-country').value.trim();
    
        if (name && !isNaN(score) && country) {
            users.push({ name, score, country });
            userNameInput.value = '';
            userScoreInput.value = '';
            document.getElementById('user-country').value = '';
            renderTable();
        } else {
            alert('Usuário, insira um nome, uma pontuação e um país válidos, por favor.');
        }
    };

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Enter' && (userNameInput.value || userScoreInput.value)) {
            addUser();
        }
    });

    renderTable();
});


