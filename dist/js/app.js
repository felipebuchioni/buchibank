import { Controller } from "./controllers/controller.js";
const controller = new Controller;
const hideBtn = document.getElementById('show-hide');
const btnEntrada = document.getElementById('botao-entrada');
const btnSaida = document.getElementById('botao-saida');
const form = document.getElementById('form-movimento');
const alertText = document.querySelector('.alert-text');
let btnType = '';
hideBtn.addEventListener('click', (event) => {
    const btn = event.target;
    if (btn.checked) {
        controller.hideSaldo();
    }
    else {
        controller.mostrarSaldo();
    }
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alertText.style.display = 'none';
    const InputValueToNumber = parseFloat(controller._valorInput.value);
    const exp = /,/g;
    const convertedInputValue = controller._valorInput.value.replace(exp, '.');
    if (btnType == 'adicionar') {
        if (controller._valorInput.value == '') {
            alertText.style.display = 'block';
            alertText.innerHTML = '*Você não inseriu nenhum valor, insira um valor válido!';
        }
        else if (Number.isNaN(InputValueToNumber)) {
            alertText.style.display = 'block';
            alertText.innerText = '*Por favor, insira um número válido!';
        }
        else {
            controller.adicionar(convertedInputValue);
            controller._valorInput.value = '';
        }
    }
    else if (btnType == 'remover') {
        if (controller._valorInput.value == '') {
            alertText.style.display = 'block';
            alertText.innerHTML = '*Você não inseriu nenhum valor, insira um valor válido!';
        }
        else if (Number.isNaN(InputValueToNumber)) {
            alertText.style.display = 'block';
            alertText.innerText = '*Por favor, insira um número válido!';
        }
        else {
            controller.remover(convertedInputValue);
            controller._valorInput.value = '';
        }
    }
});
btnEntrada.addEventListener("click", (e) => {
    btnType = e.target.dataset.type;
    controller._valorInput.style.display = 'block';
    alertText.style.display = 'none';
});
btnSaida.addEventListener('click', (e) => {
    btnType = e.target.dataset.type;
    controller._valorInput.style.display = 'block';
    alertText.style.display = 'none';
});
