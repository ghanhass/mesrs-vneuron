// line-chart.component.ts
import { Component, HostListener, Input, AfterViewInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { EChartsOption, ECharts , registerTheme, init} from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements AfterViewInit{

  chartInstance: ECharts;

  @Input() diagramName: string;
  @Input() ChartOptions: any;

  isComponentRendered: boolean = false;

  @Output() echartrender: EventEmitter<any> = new EventEmitter();
  
  @Output() dataselect: EventEmitter<any> = new EventEmitter();
  @Output() dataunselect: EventEmitter<any> = new EventEmitter();
  isThemeSet: boolean = false;
  @ViewChild("echartsElRef") echartsElRef:ElementRef;

  windowWidth: number = window.innerWidth;
  windowHeight: number = window.innerHeight;

  selectedDataIndex: number;

  myTheme: any;

  constructor(){
    let colorPalette = [
      '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
      '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
      '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
      '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
    ];

    this.myTheme = 
    {
        "color": [
            "#d87c7c",
            "#919e8b",
            "#d7ab82",
            "#6e7074",
            "#61a0a8",
            "#efa18d",
            "#787464",
            "#cc7e63",
            "#724e58",
            "#4b565b"
        ],
        "backgroundColor": "rgba(254,248,239,1)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#333333"
            },
            "subtextStyle": {
                "color": "#aaaaaa"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#c23531",
                "color0": "#314656",
                "borderColor": "#c23531",
                "borderColor0": "#314656",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaaaaa"
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#d87c7c",
                "#919e8b",
                "#d7ab82",
                "#6e7074",
                "#61a0a8",
                "#efa18d",
                "#787464",
                "#cc7e63",
                "#724e58",
                "#4b565b"
            ],
            "label": {
                "color": "#eeeeee"
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#444444",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#444444",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#999999"
                },
                "emphasis": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#333333"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#293c55",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#293c55",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#a9334c"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#293c55",
                    "borderColor": "#293c55",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#293c55",
                    "borderColor": "#293c55",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#e43c59",
                "borderColor": "#c23531"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#293c55"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#293c55"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#bf444c",
                "#d88273",
                "#f6efa6"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "color": "#eeeeee"
            },
            "emphasis": {
                "label": {
                    "color": "#eeeeee"
                }
            }
        }
    }
    
    

    registerTheme('myTheme', this.myTheme);
  }

  ngAfterViewInit(){
    this.isComponentRendered = true;
  }

  isMatch(el, match){//cross plateform Element.matches() workaround
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, match);
  }

  getDOMClosest(elem: any, selector: string){//DOM closest ancestor specified by a CSS selector
    for ( ; elem && elem !== document; elem = elem.parentElement ) {
      if ( this.isMatch(elem, selector) ) return elem;
    }
    return null;
  }

  /*@HostListener("document:click", ["$event"])
  onComponentClick(event){
    if(this.isComponentRendered){
      if(this.chartInstance){
        let seriesArr: any = this.ChartOptions.series
        //if(seriesArr.length == 1 ){
          let evTarget: HTMLElement = event.target;
          let bool = this.isMatch(evTarget, "div.echart."+this.chartInstance.getId()) || this.getDOMClosest(evTarget, "div.echart."+this.chartInstance.getId());
          //bool = bool || this.containsIgnorableClassnames(this.chartInstance.getDom())
          if( !bool ){
            if(seriesArr[0].type == "pie"){
              this.chartInstance.dispatchAction({type:"downplay"});
              console.log("here!");
            }
          }
        //}
      } 
    }
  }*/

  /*containsIgnorableClassnames(){

  }*/

  onChartInit(e: any) {
    
    let self = this;
    
    this.chartInstance = e;
    console.log('on chart init:', e);
    this.chartInstance.getDom().classList.add(this.chartInstance.getId());
    if(!this.isThemeSet){
      this.chartInstance.dispose();
      this.chartInstance = init(this.echartsElRef.nativeElement, "myTheme");
      this.chartInstance.setOption(this.ChartOptions);

      this.isThemeSet = true;
    }
    let seriesArr: any = this.ChartOptions.series;
    if(seriesArr.length){
      this.chartInstance.on('selectchanged', function (params: any) {
        console.log("chart selectchanged = ",params);
        let selectedDataIndex = params.fromActionPayload.dataIndexInside;
        let selectType = params.fromAction;

        self.chartInstance.dispatchAction({type:"downplay"});
        if(selectType == "select"){
          if(self.selectedDataIndex !== selectedDataIndex){
            self.chartInstance.dispatchAction({
              type:"highlight",
              dataIndex: selectedDataIndex
            });
            self.selectedDataIndex = selectedDataIndex;
            self.dataselect.emit(selectedDataIndex);
          }
          else{
            self.selectedDataIndex = undefined;
            self.dataunselect.emit();
          }
        }
        else if(selectType == "unselect"){
          self.selectedDataIndex = undefined;
          self.dataunselect.emit();
        }

      });
    }

  }

  @HostListener("window:resize", ["$event"])
  onWindowResize(event){
    let newWindowWidth = window.innerWidth;
    let newWindowHeight = window.innerHeight;
    if(newWindowWidth != this.windowWidth || newWindowHeight != this.windowHeight){
      if(this.echartsElRef.nativeElement){
        this.dataunselect.emit();
        this.chartInstance.dispose();
        this.chartInstance = init(this.echartsElRef.nativeElement, "myTheme");
        this.chartInstance.setOption(this.ChartOptions);
        this.onChartInit(this.chartInstance);

        /*if(this.selectedDataIndex){
          this.chartInstance.dispatchAction({
            type:"highlight",
            dataIndex: this.selectedDataIndex
          });
          this.dataselect.emit(this.selectedDataIndex);
        }*/
      }
    }

  }

}
