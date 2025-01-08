    // Função para lançar confetes
    function confetti() {
        const duration = 1 * 1000;
        const end = Date.now() + duration;
        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff0', '#0f0', '#00f'],
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff0', '#0f0', '#00f'],
            });
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }
    // Chamar a função confetti ao carregar a página
    window.onload = confetti;

    // Configurar EmailJS
    emailjs.init("xnsr-iX_51ACpSxlJ");

    // Função para enviar o formulário
    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_cu771jc';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Email';
                alert('Mensagem enviada com sucesso!');
            }, (err) => {
                btn.value = 'Enviar Email';
                alert(JSON.stringify(err));
            });
    });