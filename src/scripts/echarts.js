const echarts = require('echarts')
const echartsDom = $('#echartsDom')[0]

const resizeWorldMapContainer = () => {
  echartsDom.style.width = window.innerWidth + 'px';
  echartsDom.style.height = window.innerHeight + 'px';
};

resizeWorldMapContainer();

const myEcharts = echarts.init(echartsDom)

myEcharts.setOption({
  title: {
    text: '监控大屏11',
    textStyle: {
      color: 'rgba(255, 255, 255, 0.7)'
    },
    left: 'center',
    top: '10px'
  },
  tooltip: {

  },
  legend: {
    x: '25%',
    bottom: '2%',
    textStyle: {
      color: '#ffd285',
    },
    data: [
      {
        name: '合肥',
        textStyle: {
          color: 'red'
        }
      },
      {
        name: '芜湖',
        icon: 'circle',
        textStyle: {
          color: 'red'
        }
      },
      {
        name: '马鞍山',
        icon: 'circle',
        textStyle: {
          color: 'red'
        }
      }
    ]
  },
  grid: {
    left: '10%',
    right: '45%',
    bottom: '15%',
    containLabel: false
  },
  xAxis: {
    type: 'category',
    axisLine: {
      onZero: false,
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      "show": true,
    },
    axisLabel: {
      textStyle: {
        color: '#ffd285'
      }
    },
    splitArea: {
      show: true
    },
    boundaryGap: true,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    "axisLine": {
      lineStyle: {
        color: '#c0576d'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#c0576d'
      }
    },
    "axisTick": {
      show: true
    },
    axisLabel: {
      textStyle: {
        color: '#ffd285'
      }
    },
    type: 'value'
  },
  series: [
    {
      name: '合肥',
      smooth: true,
      type: 'line',
      lineStyle: {
        normal: {
          color: '#ffff00',
          opacity: 10
        }
      },
      itemStyle: {
        normal: {
          color: '#ff6600'
        },
        emphasis: {
          color: '#ff6600'
        }
      },
      areaStyle: {
        normal: {
          color: '#ff6600'
        },
      },
      symbolSize: 8,
      data: [10, 50, 39, 50, 120, 82, 80],
      markPoint: {
        label: {
          normal: {
            show: true,
            color: '#ff0066'
          },
          emphasis: {
            show: true,
            color: '#ff9900'
          }
        },
        data: [{
          name: '最大值',
          type: 'min'
        }]
      }
    },
    {
      name: '芜湖',
      smooth: true,
      type: 'bar',
      symbolSize: 8,
      data: [70, 50, 50, 87, 90, 80, 70]
    }, 
    {
      name: '马鞍山',
      smooth: true,
      type: 'bar',
      symbolSize: 8,
      data: [290, 200, 20, 132, 15, 200, 90]
    },
    {
      type: 'pie',
      name: '饼图',
      center: ['83%', '20%'],
      radius: ['15%', '20%'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      label: {
        normal: {
          position: 'center'
        },
        emphasis: {
          show: true,
          color: '#ff6600',
        }
      },
      data: [
        {
          value: 335,
          name: '污染来源分析',
          itemStyle: {
            normal: {
                color: '#ffd285'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                color: '#ffd285',
                fontSize: 20
              }
            }
          }
        }, 
        {
          value: 180,
          name: '占位',
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#404A59'
            }
          },
          label: {
            normal: {
              textStyle: {
                color: '#ffd285',
              },
              formatter: '\n汽车尾气'
            }
          }
        }
      ]
    },
    {
      type: 'pie',
      center: ['83%', '50%'],
      radius: ['15%', '20%'],
      name: '饼图',
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      data: [
        {
          value: 335,
          name: '直接访问',
          itemStyle: {
            normal: {
              color: '#FF3300'
            }
          }
        }, 
        {
          value: 310,
          name: '邮件营销',
          itemStyle: {
            normal: {
              color: '#FFFF00'
            }
          }
        }, 
        {
          value: 234,
          name: '联盟广告',
          itemStyle: {
            normal: {
              color: '#00FF00'
            }
          }
        }, 
        {
          value: 135,
          name: '视频广告',
          itemStyle: {
            normal: {
              color: '#1E90FF'
            }
          }
        }, 
        {
          value: 1548,
          name: '搜索引擎',
          itemStyle: {
            normal: {
              color: '#ADFF2F'
            }
          }
        }
      ]
    }
  ]
})

window.onresize = () => {
  resizeWorldMapContainer();
  myEcharts.resize();
};