// Projeto funções básicas de cálculo

// Função de soma - Ithallo Emanuel 
function soma(a,b) {
    return a + b;
}

// Função de multiplicação - Vitor Cruz
function multiplicacao(a,b) {
    return a * b;
}

// Função de divisão - Matheus Chiaratti
function divisao(a,b) {
    return a / b;
}

// Função de subtração - Tarik Kassem
function subtracao(a,b) { 
    return a - b; 
}

// Interface do usuário - Tarik Kassem
function iniciarCalculadora() {
    const operacao = prompt(
        "Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
    );

    if (!["1", "2", "3", "4"].includes(operacao)) {
        alert("Operação inválida! Tente novamente.");
        return;
    }

    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos!");
        return;
    }

    let resultado;

    switch (operacao) {
        case "1":
            resultado = soma(num1, num2);
            alert(Resultado da soma: ${resultado});
            break;
        case "2":
            resultado = subtracao(num1, num2);
            alert(Resultado da subtração: ${resultado});
            break;
        case "3":
            resultado = multiplicacao(num1, num2);
            alert(Resultado da multiplicação: ${resultado});
            break;
        case "4":
            if (num2 === 0) {
                alert("Erro: Divisão por zero não é permitida.");
                return;
            }
            resultado = divisao(num1, num2);
            alert(Resultado da divisão: ${resultado});
            break;
    }
}

iniciarCalculadora();