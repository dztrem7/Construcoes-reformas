document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos do body, exceto header e footer e seus filhos
    const elements = document.querySelectorAll('body > *:not(header):not(footer)');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        elements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.classList.add('show');
            } else {
                el.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // aplica no carregamento
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Fechar menu ao clicar em algum link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const closeBtn = document.getElementById('close-btn');

    hamburger.addEventListener('click', () => {
        nav.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        nav.classList.remove('show');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contato-form');
    const telefoneErro = document.getElementById('telefone-erro');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const telefoneRaw = document.getElementById('telefone').value.trim();
        const projeto = document.getElementById('projeto').value.trim();

        // Remove espaços, parênteses e traços para validar
        const telefone = telefoneRaw.replace(/\D/g, ''); // só números

        // Limpa erro anterior
        telefoneErro.textContent = '';

        // Validação: DDD + 8 ou 9 dígitos
        const telefoneRegex = /^[1-9]{2}[0-9]{8,9}$/;

        if (!telefoneRegex.test(telefone)) {
            telefoneErro.textContent = "Número inválido! Use DDD + telefone (ex: 11 99999 9999).";
            return;
        }

        // Número do WhatsApp (substitua pelo seu número)
        const whatsappNumber = '5511999999999';

        // Mensagem formatada
        const mensagem = `Olá! Meu nome é ${nome}, meu telefone é ${telefoneRaw} e meu projeto é: ${projeto}`;

        // Abrir WhatsApp
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    });
});


// Pega elementos do modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const modalWhats = document.getElementById("modal-whats");
const closeModal = document.querySelector(".close-modal");

// Pega todos os cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const title = card.querySelector("h3").innerText;
        const img = card.querySelector("img").src;
        const desc = card.querySelector("p").innerText;

        modalTitle.innerText = title;
        modalImg.src = img;
        modalDesc.innerText = desc;

        // link do whatsapp (coloca o seu número no link)
        const phone = "5511999999999"; 
        const message = `Olá! Gostaria de saber mais sobre: ${title}`;
        modalWhats.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        modal.style.display = "flex";
    });
});

// Fechar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha se clicar fora do conteúdo
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


document.getElementById("btn-fechar").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});
