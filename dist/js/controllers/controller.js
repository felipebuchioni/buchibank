export class Controller {
    constructor() {
        this.saldoDiv = document.querySelector('.saldo-div');
        this._saldo = JSON.parse(localStorage.getItem('saldo')) || 0;
        this._valorInput = document.querySelector('#valor');
        this.saldoDiv.innerHTML = `
    <p>R$</p>
    <h2 id="saldo">${this._saldo.toFixed(2)}</h2>`;
    }
    hideSaldo() {
        this.saldoDiv.innerHTML = '••••';
    }
    mostrarSaldo() {
        return this.saldoDiv.innerHTML = `
    <p>R$</p>
    <h2 id="saldo">${this._saldo.toFixed(2)}</h2>`;
    }
    adicionar(value) {
        const entrada = 'new Entrada()';
        this._valorInput.style.display = 'none';
        this._saldo += Number(value);
        this.mostrarSaldo();
        localStorage.setItem('saldo', JSON.stringify(this._saldo));
    }
    remover(value) {
        this._valorInput.style.display = 'none';
        this._saldo -= Number(value);
        this.mostrarSaldo();
        localStorage.setItem('saldo', JSON.stringify(this._saldo));
    }
}
