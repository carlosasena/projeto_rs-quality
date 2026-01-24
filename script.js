/**
 * RS QUALITY - Sliders + SEO + Performance
 * Versão: 2.1.1 - Corrigido: Schema Markup
 */

document.addEventListener('DOMContentLoaded', () => {
    
    console.log('RS Quality - Inicializando...');
    
    // ========================================
    // 1. SLIDERS PRINCIPAIS
    // ========================================
    
    function iniciarSlider(wrapperId) {
        const wrapper = document.getElementById(wrapperId);
        if (!wrapper) return;
        
        const slides = wrapper.querySelectorAll('.slide-img');
        if (slides.length === 0) return;
        
        let current = 0;
        let interval;
        
        function nextSlide() {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }
        
        slides[0].classList.add('active');
        interval = setInterval(nextSlide, 3000);
        
        // Controles de pausa
        wrapper.addEventListener('mouseenter', () => clearInterval(interval));
        wrapper.addEventListener('mouseleave', () => {
            interval = setInterval(nextSlide, 3000);
        });
        
        // Para mobile (touch)
        wrapper.addEventListener('touchstart', () => clearInterval(interval));
        wrapper.addEventListener('touchend', () => {
            interval = setInterval(nextSlide, 3000);
        });
    }
    
    // Inicia sliders se existirem
    const hasSliders = document.querySelector('.slider-fade-container');
    if (hasSliders) {
        iniciarSlider('wrapper-1');
        iniciarSlider('wrapper-2');
        iniciarSlider('wrapper-3');
        console.log('Sliders iniciados com sucesso');
    }
    
    // ========================================
    // 2. SEO ESSENCIAL
    // ========================================
    
    // A. Schema Markup - CORRIGIDO: Injetar IMEDIATAMENTE
    function injectSchema() {
        const schema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RS Quality",
            "image": `${window.location.origin}/Projetos_WEB/RSQuality/image/logotipo/logotipo.png`,
            "telephone": "(11) 2436-4845",
            "email": "atendimento@resseng.com.br",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Senhor do Bonfim, 196",
                "addressLocality": "Guarulhos",
                "addressRegion": "SP",
                "addressCountry": "BR"
            },
            "url": window.location.origin,
            "openingHours": "Mo-Fr 08:00-18:00",
            "sameAs": [
                "https://www.instagram.com/rsquality01",
                "https://www.facebook.com/?locale=pt_BR",
                "https://www.linkedin.com/in/rs-quality-9434933a8"
            ]
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema, null, 2); // null, 2 para melhor formatação
        document.body.appendChild(script);
        console.log('Schema Markup injetado');
    }
    
    // B. Canonical Tag
    function addCanonical() {
        const canonicalUrl = window.location.href.split('?')[0];
        
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'canonical';
            document.head.appendChild(link);
        }
        link.href = canonicalUrl;
        console.log('Canonical tag adicionada:', canonicalUrl);
    }
    
    // C. Otimiza Meta Tags por página - CORRIGIDO: "amnutenção" → "manutenção"
    function optimizeMetaTags() {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        const metaConfig = {
            'index.html': {
                title: 'RS Quality - Locação, Venda e Manutenção de Máquinas para Construção Civil',
                desc: 'Mais de 30 anos no mercado de locação, venda e manutenção de máquinas para construção civil.'
            },
            'empresa.html': {
                title: 'RS Quality - 30 Anos de Experiência em Equipamentos para Construção',
                desc: 'Conheça a RS Quality: 30 anos de tradição em soluções técnicas para construção civil.'
            },
            'servico.html': {
                title: 'RS Quality - Serviços de Locação, Venda e Manutenção de Máquinas',
                desc: 'Locações de máquinas para construção, vendas e manutenção especializada.' // CORRIGIDO
            },
            'contato.html': {
                title: 'RS Quality - Contato para Locação de Equipamentos de Construção',
                desc: 'Fale com a RS Quality para orçamentos de locação de máquinas em Guarulhos/SP.'
            }
        };
        
        if (metaConfig[page]) {
            document.title = metaConfig[page].title;
            
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = 'description';
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = metaConfig[page].desc;
            console.log('Meta tags otimizadas para:', page);
        }
    }
    
    // ========================================
    // 3. PERFORMANCE
    // ========================================
    
    // Lazy loading para imagens fora da tela
    function initLazyLoad() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window && images.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (!img.complete) {
                            img.src = img.src;
                        }
                        observer.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => observer.observe(img));
            console.log('Lazy loading ativado para', images.length, 'imagens');
        }
    }
    
    // ========================================
    // 4. INICIALIZAÇÃO - CORRIGIDO: Ordem garantida
    // ========================================
    
    // Executa TUDO imediatamente (não async)
    injectSchema();      // 1. Schema primeiro
    addCanonical();     // 2. Canonical
    optimizeMetaTags(); // 3. Meta tags
    initLazyLoad();     // 4. Performance
    
    console.log('RS Quality - Pronto!');
    
});