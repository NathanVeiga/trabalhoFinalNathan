// Espera a página HTML carregar completamente
document.addEventListener("DOMContentLoaded", function() {

    // Captura o formulário do HTML usando o ID
    const formulario = document.getElementById("meuFormulario");

    // O "if" garante que a função só rode se o formulário existir na página (no caso, a tela de contato)
    if (formulario) {
        
        // REQUISITO: Função que escuta quando o usuário clica em enviar (Submit)
        formulario.addEventListener("submit", function(event) {
            
            // Impede a página de recarregar sozinha ao clicar no botão
            event.preventDefault();
            
            // MANIPULAÇÃO DO DOM 1: Captura o texto digitado no input de nome
            const nomeDigitado = document.getElementById("nome").value;
            
            // MANIPULAÇÃO DO DOM 2: Altera um parágrafo escondido para mostrar a mensagem de sucesso
            const campoMensagem = document.getElementById("mensagemSucesso");
            campoMensagem.textContent = "Sucesso! Obrigado pelo envio, " + nomeDigitado + ".";
            campoMensagem.style.display = "block"; // Altera o CSS via JS para fazer aparecer
            
            // Dispara um alerta nativo simples
            alert("Formulário processado via JavaScript!");
        });
    }
});