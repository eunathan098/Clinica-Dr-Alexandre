// Função para mostrar/ocultar o menu lateral
document.getElementById('menu-icon').addEventListener('click', function() {
    const sideMenu = document.getElementById('side-menu');
    const menuPosition = sideMenu.style.left;

    if (menuPosition === '0px') {
        sideMenu.style.left = '-250px';
    } else {
        sideMenu.style.left = '0px';
    }
});

// Função para enviar o formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado pelo seu contato, ${nome}! Em breve entraremos em contato com você no email: ${email}`);
    
    // Limpar os campos após o envio
    document.getElementById('form-contato').reset();
});
