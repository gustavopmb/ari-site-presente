// Corações flutuantes
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


// Scroll suave
const scrollBtn = document.getElementById('btnScroll');
scrollBtn.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});


// Copiar carta
const copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', async () => {
    const text = document.getElementById('letter').innerText.trim();
    try {
        await navigator.clipboard.writeText(text);
        alert('Cartinha copiada 💙');
    } catch {
        alert('Não consegui copiar 😅');
    }
});


// Upload de fotos
const input = document.getElementById('fileInput');
const gallery = document.getElementById('gallery');
input.addEventListener('change', () => {
    gallery.innerHTML = '';
    [...input.files].forEach(file => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.src = url;
        img.onload = () => URL.revokeObjectURL(url);
        gallery.appendChild(img);
    });
});


// Botões de resposta
const answer = document.getElementById('answer');
document.getElementById('btnYes').addEventListener('click', () => {
    answer.textContent = 'Então é um sim 💙 Prometo cuidar de você todos os dias, com carinho e respeito.';
});


document.getElementById('btnCoffee').addEventListener('click', () => {
    answer.textContent = 'Fechado! Sorvete de milho verde? Eu busco você 🍦';
});


// Ano automático
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();