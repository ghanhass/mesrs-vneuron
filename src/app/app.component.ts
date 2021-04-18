import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MockServerService } from './mock-server.service';
import { LineChartComponent } from './charts/line-chart/line-chart.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

ChartOptions1: any =  {
        
    color: ["#70ad47", "#ed7d32", "#a5a5a5"],
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {d}%',
      //formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal',
      center: 'center',
      bottom: "bottom",
      data: ['En attente de versement', 'En cours', 'Clôturé'],
      textStyle: {
        color: "#000000",
      },
      selectedMode:false
    },
    series: [
      {
        //name: 'Countries',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        data: [
          { value: 15, name: 'En attente de versement', id: 1},
          { value: 25, name: 'En cours', id: 2},
          { value: 60, name: 'Clôturé', id: 3 },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "#8c8c8c",
          },
        },
        label: {
          normal: {
            textStyle: {
              color: "#000000",
            },
          },
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: "#8c8c8c",
            },
          },
        },
      },
    ],
};

ChartOptions2: any = {
    color:["#5470c6"],
    tooltip: {
        trigger: 'item',
        /*axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }*/
        formatter: '{b}: {c}%',
    },
    legend: {
        selectedMode:false,
        show:false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        max: 100
    },
    yAxis: {
        type: 'category',
        data: [''],
    },
    series: [
        {
          name: 'Avancement des projets',
          type: 'bar',
          
          label: {
              show: true,
              formatter: '{c}%',
          },
          emphasis: {
              focus: 'series'
          },
          data: [0]
        },
    ]
};

selectedDataIndex1:number = undefined;
echart2Title: string = "";

@ViewChild("etatAvancementParStatutDetail") etatAvancementParStatutDetail: ElementRef;

@ViewChild("etatAvancementParStatutDetailChart")etatAvancementParStatutDetailChart: LineChartComponent;

constructor(private mockServerService: MockServerService) {}

ngOnInit(){
  
}

onEChartRender(data){
}

onEChart1DataSelect(data){
  console.log("onEChart1DataSelect data = ", data);
  this.selectedDataIndex1 = data;
  let etatAvancementParStatutDetailEl: HTMLElement = this.etatAvancementParStatutDetail.nativeElement;
  if(etatAvancementParStatutDetailEl){
    etatAvancementParStatutDetailEl.style.opacity = "1";

    let echart1Data = this.ChartOptions1.series[0].data[this.selectedDataIndex1];

    let echart1DataName = echart1Data.name;
    this.echart2Title = "Projets en état '"+echart1DataName+"'";

    etatAvancementParStatutDetailEl.querySelector(".title").textContent = this.echart2Title;
  
    let newEchart2Data = (this.mockServerService.db[1].data as Array<any>).filter((el)=>{
      return echart1DataName == el.dependencyDiagramDataName;
    });

    let projectNames = newEchart2Data.map((el)=>{return el.name});
    let dataValues = newEchart2Data.map((el)=>{return el.data});

    console.log("projectNames = ", projectNames);

    console.log("dataValues = ", dataValues);

    this.ChartOptions2.yAxis.data = projectNames;
    this.ChartOptions2.series[0].data = dataValues;

    this.etatAvancementParStatutDetailChart.chartInstance.setOption(this.ChartOptions2);


    console.log("echart1DataName = ", echart1DataName);
    console.log("newEchart2Data = ", newEchart2Data);
  }

}

onEChart1DataUnselect(){
  this.selectedDataIndex1 = undefined;

  let etatAvancementParStatutDetailEl: HTMLElement = this.etatAvancementParStatutDetail.nativeElement;
  if(etatAvancementParStatutDetailEl){
    etatAvancementParStatutDetailEl.style.opacity = "0";
  }
}

}