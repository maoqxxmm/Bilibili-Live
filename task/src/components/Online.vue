<template>
    <div class="main">
        <div id="online"></div>
    </div>
</template>

<script>
    import echarts from 'echarts';

    export default {
        data () {
            return {
                chart: null,
                opinion: [],
                opinionData: []
            }
        },
        methods: {
          drawPie (id) {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.setOption({
              title: {
                text: '“网络游戏”区前10',
                left: 'center',
                top: 10,
                textStyle: {
                  fontSize: 24,
                  fontFamily: 'Helvetica',
                  fontWeight: 400
                }
              },
              tooltip: {
                trigger: 'item',
                formatte: "{b}: {c} ({d}%)"
              },
              toolbox: {
                feature: {
                  saveAsImage: {},
                  dataView: {}
                },
                right: 15,
                top: 10
              },
              legend: {
                  orient: 'vertical',
                  left: 5,
                  top: 10,
                  data: this.opinion,
              },
              series: [
                {
                  name: '“网络游戏”区前10',
                  type: 'pie',
                  radius: ['50%', '70%'],
                  center: ['50%', '60%'],
                  avoidLabelOverlap: false,
                  label: {
                    emphasis: {
                      show: true,
                      textStyle: {
                        fontSize: '24',
                        fontWeight: 'bold'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data: this.opinionData,
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffset: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            })
          }
        },
        mounted() {
            var _this = this;
            this.$http.get('http://hz.aliyun.xeroe.net:81/json.php?q=/area/home?area=online&order=online&cover=1').then((response) => {
                let list = JSON.parse(response.body).data.list.slice(0, 10);
                let opinion = list.map(function(room) {
                    return room.uname;
                })
                let opinionData = list.map(function(room) {
                    return {
                        value: room.online,
                        name: room.uname
                    }
                })
                _this.opinion = opinion;
                _this.opinionData = opinionData;
                _this.$nextTick(function() {
                    _this.drawPie('online')
                })
            })
        }
    }
</script>

<style lang="scss">
#online {
    width: 100%;
    height: 100%;
}
</style>
