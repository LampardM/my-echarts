const echarts = require('echarts')
const echartsDom = $('#echartsDom')[0]

const myEcharts = echarts.init(echartsDom)

myEcharts.setOption({
  title: {
    text: '合肥市交通线路',
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
})