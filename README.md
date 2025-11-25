<div align="center">

# PhoneticsLab 🗣️
### *Laboratório Digital de Fonética e Pronúncia*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)]()
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)]()

**Plataforma educacional para estudo de fonética, pronúncia e o Alfabeto Fonético Internacional (IPA)**

[🌐 Ver Projeto ao Vivo](https://phonetics-lab.vercel.app/)

</div>

---

## 📖 Sobre o Projeto

PhoneticsLab é uma plataforma web voltada para estudantes de idiomas e poliglotas interessados em aprimorar pronúncia através do estudo de fonética e do Alfabeto Fonético Internacional (IPA).

Desenvolvido como **projeto final da disciplina de Desenvolvimento Web Básico**, o site oferece uma experiência completa de aprendizado com recursos educacionais, exercícios interativos, artigos técnicos e uma comunidade de entusiastas de linguística.

---

## 🎯 Funcionalidades

### 📚 **Seções Principais**
- **Home:** Apresentação da plataforma e recursos disponíveis
- **Artigos:** Conteúdo educacional sobre fonética, pronúncia e IPA
- **Cursos:** Curadoria de materiais e links para aprendizado estruturado
- **Comunidade:** Espaço para interação entre estudantes de idiomas
- **Ranking:** Sistema de acompanhamento de progresso dos usuários

### 🎮 **Exercícios Interativos**
- **Memorize Palavras:** Prática de vocabulário com foco fonético
- **Alfabeto Fonético:** Treinamento do IPA (International Phonetic Alphabet)
- **Técnicas Avançadas:** Exercícios para domínio de pronúncia

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### Stack Técnica
- **Frontend:** HTML5, CSS3 (puro, sem frameworks)
- **Interatividade:** JavaScript vanilla (sem bibliotecas)
- **Fontes:** Apple Garamond Light (local), Google Fonts (Montserrat, DM Serif Text, Playfair Display)
- **Design:** Totalmente responsivo com CSS nativo
- **Deploy:** Vercel (hospedagem estática)

---

## 📁 Estrutura do Projeto

```
📦 phonetics-lab/
├── 📄 index.html              # Página principal
├── 📄 artigos.html            # Listagem de artigos
├── 📄 artigo.html             # Template de artigo individual
├── 📄 cursos.html             # Recursos e cursos
├── 📄 comunidade.html         # Comunidade e fórum
├── 📄 ranking.html            # Ranking de usuários
├── 📄 palavras.html           # Exercício de memorização
├── 🎨 style/
│   └── style.css              # Estilos globais
├── 🎯 js/
│   ├── script.js              # Funcionalidades gerais
│   ├── palavras.js            # Lógica do exercício de palavras
│   ├── ranking.js             # Sistema de ranking
│   ├── article.js             # Renderização de artigos
│   ├── carousel.js            # Carrossel de conteúdo
│   └── expands.js             # Acordeões e expansões
├── 🖼️ img/
│   ├── paises/                # Bandeiras de países
│   └── [diversos assets]      # Imagens e ícones
├── 🔤 fonts/
│   └── AppleGaramond-Light.ttf
└── 📖 README.md
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
```bash
Navegador web moderno (Chrome, Firefox, Safari, Edge)
```

### Instalação
```bash
# Clone o repositório
git clone https://github.com/matheusfolle/phonetics-lab.git

# Entre no diretório
cd phonetics-lab

# Abra o projeto
# Opção 1: Abra index.html diretamente no navegador
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Opção 2: Use um servidor local (recomendado)
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server
```

Acesse `http://localhost:8000` no navegador.

---

## 🌐 Deploy

O projeto está hospedado no Vercel e pode ser acessado em:

**🔗 [phoneticslab.vercel.app](https://phoneticslab.vercel.app)**

---

## 💡 Destaques Técnicos

### ✅ **Desenvolvimento Puro**
- 100% HTML/CSS/JavaScript vanilla
- Sem frameworks ou bibliotecas externas
- Demonstra domínio sólido dos fundamentos web

### 🎨 **Design Responsivo**
- Layout adaptável para desktop, tablet e mobile
- CSS Grid e Flexbox para estruturação
- Media queries para diferentes breakpoints

### ⚡ **Interatividade**
- Dropdown dinâmico no menu
- Carrossel de conteúdo
- Acordeões e expansões
- Sistema de ranking interativo

---

## 📚 Contexto Acadêmico

**Instituição:** Universidade Positivo  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Disciplina:** Desenvolvimento Web Básico  
**Professor:** Wellington Soares  
**Período:** Outubro de 2024  
**Tipo:** Projeto Final de Disciplina

---

## 🎓 Aprendizados e Conquistas

Este foi meu primeiro projeto completo de desenvolvimento web, desenvolvido como **trabalho final da disciplina**, e representou:

✅ **Fundamentos Sólidos:** Domínio de HTML semântico, CSS moderno e JavaScript funcional  
✅ **Arquitetura:** Organização de código em múltiplos arquivos (separação de concerns)  
✅ **Design:** Criação de interface responsiva do zero, sem frameworks  
✅ **Deploy:** Experiência com versionamento Git e hospedagem na Vercel  
✅ **UX/UI:** Desenvolvimento de navegação intuitiva e componentes interativos

---

## 🔮 Próximos Passos

- [ ] Implementar conversão automática de texto para IPA
- [ ] Integração com APIs de dicionários fonéticos
- [ ] Sistema de autenticação de usuários
- [ ] Melhorias de acessibilidade (ARIA, navegação por teclado)
- [ ] Otimização de performance (lazy loading, minificação)
- [ ] Versão Progressive Web App (PWA)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Matheus Folle**  
Estudante de Análise e Desenvolvimento de Sistemas  
📧 matfolle@gmail.com  
🔗 [Instagram](https://instagram.com/matheusfolle)  
🔗 [LinkedIn](https://www.linkedin.com/in/matheusfolle)

---

<div align="center">

Desenvolvido com dedicação e curiosidade 📖

⭐ Se este projeto foi útil, deixe uma estrela!

</div>
