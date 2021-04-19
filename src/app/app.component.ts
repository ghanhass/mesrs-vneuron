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
          { value: 15, name: 'En attente de versement'},
          { value: 25, name: 'En cours'},
          { value: 60, name: 'Clôturé'},
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
        max: 100,
        axisLabel: {
          formatter: '{value} %'
        },
    },
    yAxis: {
        type: 'category',
        data: [''],
    },
    series: [
        {
          name: 'Avancement des projets',
          type: 'bar',
          
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          
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

ChartOptions3: any =  {
        
  color: ["#ff0000", "#ffc000", "#538135"],
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {d}%',
    //formatter: '{a} <br/>{b} : {c} ({d}%)',
    right:"right"
  },
  legend: {
    orient: 'horizontal',
    center: 'center',
    bottom: "bottom",
    data: ['Des projets en retard', 'Des projets ont eu des deviations en terme de budget', 'Des projets non pas encore reçu les virements des tranches'],
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
        { value: 26, name: 'Des projets en retard'},
        { value: 37, name: 'Des projets ont eu des deviations en terme de budget'},
        { value: 37, name: 'Des projets non pas encore reçu les virements des tranches'},
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

ChartOptions4: any = {
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
      /*left: '3%',
      right: '4%',
      bottom: '3%',*/
      left:"3%",
      right:"3%",
      top:"7%",
      containLabel: true
  },
  xAxis: {
      type: 'category',
      data: [
        "Appui à une meilleure connexion au marché de l'emploi",
        "Université innovante et entrepreneuriale",
        "Services aux étudiants",
        "Gouvernance et Capacité de Gestion",
        "Assurance qualité & accréditation"
      ],
      axisLabel: {
        overflow: "break",
        height: 300,
        width:90,
        interval:0,
        align:"center",
        //verticalAlign:"bottom",
        //rotate:-75
      },
  },
  yAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        formatter: '{value} %'
      },
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
        data: [60, 20, 10, 50, 50]
      },
  ]
};

selectedDataIndex1:number = undefined;

selectedDataIndex3:number = undefined;

echart2Title: string = "";

@ViewChild("etatProjetParStatutDetail") etatProjetParStatutDetail: ElementRef;
@ViewChild("etatProjetParStatutDetailChart")etatProjetParStatutDetailChart: LineChartComponent;

@ViewChild("etatProjetParCauseAlerteDetail1") etatProjetParCauseAlerteDetail1: ElementRef;
@ViewChild("etatProjetParCauseAlerteDetailChart1")etatProjetParCauseAlerteDetailChart1: LineChartComponent;

constructor(private mockServerService: MockServerService) {}

ngOnInit(){
  
}


onEChart1DataSelect(data){
  console.log("onEChart1DataSelect data = ", data);
  this.selectedDataIndex1 = data;
  let etatProjetParStatutDetailEl: HTMLElement = this.etatProjetParStatutDetail.nativeElement;
  if(etatProjetParStatutDetailEl){
    etatProjetParStatutDetailEl.classList.remove("hidden-diagram");

    let echart1Data = this.ChartOptions1.series[0].data[this.selectedDataIndex1];

    let echart1DataName = echart1Data.name;
    this.echart2Title = "Projets en statut '"+echart1DataName+"'";

    etatProjetParStatutDetailEl.querySelector(".title").textContent = this.echart2Title;
  
    let newEchart2Data = (this.mockServerService.db[0].data as Array<any>).filter((el)=>{
      return echart1DataName == el.dependencyDiagramDataName;
    });

    let projectNames = newEchart2Data.map((el)=>{return el.name});
    let dataValues = newEchart2Data.map((el)=>{return el.data});

    console.log("projectNames = ", projectNames);

    console.log("dataValues = ", dataValues);

    this.ChartOptions2.yAxis.data = projectNames;
    this.ChartOptions2.series[0].data = dataValues;

    this.etatProjetParStatutDetailChart.chartInstance.setOption(this.ChartOptions2);


    console.log("echart1DataName = ", echart1DataName);
    console.log("newEchart2Data = ", newEchart2Data);
  }

}

onEChart1DataUnselect(){
  this.selectedDataIndex1 = undefined;

  let etatProjetParStatutDetailEl: HTMLElement = this.etatProjetParStatutDetail.nativeElement;
  if(etatProjetParStatutDetailEl){
    etatProjetParStatutDetailEl.classList.add("hidden-diagram");
  }
}

onEChart3DataSelect(data){
  console.log("onEChart3DataSelect data = ", data);
  this.selectedDataIndex3 = data;
  let etatProjetParCauseAlerteDetail1_EL: HTMLElement = this.etatProjetParCauseAlerteDetail1.nativeElement;
  if(etatProjetParCauseAlerteDetail1_EL){
    etatProjetParCauseAlerteDetail1_EL.classList.remove("hidden-diagram");

    let echart3Data = this.ChartOptions3.series[0].data[this.selectedDataIndex3];

    let echart3DataName = echart3Data.name;
    //this.echart2Title = "Projets en statut '"+echart1DataName+"'";

    let title = {
      subtext: echart3DataName,
      //subtext: echart3DataName,
      left: 'center',
      textStyle: {
        overflow: "break"
      }
    };
    etatProjetParCauseAlerteDetail1_EL.querySelector(".title").textContent = "Pourcentages des bénéficiaires par catégorie";
  
    let newEchart4Data = (this.mockServerService.db[1].data as Array<any>).filter((el)=>{
      return echart3DataName == el.dependencyDiagramDataName;
    });

    let projectNames = newEchart4Data.map((el)=>{return el.name});
    let dataValues = newEchart4Data.map((el)=>{return el.data});

    console.log("projectNames = ", projectNames);

    console.log("dataValues = ", dataValues);

    this.ChartOptions4.title = title;
    this.ChartOptions4.xAxis.data = projectNames;
    this.ChartOptions4.series[0].data = dataValues;

    this.etatProjetParCauseAlerteDetailChart1.chartInstance.setOption(this.ChartOptions4);


    console.log("echart3DataName = ", echart3DataName);
    console.log("newEchart4Data = ", newEchart4Data);
  }
}

onEChart3DataUnselect(){
  this.selectedDataIndex3 = undefined;

  let etatProjetParCauseAlerteDetail1_El: HTMLElement = this.etatProjetParCauseAlerteDetail1.nativeElement;
  if(etatProjetParCauseAlerteDetail1_El){
    etatProjetParCauseAlerteDetail1_El.classList.add("hidden-diagram");
  }
}

}