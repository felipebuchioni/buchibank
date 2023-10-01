import { Entrada } from "../models/entrada.js"
import { Movimento } from "../models/movimento.js"

export class Controller {

  private _saldo: number
  private _data: Date
  saldoDiv = document.querySelector('.saldo-div')
  _valorInput: HTMLInputElement
  private _movimentos = new Movimento

  constructor() {
    this._data = new Date()
    this._saldo = JSON.parse(localStorage.getItem('saldo')) || 0
    this._valorInput = document.querySelector('#valor')
    this.saldoDiv.innerHTML =`
    <p>R$</p>
    <h2 id="saldo">${this._saldo.toFixed(2)}</h2>`
  }

  hideSaldo(): void {
    this.saldoDiv.innerHTML = '••••'
    
  }

  mostrarSaldo() {
    return this.saldoDiv.innerHTML =`
    <p>R$</p>
    <h2 id="saldo">${this._saldo.toFixed(2)}</h2>`

  }

  adicionar(value: number): Entrada {
    const data = `${this._data.getDay}/${this._data.getMonth}`
    const newDate = new Date(data)
     
    this._valorInput.style.display = 'none'
    this._saldo += Number(value)
    this.mostrarSaldo()   

    localStorage.setItem('saldo', JSON.stringify(this._saldo))
    return new Entrada(value, newDate, 'oi')
  }

  remover(value: number) {
    this._valorInput.style.display = 'none'
    this._saldo -= Number(value)

    this.mostrarSaldo()
    localStorage.setItem('saldo', JSON.stringify(this._saldo))
  }

}


