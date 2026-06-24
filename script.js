document.addEventListener('DOMContentLoaded', () => {
    const contrastBtn = document.getElementById('toggle-contrast');
    
    // Verifica se o usuário já tinha ativado o alto contraste antes
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }

    // Evento de clique para ativar/desativar o alto contraste
    contrastBtn.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        
        // Salva a preferência do usuário no navegador
        const isContrastActive = document.body.classList.contains('high-contrast');
        localStorage.setItem('highContrast', isContrastActive);
    });
});
