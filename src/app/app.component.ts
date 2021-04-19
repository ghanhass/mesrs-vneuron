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
        
    //color: ["#70ad47", "#ed7d32", "#a5a5a5"],
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {d}%',
      //formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    title:{
      show:true,
      text:"Etat d'avancement des projets par statut",
      textStyle:{
        fontSize:14,
        overflow:"break"
      },
      left:"center",
      right:"center"
    },
    /*grid: {
      top:50,
      left: '3%',
      right: '4%',
      bottom: 30,
      containLabel: true
    },*/
    legend: {
      /*orient: 'horizontal',
      center: 'center',
      bottom: "bottom",*/
      data: ['En attente de versement', 'En cours', 'Clôturé'],
      /*textStyle: {
        //color: "#000000",
      },*/
      selectedMode:false,
      top:"10%"
    },
    series: [
      {
        //name: 'Countries',
        type: 'pie',
        radius: '70%',
        center: ['50%', '60%'],
        data: [
          { value: 15, name: 'En attente de versement'},
          { value: 25, name: 'En cours'},
          { value: 60, name: 'Clôturé'},
        ],
        /*itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "#8c8c8c",
          },
        },*/
        label: {
          show:false
        },
        labelLine: {
          show:false
        }
      },
    ],
};

ChartOptions2: any = {
    /*color:["#5470c6"],*/
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%',
    },
    title:{
      show:true,
      text:"",
      textStyle:{
        fontSize:14,
        overflow:"break"
      },
      left:"center",
      right:"center"
    },
    legend: {
        selectedMode:false,
        show:false
    },
    grid: {
        top:25,
        left: 10,
        right: 20,
        bottom: 15,
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
        data: ['']
    },
    series: [
        {
          name: 'Avancement des projets',
          type: 'bar',
          
          /*showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },*/
          
          label: {
              show: true,
              formatter: '{c}%',
          },
          /*emphasis: {
              focus: 'series'
          },*/
          data: [0]
        },
    ]
};

ChartOptions3: any =  {
        
  //color: ["#ff0000", "#ffc000", "#538135"],
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {d}%',
    //formatter: '{a} <br/>{b} : {c} ({d}%)',
    /*right:"right"*/
  },
  legend: {
    /*orient: 'horizontal',
    center: 'center',
    bottom: "bottom",*/
    data: ['Des projets en retard', 'Des projets ont eu des deviations en terme de budget', 'Des projets non pas encore reçu les virements des tranches'],
    /*textStyle: {
      color: "#000000",
    },*/
    selectedMode:false,
    top:"7%"
  },
  title:{
    show:true,
    text:"Etat des projets par cause d'alerte",
    textStyle:{
      fontSize:14,
      overflow:"break"
    },
    left:"center",
    right:"center"
  },
  series: [
    {
      //name: 'Countries',
      type: 'pie',
      radius: "60%",
      center: ['50%', '60%'],
      data: [
        { value: 26, name: 'Des projets en retard'},
        { value: 37, name: 'Des projets ont eu des deviations en terme de budget'},
        { value: 37, name: 'Des projets non pas encore reçu les virements des tranches'},
      ],
      /*itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "#8c8c8c",
        },
      },*/
      label: {
        show:false
      },
      labelLine: {
        show:false
      }
    },
  ],
};

ChartOptions4: any = {
  title:{
    show:true,
    text:"% des bénéficiaires par catégories",
    textStyle:{
      fontSize:14,
      overflow:"break"
    },
    left:"center",
    right:"center"
  },
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
  /*grid: {
    top:"1%",
    left: 10,
    right: 20,
    bottom: "1%",
    containLabel: true,
    show:true
  },*/
  grid: {
    top:5,
    left: 10,
    right: 10,
    bottom: 60,
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
        //height: 300,
        width:70,
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

ChartOptions5: any = {
  //color:["#5470c6"],
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
    top:5,
    left: 10,
    right: 10,
    bottom: 60,
    containLabel: true
  },
  xAxis: {
      type: 'category',
      data: [
        "Enseignant",
        "Etudiant"
      ],
      axisLabel: {
        overflow: "break",
        //height: 300,
        width:70,
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
        data: [0, 0]
      },
  ]
};

ChartOptions6: any = {
  title:{
    show:true,
    text:"Nbr de bénéficiaires en fct du temps",
    textStyle:{
      fontSize:14,
      overflow:"break"
    },
    left:"center",
    right:"center"
  },
  tooltip: {
    trigger: 'axis',
    formatter: '{b}: {c}%',
  },
  xAxis: {
      type: 'category',
      data: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
      
  },
  yAxis: {
      type: 'value',
      max:100
  },
  series: [{
      data: [60, 20, 10, 50, 50, 40, 50, 50],
      type: 'line'
  }]
};

selectedDataIndex1:number = undefined;

selectedDataIndex3:number = undefined;

selectedDataIndex4:number = undefined;

echart2Title: string = "";

@ViewChild("etatProjetParStatutDetail") etatProjetParStatutDetail: ElementRef;
@ViewChild("etatProjetParStatutDetailChart")etatProjetParStatutDetailChart: LineChartComponent;

@ViewChild("etatProjetParCauseAlerteDetail1") etatProjetParCauseAlerteDetail1: ElementRef;
@ViewChild("etatProjetParCauseAlerteDetailChart1")etatProjetParCauseAlerteDetailChart1: LineChartComponent;

@ViewChild("etatProjetParCauseAlerteDetail2") etatProjetParCauseAlerteDetail2: ElementRef;
@ViewChild("etatProjetParCauseAlerteDetailChart2")etatProjetParCauseAlerteDetailChart2: LineChartComponent;

constructor(private mockServerService: MockServerService) {}

ngOnInit(){
  
}


onEChart1DataSelect(data){
  console.log("onEChart1DataSelect data = ", data);
  this.selectedDataIndex1 = data;
  let etatProjetParStatutDetailEl: HTMLElement = this.etatProjetParStatutDetail.nativeElement;
  if(etatProjetParStatutDetailEl){
    //etatProjetParStatutDetailEl.classList.remove("hidden-diagram");

    let echart1Data = this.ChartOptions1.series[0].data[this.selectedDataIndex1];

    let echart1DataName = echart1Data.name;

    this.ChartOptions2.title.text = "Projets en statut '"+echart1DataName+"'"
    
    //this.echart2Title = "Projets en statut '"+echart1DataName+"'";

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

    this.etatProjetParStatutDetailChart.chartInstance.getDom().scrollIntoView(false);

    this.etatProjetParStatutDetailChart.chartInstance.setOption(this.ChartOptions2);


    console.log("echart1DataName = ", echart1DataName);
    console.log("newEchart2Data = ", newEchart2Data);
  }

}

onEChart1DataUnselect(){
  this.selectedDataIndex1 = undefined;

  let etatProjetParStatutDetailEl: HTMLElement = this.etatProjetParStatutDetail.nativeElement;
  if(etatProjetParStatutDetailEl){
    this.ChartOptions2.yAxis.data = [''];
    this.ChartOptions2.series[0].data = [0];
    this.ChartOptions2.title.text = "";

    this.etatProjetParStatutDetailChart.chartInstance.setOption(this.ChartOptions2);
    ///etatProjetParStatutDetailEl.classList.add("hidden-diagram");
  }
}

onEChart3DataSelect(data){
  /*console.log("onEChart3DataSelect data = ", data);
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
      subtextStyle: {
        fontSize:13
      }
    };

  
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

    //unselect etat-projet-par-cause-alerte-detail1
    this.etatProjetParCauseAlerteDetailChart1.chartInstance.dispatchAction({type: "unselect"});
    
    this.etatProjetParCauseAlerteDetailChart1.chartInstance.getDom().scrollIntoView(false);

    this.etatProjetParCauseAlerteDetailChart1.chartInstance.setOption(this.ChartOptions4);

    //rehide etat-projet-par-cause-alerte-detail2 


    console.log("echart3DataName = ", echart3DataName);
    console.log("newEchart4Data = ", newEchart4Data);
  }*/
}

onEChart3DataUnselect(){
  this.selectedDataIndex3 = undefined;
  /*
  let etatProjetParCauseAlerteDetail1_El: HTMLElement = this.etatProjetParCauseAlerteDetail1.nativeElement;
  if(etatProjetParCauseAlerteDetail1_El){
    etatProjetParCauseAlerteDetail1_El.classList.add("hidden-diagram");
  }
  
  this.etatProjetParCauseAlerteDetailChart1.chartInstance.dispatchAction({type: "unselect"});
  this.etatProjetParCauseAlerteDetailChart2.chartInstance.dispatchAction({type: "unselect"});*/
}

onEChart4DataSelect(data){
  console.log("onEChart4DataSelect data = ", data);
  this.selectedDataIndex4 = data;
  let etatProjetParCauseAlerteDetail2_EL: HTMLElement = this.etatProjetParCauseAlerteDetail2.nativeElement;
  if(etatProjetParCauseAlerteDetail2_EL){
    /*etatProjetParCauseAlerteDetail2_EL.classList.remove("hidden-diagram");*/

    //let echart4Data = this.ChartOptions4.series[0].data[this.selectedDataIndex4];

    let echart4DataName = this.ChartOptions4.xAxis.data[this.selectedDataIndex4];
    //this.echart2Title = "Projets en statut '"+echart1DataName+"'";

    let title = {
      subtext: echart4DataName,
      //subtext: echart3DataName,
      left: 'center',
      /*subtextStyle: {
        fontSize:13
      }*/
    };

  
    let newEchart5Data = (this.mockServerService.db[2].data as Array<any>).filter((el)=>{
      return echart4DataName == el.dependencyDiagramDataName;
    });

    let projectNames = newEchart5Data.map((el)=>{return el.name});
    let dataValues = newEchart5Data.map((el)=>{return el.data});

    console.log("projectNames = ", projectNames);

    console.log("dataValues = ", dataValues);

    this.ChartOptions5.title = title;
    this.ChartOptions5.xAxis.data = projectNames;
    this.ChartOptions5.series[0].data = dataValues;

    this.etatProjetParCauseAlerteDetailChart2.chartInstance.getDom().scrollIntoView(false);

    this.etatProjetParCauseAlerteDetailChart2.chartInstance.setOption(this.ChartOptions5);


    console.log("echart4DataName = ", echart4DataName);
    console.log("newEchart5Data = ", newEchart5Data);
  }
}

onEChart4DataUnselect(){
  this.selectedDataIndex4 = undefined;

  let etatProjetParCauseAlerteDetail2_El: HTMLElement = this.etatProjetParCauseAlerteDetail2.nativeElement;
  if(etatProjetParCauseAlerteDetail2_El){
    /*etatProjetParCauseAlerteDetail2_El.classList.add("hidden-diagram");*/
  }
  
  this.ChartOptions5.series[0].data = [0, 0];
  this.etatProjetParCauseAlerteDetailChart2.chartInstance.setOption(this.ChartOptions5);

  this.etatProjetParCauseAlerteDetailChart2.chartInstance.dispatchAction({type: "unselect"});
}

}