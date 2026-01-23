/**
 * RS QUALITY - Script Principal
 * Sistema de slider com efeito fade para a página de Serviços
 * Versão: 1.0
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /**
     * Inicia o slider com efeito fade em um wrapper específico
     * @param {string} idWrapper - ID do elemento wrapper que contém as imagens
     */
    function iniciarFade(idWrapper) {
        const wrapper = document.getElementById(idWrapper);
        
        // Verifica se o elemento existe antes de continuar
        if (!wrapper) {
            console.warn(`Wrapper com ID "${idWrapper}" não encontrado.`);
            return;
        }

        const imagens = wrapper.querySelectorAll('.slide-img');
        const total = imagens.length;
        
        // Não inicia o slider se não houver imagens
        if (total === 0) {
            console.warn(`Nenhuma imagem encontrada no wrapper "${idWrapper}".`);
            return;
        }
        
        let indice = 0;
        
        // Ativa a primeira imagem imediatamente
        imagens[0].classList.add('active');

        /**
         * Alterna entre as imagens com efeito fade
         */
        function alternar() {
            // Remove a classe 'active' da imagem atual
            imagens[indice].classList.remove('active');
            
            // Calcula o próximo índice (volta ao início ao chegar no fim)
            indice = (indice + 1) % total;
            
            // Adiciona a classe 'active' à próxima imagem
            imagens[indice].classList.add('active');
        }

        // Alterna a imagem a cada 5 segundos (3000ms)
        setInterval(alternar, 5000);
    }

    // ========================================
    // INICIALIZAÇÃO DOS SLIDERS
    // ========================================
    // Os 3 sliders da página servico.html
    iniciarFade('wrapper-1'); // Slider de Locação
    iniciarFade('wrapper-2'); // Slider de Vendas
    iniciarFade('wrapper-3'); // Slider de Manutenção
    
});