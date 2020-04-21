
/*轮播图*/
$(".box").slideshow({
  current:"current",
  left:".arrow span.prev",
  right:".arrow span.next",
  imgsList: ["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"]
  });
/*曲线图配置*/
var graph = echarts.init(document.getElementById('graph'));
graph.setOption({
    title: {
        text: "曲线图数据展示",
        top:'36',
        left: "center",
        textStyle: {
            color: "#34393c",
            fontSize: 20
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    xAxis: [
        {
            type: "category",
            position: "bottom",
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgb(255, 255, 255)",
                    width: 0,
                    type: "dotted"
                }
            },
            axisLabel: {
                show: true,

                textStyle: {
                    color: "#4e4c4c",
                    fontSize: 12,
                    fontWeight: "blod",
                    align: "center"
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "#C4EAFC"
                }
            },
            splitArea: {
                show: false,
            }
        }
    ],

    yAxis: [
        {
            type: "value",
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                formatter: "{value}人",
                textStyle: {
                    color: "#333333",
                    fontSize: 8,
                    fontStyle: "normal",
                    fontWeight: "normal"
                }
            },
           
            axisTick: { 
                show: false,
            },
            splitLine: { 
                lineStyle: {
                    width: 1,
                    type: "dotted"
                },
                show: true
            }
        }
    ],

    tooltip: {
                show: true,
                 trigger: "axis"
            },
    series: [
        {
            name: "销量",
            smooth: true,
            type: "line",
            itemStyle: {
                normal: {
                    color: "rgb(69, 135, 240)",
                    label: {
                        show: true
                    },
                     areaStyle: {
                        type: "default",
                        color: "rgba(243, 247, 254,0.8)",
                    },

                }
            },
          
        }
    ],
    grid: {
        x: 110,
        y: 90,
        x2: 56,
        y2: 48
    }

});
graph.showLoading();

/*饼图配置*/
var pie = echarts.init(document.getElementById('pie-char'));
pie.setOption({
              
        title: {
                    text: '饼状图数据展示',
                    left:'center',
                    top: 46,
                    textStyle: {    
                                  color: '#262b2e',   
                                  fontSize:'20',
                                },
                },        
        tooltip: {  
                    trigger:'item',
                  },
        series: [  
                    {
                       center: ["283", "226"],
                       name: '销量',
                       type: 'pie',
                       radius: '50%',
                      
                    }
                ]
});
pie.showLoading();


/*柱形图配置*/
var bar = echarts.init(document.getElementById('bar-graph'));
bar.setOption(

{
    title: {
        text: "柱状图数据展示",
        top:'46',
        left: "center",
        textStyle: {
            color: "#34393c",
            fontSize: 22
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
     dataset: {
        source: []
    },
    xAxis: [
        {
            type: "category",
            
            position: "bottom",
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgb(255, 255, 255)",
                    width: 0,
                    type: "dotted"
                }
            },
            axisLabel: {
                show: true,

                textStyle: {
                    color: "#4e4c4c",
                    fontSize: 12,
                    fontWeight: "blod",
                    align: "center"
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "#C4EAFC"
                }
            },
            splitArea: {
                show: false,
            }
        }
    ],

    yAxis: [
        {
            type: "value",
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgb(255, 255, 255)",
                    width: 0,
                    type: "dotted"
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#333333",
                    fontSize: 8,
                    fontStyle: "normal",
                    fontWeight: "normal"
                }
            },
            name: "商品数",
            nameLocation: "end",
            nameTextStyle: {
                color: "rgb(0, 0, 0)",
                fontSize: 12,
                fontStyle: "normal",
                baseline: "bottom",
                align: "right",
            },
           
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    width: 1,
                    type: "dotted"
                },
                show: true
            }
        }
    ],

    tooltip: {
                show: true
            },
    series: [
        {
            name: "销量",
            type: "bar",
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: "rgb(69, 135, 240)"
                }
            },
           
            
        }
    ],
    grid: {
        x: 70,
        y: 132,
        x2: 46,
        y2: 52
    }

});
bar.showLoading();

/**getData函数是异步请求和处理数据*/

var  result;
function getData(){
    var fun1 = $.ajax({url: "https://edu.telking.com/api/",type:'get', async :false,data: {type: 'week'},dataType:'json'}),
        fun2 = $.ajax({url: "https://edu.telking.com/api/",type:'get', async :false,data: {type: 'month'},dataType:'json'});
    $.when(fun1,fun2).then(function(data1,data2){
         if(data1[0].code=="200"&&data2[0].code=="200"){
         	  var info_series_week=data1[0].data.series;
            var info_xAxis_week=data1[0].data.xAxis;
            var infos_weeks = [];
            for(var i = 0; i<info_xAxis_week.length; i++){
                  infos_weeks.push([info_xAxis_week[i],info_series_week[i]]);        
               }

        	  var info_series_month=data2[0].data.series;
            var info_xAxis_month=data2[0].data.xAxis;  
            var infos_months = [];

            for(var i = 0; i<info_xAxis_month.length; i++){
                  infos_months.push([info_xAxis_month[i],info_series_month[i]]);        
               }

            result = {infos_weeks,infos_months}

         }else{
         	console.log(data1[0].msg);
         }
      
    },function(){
        console.log('error');
    })  
}

getData();

/*曲线图数据配置*/
graph.hideLoading();
graph.setOption({
      dataset: {
        source: result.infos_months
      },

}) 
/*柱形图数据配置*/
bar.hideLoading();
bar.setOption({
    dataset: {
        source: result.infos_weeks
    },
}) 

/*饼图图数据配置*/
pie.hideLoading();
pie.setOption({
      dataset: {
          source: result.infos_weeks
      },

}) 


