document.addEventListener('DOMContentLoaded', () => {
    
    function iniciarFade(idWrapper) {
        const wrapper = document.getElementById(idWrapper);
        if (!wrapper) return;

        const imagens = wrapper.querySelectorAll('.slide-img');
        let indice = 0;
        const total = imagens.length;

        function alternar() {
            imagens[indice].classList.remove('active');
            indice = (indice + 1) % total;
            imagens[indice].classList.add('active');
        }

        setInterval(alternar, 3000); // Muda a cada 3 segundos
    }

    // Inicia os 3 quadros
    iniciarFade('wrapper-1');
    iniciarFade('wrapper-2');
    iniciarFade('wrapper-3');
});