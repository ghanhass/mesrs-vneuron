// line-chart.component.ts
import { Component, HostListener, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { EChartsOption, ECharts } from 'echarts';

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


  selectedDataIndex: number;

  constructor(){

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

    let seriesArr: any = this.ChartOptions.series;
    if(seriesArr.length){
      this.chartInstance.on('selectchanged', function (params: any) {
        console.log("chart selectchanged = ",params);
        let selectedDataIndex = params.fromActionPayload.dataIndexInside;

        self.chartInstance.dispatchAction({type:"downplay"});
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

      });
    }

  }

}
