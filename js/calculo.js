var $input_quantidade = document.querySelector('#qtd');
var $output_total = document.querySelector('#total');

$input_quantidade.oninput = () => {
    let quantidade, preco, total;
    quantidade = $input_quantidade.value;
    preco = document.querySelector('#preco').textContent;

    preco = parseFloat(preco.replace('R$', '').replace(',', '.'));
    total = `R$ ${(quantidade * preco).toFixed(2).replace('.', ',')}`;
    $output_total.value = total;
}