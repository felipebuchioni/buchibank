import { gerarHorario } from "./gerarHorario.js"
import { adicionarDados, graficoMoedas } from "./script.js"

export async function valorMoeda(moeda) {

    const moedaInfo = document.getElementById('moeda-info')
   
    const valorMoeda = await fetch(`https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`)
    const valorMoedaTraduzido = await valorMoeda.json()
    let moedaa = '.' + moeda + 'BRL.'
    
    let tempo = gerarHorario()
    let valor = await Number(valorMoedaTraduzido[moeda + 'BRL'].ask)

    moedaInfo.innerHTML = `<h1 id="moeda-info">O valor atual do ${moeda} é: <span id="valor-moeda">R$ ${valor.toFixed(2)}</span></h1>`   
    
    adicionarDados(graficoMoedas, tempo, valor, moeda)
}



