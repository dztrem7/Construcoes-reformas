document.addEventListener('DOMContentLoaded', () => {
    // ==== Animação ao rolar a página ====
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
    checkScroll();

    // ==== Menu Hamburger ====
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav'); // pega o menu lateral
    const closeBtn = document.getElementById('close-btn');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.add('show');
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                nav.classList.remove('show');
            });
        }

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('show');
            });
        });
    }

    // ==== Formulário WhatsApp ====
    const form = document.getElementById('contato-form');
    const telefoneErro = document.getElementById('telefone-erro');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const telefoneRaw = document.getElementById('telefone').value.trim();
            const projeto = document.getElementById('projeto').value.trim();
            const telefone = telefoneRaw.replace(/\D/g, '');
            telefoneErro.textContent = '';

            const telefoneRegex = /^[1-9]{2}[0-9]{8,9}$/;
            if (!telefoneRegex.test(telefone)) {
                telefoneErro.textContent = "Número inválido! Use DDD + telefone (ex: 11 99999 9999).";
                return;
            }

            const whatsappNumber = '5511995286351';
            const mensagem = `Olá! Meu nome é ${nome}, meu telefone é ${telefoneRaw} e meu projeto é: ${projeto}`;
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
        });
    }

    // ==== Modal de Cards ====
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImg = document.getElementById("modal-img");
    const modalDesc = document.getElementById("modal-desc");
    const modalWhats = document.getElementById("modal-whats");
    const closeModal = document.querySelector(".close-modal");
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.querySelector("h3").innerText;
            const img = card.querySelector("img").src;
            const desc = card.querySelector("p").innerText;

            modalTitle.innerText = title;
            modalImg.src = img;
            modalDesc.innerText = desc;

            const phone = "5511995286351";
            const message = `Olá! Gostaria de saber mais sobre: ${title}`;
            modalWhats.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            modal.style.display = "flex";
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    const btnFechar = document.getElementById("btn-fechar");
    if (btnFechar) {
        btnFechar.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
});
