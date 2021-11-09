let dinheiro_carteira=parseInt(prompt("seu saldo"))

let valo_compra=parseInt(prompt("sua compra"))

let mensagem=dinheiro_carteira-valo_compra

if (dinheiro_carteira>=valo_compra) {
    dinheiro_carteira=dinheiro_carteira-valo_compra
    alert(`sua compra foi aprovada seu saldo atual é de r$${mensagem}`)
}
else{
    alert("dinheiro insuficiente")
}
let val1 = parseInt(prompt("Entre com o Primeiro Valor"));
    let val2 = parseInt(prompt("Entre com o Segundo Valor"));
    let val3 = parseInt(prompt("Entre com o Terceiro Valor"));
    let val4 = parseInt(prompt("Entre com o Quarto Valor"));

    let soma = val1 + val2 + val3 + val4;
    let Media = soma / 4;
    alert("Soma = "+ soma + " - Média = "+ Media);
