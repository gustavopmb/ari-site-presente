// Aguarda o carregamento completo da página antes de rodar qualquer coisa
window.addEventListener("DOMContentLoaded", () => {

    // 💙 Corações flutuantes
    const heartsLayer = document.getElementById('hearts');
    function spawnHeart() {
        const h = document.createElement('div');
        h.className = 'heart';
        const size = 10 + Math.random() * 16;
        h.style.width = h.style.height = size + 'px';
        h.style.left = Math.random() * 100 + '%';
        h.style.bottom = '-40px';
        h.style.animation = `floatUp ${8 + Math.random() * 6}s linear forwards`;
        heartsLayer.appendChild(h);
        setTimeout(() => h.remove(), 16000);
    }
    setInterval(spawnHeart, 500);

    // ✨ Scroll suave para a cartinha
    const scrollBtn = document.getElementById('btnScroll');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 💌 Copiar cartinha
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const text = document.getElementById('letter').innerText.trim();
            try {
                await navigator.clipboard.writeText(text);
                alert('Cartinha copiada 💙');
            } catch {
                alert('Não consegui copiar 😅');
            }
        });
    }

    // 💬 Botões de resposta
    const answer = document.getElementById('answer');
    const btnYes = document.getElementById('btnYes');
    const btnCoffee = document.getElementById('btnCoffee');

    if (btnYes) {
        btnYes.addEventListener('click', () => {
            answer.textContent = 'Então é um sim 💙 Prometo cuidar de você todos os dias, com carinho e respeito.';
            answer.style.opacity = 0;
            setTimeout(() => {
                answer.style.transition = "opacity 0.8s ease";
                answer.style.opacity = 1;
            }, 10);
        });
    }

    if (btnCoffee) {
        btnCoffee.addEventListener('click', () => {
            answer.textContent = 'Fechado! Sorvete de milho verde? Eu busco você 🍦';
            answer.style.opacity = 0;
            setTimeout(() => {
                answer.style.transition = "opacity 0.8s ease";
                answer.style.opacity = 1;
            }, 10);
        });
    }

    // 🌙 Modo carinho
    const softBtn = document.getElementById('softMode');
    if (softBtn) {
        softBtn.addEventListener('click', () => {
            document.body.classList.toggle('soft');
            softBtn.textContent = document.body.classList.contains('soft')
                ? 'Voltar ao normal'
                : 'Modo carinho';
        });
    }

    // 🗓️ Ano automático no rodapé
    const year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
