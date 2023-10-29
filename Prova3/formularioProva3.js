function validacpf(){
    var cpf = window.document.querySelector("#cpf").value

    var guardiao = 0;
    var teste = 0; 

    // testando se os digitos do cpf sao todos iguais
    for(var n = 0; n < cpf.length; n++){
        if(n == 0){
            guardiao = cpf[0];
        }
        if(cpf[n] == guardiao){
            teste += 1
        }
    }
    if(teste == 11 || cpf.length != 11){
        // se for igual vai mandar essa mensagem na tela
        alert("CPF INVÁLIDO! Possui dígitos iguais ou nenhum");
    }else{
        // caso os digitos sejam diferentes podemos prosseguir com a validação
        var soma = 0;
        var resto = 0;
        var verificador = [];

        for(var n = 0; n <= 8; n++){
            soma += cpf[n] * (10-n);
        }
        resto = soma % 11;
        if (resto <= 1){
           verificador[0] = 0; 
        }else{
            verificador[0] = 11- resto;
        }

        //resetando variáveis 
        soma = 0;
        resto = 0; 

        //verificação do segundo digito 
        for(var c = 0; c <= 9; c++){
            soma += cpf[c] * (11-c);
        }

        resto = soma % 11;
        if (resto <= 1){
           verificador[1] = 0; 
        }else{
            verificador[1] = 11- resto;
        }
    }


    if(verificador[0] == cpf[9] && verificador[1] == cpf[10]){
        confirm("CPF VÁLIDO!");
    }else{
        confirm("CPF INVALIDO!");
    }
}

function validaSenha(){
    var senha = window.document.querySelector("#senha").value

        if(senha == "1A2268101538"){
            confirm("SENHA VÁLIDA!");
        }else{
            confirm("SENHA INVÁLIDA.. Tente Novamente");
        }
}