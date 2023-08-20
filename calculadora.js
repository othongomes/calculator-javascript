function calculator() {
    const operation = Number(prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Dvisão  Inteira(%)\n 6 - Potenciação(**)'));

    if (!operation || operation >= 7){
        alert("Erro - operação inválida!");
        calculator();
    } else {
        let n1 = Number(prompt("Insira um valor:"));
        let n2 = Number(prompt("Insira o segundo valor:"));
        let resultado;

        if (!n1 || !n2) {
            alert("Erro - Parâmetro inválido");
            calculator();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                realod();
            }
        
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                realod();
            }
        
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                realod();
            }
        
            function divisaoreal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                realod();
            }
        
            function divisaointeiro() {
                resultado = n1 % n2;
                alert(`O resta da divisão entre ${n1} e ${n2} é igual à ${resultado}`);
                realod();
            }
        
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual à ${resultado}`);
                realod();
            }
        
            function realod() {
                let option = prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não');
        
                if (option == 1) {
                    calculator();
                } else if (option == 2) {
                    alert(('Até logo!'));
                } else {
                    alert('Digite uma opção válida:');
                    realod();
                }
            }
        
            /* if (operation == 1) {
                soma();
            } else if (operation == 2) {
                subtracao();
            } else if (operation == 3) {
                multiplicacao();
            } else if (operation == 4) {
                divisaoreal();
            } else if (operation == 5) {
                divisaointeiro();
            } else if (operation == 6) {
                potenciacao();
            } */ 
            
            switch (operation){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoreal();
                    break;
                case 5:
                    divisaointeiro();
                    break;
                case 6:
                    potenciacao();
                    break;

            }
        }
    }
}

calculator();