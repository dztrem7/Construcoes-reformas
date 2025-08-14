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
        const telefone = document.getElementById('telefone').value.trim();
        const projeto = document.getElementById('projeto').value.trim();

        // Limpa erro anterior
        telefoneErro.textContent = '';

        // Validação básica do telefone: DDD + 8 ou 9 dígitos
        const telefoneRegex = /^[1-9]{2}[0-9]{8,9}$/;

        if (!telefoneRegex.test(telefone)) {
            telefoneErro.textContent = "Número inválido! Use DDD + telefone (ex: 11999999999).";
            return;
        }

        // Número do WhatsApp (substitua pelo seu número)
        const whatsappNumber = '5511999999999';

        // Mensagem formatada
        const mensagem = `Olá! Meu nome é ${nome}, meu telefone é ${telefone} e meu projeto é: ${projeto}`;

        // Abrir WhatsApp
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    });
});
