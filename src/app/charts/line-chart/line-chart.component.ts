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
            "#3fb1e3",
            "#6be6c1",
            "#626c91",
            "#a0a7e6",
            "#c4ebad",
            "#96dee8"
        ],
        "backgroundColor": "rgba(252,252,252,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#666666",
            },
            "subtextStyle": {
                "color": "#999999"
            },
            
        },
        "line": {
            "itemStyle": {
                "borderWidth": "2"
            },
            "lineStyle": {
                "width": "3"
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": "2"
            },
            "lineStyle": {
                "width": "3"
            },
            "symbolSize": "8",
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
                "color": "#e6a0d2",
                "color0": "transparent",
                "borderColor": "#e6a0d2",
                "borderColor0": "#3fb1e3",
                "borderWidth": "2"
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "lineStyle": {
                "width": "1",
                "color": "#cccccc"
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#3fb1e3",
                "#6be6c1",
                "#626c91",
                "#a0a7e6",
                "#c4ebad",
                "#96dee8"
            ],
            "label": {
                "color": "#ffffff"
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#aaaaaa",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(63,177,227,0.25)",
                    "borderColor": "#3fb1e3",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#3fb1e3"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#aaaaaa",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(63,177,227,0.25)",
                    "borderColor": "#3fb1e3",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#3fb1e3"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
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
                "color": "#999999"
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
                "color": "#626c91",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#626c91",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#626c91"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#626c91",
                    "borderColor": "#626c91",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#626c91",
                    "borderColor": "#626c91",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#3fb1e3",
                "borderColor": "#3fb1e3"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#626c91"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#626c91"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#2a99c9",
                "#afe8ff"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(222,222,222,1)",
            "fillerColor": "rgba(114,230,212,0.25)",
            "handleColor": "#cccccc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#999999"
            }
        },
        "markPoint": {
            "label": {
                "color": "#ffffff"
            },
            "emphasis": {
                "label": {
                    "color": "#ffffff"
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
    //console.log('on chart init:', e);
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
        //console.log("chart selectchanged = ",params);
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

  @HostListener("window:customresize", ["$event"])
  onWindowCustomResize(event){
    let newWindowWidth = window.innerWidth;
    let newWindowHeight = window.innerHeight;
      if(this.echartsElRef.nativeElement){
        this.dataunselect.emit();
        this.chartInstance.dispose();
        this.chartInstance = init(this.echartsElRef.nativeElement, "myTheme");
        this.chartInstance.setOption(this.ChartOptions);
        this.onChartInit(this.chartInstance);
      }

  }

}
