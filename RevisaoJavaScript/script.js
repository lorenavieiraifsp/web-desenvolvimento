function validarNumero(){
    let numero = document.getElementById("numero").value; // pega o valor digitado no input
    let mensagem = document.getElementById("mensagem"); // pega o elemento onde a mensagem será exibida

    if (numero == ""){ // verifica se o campo está vazio
        mensagem.textContent = "Por favor, insira um número."; // define a mensagem
        mensagem.style.color = "red"; // define a cor
    }
    else {
        numero = parseInt(numero); // converte a string para número inteiro
    if ( numero > 10){ // verifica se o número é maior que 10
        mensagem.textContent = "O número é maior que 10.";
        mensagem.style.color = "green";
    }
        else if (numero > 5){ // verifica se o número é maior que 5
            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
            mensagem.style.color = "orange";
        }
            else { // caso seja 5 ou menor
                mensagem.textContent = "O número é 5 ou menor.";
                mensagem.style.color = "blue"; 
            }
    }   
}