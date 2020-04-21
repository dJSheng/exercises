var result;
$.ajax({
         type: 'get',  
         async :false,   
         url: 'https://edu.telking.com/api/',
         data: {type: 'month'}, 
                timeout: 2000,      
                dataType:'json',    
                beforeSend: function () {
                   
                }, 
                success: function (info) { 
                  if(info.code="200"){
                    var info_series=info.data.series;
                    var info_xAxis=info.data.xAxis;
                    result={info_series,info_xAxis}
                  }else{
                      console.log('请求参数出错了');
                  }   
                                
                }, 
                error: function () {
                  console.log("图表请求数据失败!");                

                }, 
                complete: function () {

                     
                } 
 })

/*曲线图*/
var line_chart = echarts.init(document.getElementById('line_chart'));
line_chart.setOption({
    title: {
        text: "Revenues",
        top:36,
        left:26 ,
        textStyle: {
            color: "#47515f",
            fontSize: 16,
        }
    },
    dataZoom: [
        {
            type: 'inside',
        }
    ],
    xAxis: [
        {
            type: "category",
            position: "bottom",
            data:result.info_xAxis,
            axisLine: {
                show: false,
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
                show: true,
                lineStyle: {
                    color: "#e6f1fc",

                }
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
                formatter: "$ {value}",
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
    toolbox: {
        show: true,
        top:20,
        left:700,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {
                    readOnly: false,
                    optionToContent: function(opt) {
                        var axisData = opt.xAxis[0].data;
                        var series = opt.series;
                        var table = '<table style="width:100%;text-align:center;"border=" 1px solid #0094ff" cellspacing="0"; "><tbody><tr>'
                            + '<td>时间</td>'
                        for (var i = 0, l = series.length; i < l; i++) {
                            table+= '<td>' + series[i].name + '</td>'
                        }
                            + '</tr>';
                        for (var i = 0, l = axisData.length; i < l; i++) {
                            table += '<tr>'
                                + '<td>' + axisData[i] + '</td>'
                            for (var j = 0, k = series.length; j < k; j++) {
                                if(series[j].data[i].value) {
                                    table+= '<td>' + series[j].data[i].value + '</td>'
                                } else {
                                    table+= '<td>' + series[j].data[i] + '</td>'
                                }
                            }
                            + '</tr>';
                        }
                        table += '</tbody></table>';
                        return table;
                    }
                },
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },

    tooltip: {
                show: true,
                trigger: "axis"
            },
    series: [
        {
            name: "销量",
            smooth: true,
            type: "line",
            data:result.info_series,
            itemStyle: {
                normal: {
                    color: "rgb(69, 135, 240)",
                    label: {
                        show: true
                    },

                }
            },
          
        }
    ],
    grid: {
        x: 86,
        y: 80,
        x2: 33,
        y2: 48
    }

});


/*圆环图*/
var pieMax=Math.max.apply(null,result.info_series);
var pieSum=0;
for (var i = 0; i < result.info_series.length; i++) {
    pieSum += result.info_series[i]
}
var onePie = echarts.init(document.getElementById("onePie"));

onePie.setOption ({
    title: {
        text: "Click today",
        subtext: "3.123.121",
        x: 'center',
        y:160,
        itemGap: 12,
        textStyle: {
            color: "rgb(93, 105, 122)",
            fontSize: 12,
            fontStyle: "normal"
        },
        subtextStyle: {
            color: "rgb(60, 69, 81)",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: "bold"
        }
     },
   
    tooltip: {   
        show:true,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [{
            name:'任务进度',
            type:'pie',
            radius: ['52%', '50%'],  
            center:['center',90],    
            hoverAnimation: false,
            emphasis: {

                label: {
                        show: true,
                        fontSize: '26',
                        fontWeight: 'bold'
                }

            },
            data:[
                     {   
                         value:pieMax, 
                       
                         name:'完成率',
                         tooltip: {   
                             show:true,
                             trigger: 'item',
                             formatter: "{a} <br/>{b}: {c} ({d}%)"
                         },

                         itemStyle: {
                             normal: {
                                 color: '#f57c6c',
                                
                             }
                             , 
                             emphasis: {
                                color: '#f57c6c'
                             }
                         },
                        
                        
                         label: {
                             normal: {
                                 show: true,
                                 position: 'center',
                                 fontWeight:700,
                                 fontSize: 20,
                                 formatter:'{d}%',
                             }
                    
                            },
                      
                     },

                     {
                        name:'总时间',
                        tooltip: {   
                             show:false,
                             trigger: 'item',
                             formatter: "{a} <br/>{b}: {c} ({d}%)"
                         },

                        value:pieSum, 

                        itemStyle: {

                             normal: {
                                 color: '#e6f1fc',  
                             },   

                             emphasis: {
                                color: '#e6f1fc'
                             }
                        },

                        label:{
                             normal:{
                                 show:false,
                                 position: 'center',
                                 
                             }
                         }
                         
                     },
                     
            ]

        }]
        
});

var twoPie = echarts.init(document.getElementById("twoPie"));

twoPie.setOption ({
    title: {
        text: "Conversions today",
        subtext: "743.35",
        x: 'center',
        y:160,
        itemGap: 12,
        textStyle: {
            color: "rgb(93, 105, 122)",
            fontSize: 12,
            fontStyle: "normal"
        },
        subtextStyle: {
            color: "rgb(60, 69, 81)",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: "bold"
        }
     },
   
    tooltip: {   
        show:true,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [{
            name:'任务进度',
            type:'pie',
            radius: ['52%', '50%'],  
            center:['center',90],    
            hoverAnimation: false,
            emphasis: {

                label: {
                        show: true,
                        fontSize: '26',
                        fontWeight: 'bold'
                }

            },
            data:[
                     {   
                         value:pieMax, 
                       
                         name:'完成率',
                         tooltip: {   
                             show:true,
                             trigger: 'item',
                             formatter: "{a} <br/>{b}: {c} ({d}%)"
                         },

                         itemStyle: {
                             normal: {
                                 color: '#1fc28a',
                                
                             }
                             , 
                             emphasis: {
                                color: '#1fc28a'
                             }
                         },
                        
                        
                         label: {
                             normal: {
                                 show: true,
                                 position: 'center',
                                 fontSize: 20,
                                 fontWeight:700,
                                 formatter:'{d}%',
                             }
                    
                            },
                      
                     },

                     {
                        name:'总时间',
                        tooltip: {   
                             show:false,
                             trigger: 'item',
                             formatter: "{a} <br/>{b}: {c} ({d}%)"
                         },

                        value:pieSum, 

                        itemStyle: {

                             normal: {
                                 color: '#e6f1fc',  
                             },   

                             emphasis: {
                                color: '#e6f1fc'
                             }
                        },

                        label:{
                             normal:{
                                 show:false,
                                 position: 'center',
                                 
                             }
                         }
                         
                     },
                     
            ]

        }]
        
});

var therePie = echarts.init(document.getElementById("therePie"));

therePie.setOption ({
    title: {
        text: "Revenue today",
        subtext: "1.573.989",
        x: 'center',
        y:160,
        itemGap: 12,
        textStyle: {
            color: "rgb(93, 105, 122)",
            fontSize: 12,
            fontStyle: "normal"
        },
        subtextStyle: {
            color: "rgb(60, 69, 81)",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: "bold"
        }
     },
   
    tooltip: {   
        show:true,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [{
            name:'任务进度',
            type:'pie',
            radius: ['52%', '50%'],  
            center:['center',90],    
            hoverAnimation: false,
            emphasis: {

                label: {
                        show: true,
                        fontSize: '26',
                        fontWeight: 'bold'
                }

            },
            data:[
                     {   
                         value:pieMax, 
                       
                         name:'完成率',
                         tooltip: {   
                             show:true,
                             trigger: 'item',
                             formatter: "{a} <br/>{b}: {c} ({d}%)"
                         },

                         itemStyle: {
                             normal: {
                                 color: '#27bdff',
                                
                             }
                             , 
                             emphasis: {
                                color: '#27bdff'
                             }
                         },
                        
                        
                         label: {
                             normal: {
                                 show: true,
                                 position: 'center',
                                 fontSize: 20,
                                 fontWeight:700,
                                 formatter:'{d}%',
                             }
                    
                            },
                      
                     },

                     {
                        name:'总时间',
                        tooltip: {   
                             show:false,
                             trigger: 'item',
                             formatter: "{a} <br/>{b}: {c} ({d}%)"
                         },

                        value:pieSum, 

                        itemStyle: {

                             normal: {
                                 color: '#e6f1fc',  
                             },   

                             emphasis: {
                                color: '#e6f1fc'
                             }
                        },

                        label:{
                             normal:{
                                 show:false,
                                 position: 'center',
                                 
                             }
                         }
                         
                     },
                     
            ]

        }]
        
});



/*柱形图*/
var barMax = Math.max.apply(null,result.info_series)+Math.max.apply(null,result.info_series)/5;
var dataShadow = [];

for (var i = 0; i < result.info_series.length; i++) {
    dataShadow.push(barMax);
}
var l_histogram = echarts.init(document.getElementById("l_histogram"));
var r_histogram = echarts.init(document.getElementById("r_histogram"));
var option={
     title: {
        text: "Transactions",
        top:22,
        left: 22,
        textStyle: {
            color: "#3c4551",
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
            data:result.info_xAxis,
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
                    color: "#3c4551",
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
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    width: 1,
                    type: "dashed",
                    color:'#e6f1fc',
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
            type: 'bar',
            itemStyle: {
                color: 'rgba(0,0,0,0.05)'
            },
            barGap: '-100%',
            barWidth: 8,
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
        },
        {
            name: "销量",
            type: "bar",
            data:result.info_series,
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: "#27bdff",
                }
            },
           
            
        }
    ],
    grid: {
        x: 60,
        y: 70,
        x2: 30,
        y2: 52
    }

};
l_histogram.setOption(option)
r_histogram.setOption(option)
