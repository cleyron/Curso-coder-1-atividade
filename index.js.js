function calcularValorFinal(valorProduto, despesas, margemLucro) {
    const valorFinal = valorProduto + despesas + (valorProduto * margemLucro / 100);
    return valorFinal;
}

const valorProduto = Number(prompt("Digite o valor do produto em reais:"));
const despesas = Number(prompt("Digite as despesas em reais:"));
const margemLucro = Number(prompt("Digite a margem de lucro em porcentagem:"));

const valorFinal = calcularValorFinal(valorProduto, despesas, margemLucro);

console.log("Valor final do produto: R$" + valorFinal.toFixed(2));

alert("Valor final do produto: R$" + valorFinal.toFixed(2))