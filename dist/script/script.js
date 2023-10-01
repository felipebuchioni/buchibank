import { valorMoeda } from "./valorMoeda.js"

let moedaAtual = 'USD'
valorMoeda(moedaAtual)

const liMoedas = document.querySelectorAll('.moeda')
liMoedas.forEach(function(element) {
    
    element.addEventListener('click', function() {
            graficoMoedas.data.labels = []
    graficoMoedas.data.datasets.forEach(dataset => {
        dataset.data = []
    })
    graficoMoedas.update()
        moedaAtual = this.dataset.moeda
        valorMoeda(moedaAtual)         
        
    })
})

setInterval(() => valorMoeda(moedaAtual), 5000)

const grafico = document.getElementById('graficoMoeda')
const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#99ffff';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

export const graficoMoedas = new Chart(grafico, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: moedaAtual,
        data: [],
        borderWidth: 3,
        backgroundColor: '#E4E4E4',
        borderColor: '#126D6E'
      }]
    },  options: {
        plugins: {
          customCanvasBackgroundColor: {
            color: '#E4E4E4',
          }
        }
      },
      plugins: [plugin]
})

export function adicionarDados(grafico, legenda, dados, moeda) {
    
    grafico.data.labels.push(legenda)
    grafico.data.datasets[0].label = moeda
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados)
    })

    grafico.update()

    console.log(grafico)
}















