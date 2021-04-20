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
    legend: {
      data: ['En attente de versement', 'En cours', 'Clôturé'],
      selectedMode:false,
      //top:"10%",
      bottom:0,
      left:10,
      right:10,
      width:"100%"
    },
    series: [
      {
        //name: 'Countries',
        type: 'pie',
        radius: '70%',
        center: ['50%', '45%'],
        data: [
          { value: 15, name: 'En attente de versement'},
          { value: 25, name: 'En cours'},
          { value: 60, name: 'Clôturé'},
        ],

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
               
          label: {
              show: true,
              formatter: '{c}%',
          },

          data: [0]
        },
    ]
};

ChartOptions3: any =  {
        
  //color: ["#ff0000", "#ffc000", "#538135"],
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {d}%',
  },
  legend: {
    data: ['Des projets en retard', 'Des projets ont eu des deviations en terme de budget', 'Des projets non pas encore reçu les virements des tranches'],
    selectedMode:false,
    //top:"7%",
    bottom:0,
    left:10,
    right:10,
    width:"100%",
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
      center: ['50%', '45%'],
      data: [
        { value: 26, name: 'Des projets en retard'},
        { value: 37, name: 'Des projets ont eu des deviations en terme de budget'},
        { value: 37, name: 'Des projets non pas encore reçu les virements des tranches'},
      ],
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
      formatter: '{b}: {c}%',
  },
  legend: {
      selectedMode:false,
      show:false
  },
  grid: {
    top:22,
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
        "Assurance qualité\n& accréditation"
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
  title:{
    show:true,
    text:"% des bénéficiaires par type",
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
  grid: {
    top:22,
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

ChartOptions7: any = {
  /*color:["#5470c6"],*/
  tooltip: {
      trigger: 'item',
      formatter: '{c} Millions DT',
  },
  title:{
    show:true,
    text:"Etat du budget par catégorie",
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
      left: 5,
      right: 40,
      bottom: 0,
      containLabel: true
  },
  xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} M.DT',
        rotate:-45
      },
  },
  yAxis: {
      type: 'category',
      data: [
        "Appui à une meilleure\nconnexion au\nmarché de l'emploi",
        "Université innovante\n et entrepreneuriale",
        "Services aux étudiants",
        "Gouvernance et Capacité\n de Gestion",
        "Assurance qualité\n& accréditation"
      ],
  },
  series: [
      {
        name: 'Avancement des projets',
        type: 'bar',
        
        label: {
            show: false,
            formatter: '{c} M.DT',
        },
        data: [125, 100, 50, 75, 30],
      },
  ]
};

ChartOptions8: any =  {
        
  //color: ["#70ad47", "#ed7d32", "#a5a5a5"],
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {d}%',
    //formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  title:{
    show:true,
    text:"Budget par sous catégorie",
    textStyle:{
      fontSize:14,
      overflow:"break"
    },
    left:"center",
    right:"center"
  },
  legend: {
    data: [''],
    selectedMode:false,
    //top:"10%",
    bottom:0,
    left:"center",
    right:"center",
    width:"100%"
  },
  series: [
    {
      //name: 'Countries',
      type: 'pie',
      radius: '65%',
      center: ['50%', '45%'],
      data: [
        { value: 0, name: ''},
      ],
      label: {
        show:false
      },
      labelLine: {
        show:false
      }
    },
  ],
};

ChartOptions9: any =  {
        
  //color: ["#70ad47", "#ed7d32", "#a5a5a5"],
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {d}%',
    //formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  title:{
    show:true,
    text:"Budget par projet",
    textStyle:{
      fontSize:14,
      overflow:"break"
    },
    left:"center",
    right:"center"
  },
  legend: {
    data: [''],
    selectedMode:false,
    //top:"10%",
    bottom:0,
    left:"center",
    right:"center",
    width:"100%"
  },
  series: [
    {
      //name: 'Countries',
      type: 'pie',
      radius: '65%',
      center: ['50%', '45%'],
      data: [
        { value: 0, name: ''},
      ],
      label: {
        show:false
      },
      labelLine: {
        show:false
      }
    },
  ],
};

ChartOptions10: any =  {
        
  //color: ["#70ad47", "#ed7d32", "#a5a5a5"],
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {d}%',
    //formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  title:{
    show:true,
    text:"Taux des objectifs atteints",
    textStyle:{
      fontSize:14,
      overflow:"break"
    },
    left:"center",
    right:"center"
  },
  legend: {
    data: ['Objectif atteint', 'Objectif non atteint'],
    selectedMode:false,
    //top:"10%",
    bottom:0,
    left:"center",
    right:"center",
    width:"100%"
  },
  series: [
    {
      //name: 'Countries',
      type: 'pie',
      radius: '70%',
      center: ['50%', '45%'],
      data: [
        { value: 40, name: 'Objectif atteint'},
        { value: 60, name: 'Objectif non atteint'},
      ],

      label: {
        show:false
      },
      labelLine: {
        show:false
      }
    },
  ],
};


ChartOptions11: any =  {
  series: [{
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1,
      splitNumber: 8,
      axisLine: {
          lineStyle: {
              width: 25,
              color: this.mockServerService.getGaugeGradientColoration()
          }
      },
      pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-60%'],
          itemStyle: {
              color: '#464646'
          }
      },
      axisTick: {
          length: 12,
          lineStyle: {
              color: 'auto',
              width: 2
          }
      },
      splitLine: {
          length: 20,
          lineStyle: {
              color: 'auto',
              width: 5
          }
      },
      axisLabel: {
          show:false,
          color: '#464646',
          fontSize: 20,
          distance: -60,
          formatter: function (value) {
              if (value === 0.875) {
                  return 'A';
              }
              else if (value === 0.625) {
                  return 'B';
              }
              else if (value === 0.375) {
                  return 'C';
              }
              else if (value === 0.125) {
                  return 'D';
              }
          }
      },
      title: {
          offsetCenter: [0, '-110%'],
          textStyle:{
            fontSize:14,
            overflow:"break"
          },
      },
      detail: {
          fontSize: 30,
          offsetCenter: [0, -15],
          valueAnimation: true,
          formatter: function (value) {
              return Math.round(value * 100) + '%';
          },
          color: '#464646'
      },
      data: [{
          value: 0.36,
          name: 'Avancement du projet en fct du temps'
      }]
  }]
}

ChartOptions12: any = {
  /*color:["#5470c6"],*/
  tooltip: {
      trigger: 'item',
      formatter: '{c} Millions DT',
  },
  title:{
    show:true,
    text:"Etat du budget par status",
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
      left: 5,
      right: 40,
      bottom: 0,
      containLabel: true
  },
  xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} M.DT',
        rotate:-45
      },
  },
  yAxis: {
      type: 'category',
      data: [
        "Estimé",
        "Engagé",
        "Encaisé",
        "Réalisé",
      ],
  },
  series: [
      {
        name: 'Avancement des projets',
        type: 'bar',
        
        label: {
            show: false,
            formatter: '{c} M.DT',
        },
        data: [100, 20, 40, 25],
      },
  ]
};

ChartOptions13: any = {
  tooltip: {
      trigger: 'axis',
      axisPointer: {            // Use axis to trigger tooltip
          type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
      },
      //formatter: '{a0}, {b0}, {c0}, {d0}\n{a1}, {b1}, {c1}, {d1}',
  },
  title:{
    show:true,
    text:"Etat budgétaire par sponseur",
    textStyle:{
      fontSize:14,
      overflow:"break"
    },
    left:"center",
    right:"center"
  },
  legend: {
    data: ['Encaisé', 'Non encaisé'],
    selectedMode:false,
    //top:"10%",
    bottom:0,
    left:"center",
    right:"center",
    width:"100%"
  },
  grid: {
    top:"10%",
    left: 5,
    right: 20,
    bottom: 20,
    containLabel: true
  },
  xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} M.DT',
        rotate:45
      },
  },
  yAxis: {
      type: 'category',
      data: ['Estimation budgétaire\nPartenaire Industriel', 'Estimation budgétaire\nEESR/CR', 'Estimation budgétaire\nPAQ']
  },
  series: [
      {
          name: 'Encaisé',
          type: 'bar',
          stack: 'total',
          label: {
              show: true
          },
          emphasis: {
              focus: 'series'
          },
          data: [320, 302, 301]
      },
      {
          name: 'Non encaisé',
          type: 'bar',
          stack: 'total',
          label: {
              show: true
          },
          emphasis: {
              focus: 'series'
          },
          data: [120, 132, 101]
      }
  ]
}


selectedDataIndex1:number = undefined;

selectedDataIndex3:number = undefined;

selectedDataIndex4:number = undefined;

selectedDataIndex7:number = undefined;

selectedDataIndex8:number = undefined;

echart2Title: string = "";

@ViewChild("etatProjetParStatutDetail") etatProjetParStatutDetail: ElementRef;
@ViewChild("etatProjetParStatutDetailChart")etatProjetParStatutDetailChart: LineChartComponent;

@ViewChild("etatProjetParCauseAlerteDetail1") etatProjetParCauseAlerteDetail1: ElementRef;
@ViewChild("etatProjetParCauseAlerteDetailChart1")etatProjetParCauseAlerteDetailChart1: LineChartComponent;

@ViewChild("etatProjetParCauseAlerteDetail2") etatProjetParCauseAlerteDetail2: ElementRef;
@ViewChild("etatProjetParCauseAlerteDetailChart2")etatProjetParCauseAlerteDetailChart2: LineChartComponent;

@ViewChild("etatBudgetParCategorie") etatBudgetParCategorie: ElementRef;
@ViewChild("etatBudgetParCategorieChart") etatBudgetParCategorieChart: LineChartComponent;

@ViewChild("etatBudgetParCategorieDetail1") etatBudgetParCategorieDetail1: ElementRef;
@ViewChild("etatBudgetParCategorieDetailChart1") etatBudgetParCategorieDetailChart1: LineChartComponent;


@ViewChild("etatBudgetParCategorieDetail2") etatBudgetParCategorieDetail2: ElementRef;
@ViewChild("etatBudgetParCategorieDetailChart2") etatBudgetParCategorieDetailChart2: LineChartComponent;

constructor(private mockServerService: MockServerService) {}

ngOnInit(){
  
}

onDashboardChange(event){
  let selectVal = event.target.value;
  console.log("selectVal = ", selectVal);
  let el1 = document.querySelector(".ministre-dashboard-container");
  let el2 = document.querySelector(".chefprojet-dashboard-container");
  if(selectVal == "1"){
    el1.classList.remove("hide");
    el2.classList.add("hide");
  }
  else if(selectVal == "2"){
    el1.classList.add("hide");
    el2.classList.remove("hide");
  }
  window.dispatchEvent(new CustomEvent('customresize', {bubbles: true, cancelable:false}));
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

    if(window.innerWidth <= 880){
      this.etatProjetParStatutDetailChart.chartInstance.getDom().scrollIntoView(false);
    }

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
}

onEChart3DataUnselect(){
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

    if(window.innerWidth <= 880){
      this.etatProjetParCauseAlerteDetailChart2.chartInstance.getDom().scrollIntoView(false);
    }

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

onEChart7DataSelect(data){

  this.selectedDataIndex8 = undefined;
  this.ChartOptions9.series[0].data = [{ value: 0, name: ''}];
  this.etatBudgetParCategorieDetailChart2.chartInstance.setOption(this.ChartOptions9);
  this.etatBudgetParCategorieDetailChart2.chartInstance.dispatchAction({type: "unselect"});
  
  ////////

  console.log("onEChart7DataSelect data = ", data);
  this.selectedDataIndex7 = data;

    let echart7DataName = this.ChartOptions7.yAxis.data[this.selectedDataIndex7];
    //this.echart2Title = "Projets en statut '"+echart1DataName+"'";


  
    let newEchart8Data = (this.mockServerService.db[3].data as Array<any>).filter((el)=>{
      return echart7DataName == el.dependencyDiagramDataName;
    });

    let projectNames = newEchart8Data.map((el)=>{return el.name});
    let dataValues = newEchart8Data.map((el)=>{return el.data});

    console.log("projectNames = ", projectNames);

    console.log("dataValues = ", dataValues);

    this.ChartOptions8.legend.data = projectNames;

    this.ChartOptions8.series[0].data = projectNames.map((name, index)=>{
      return {value :dataValues[index], name: name}
    });

    if(window.innerWidth <= 880){
      this.etatBudgetParCategorieDetailChart1.chartInstance.getDom().scrollIntoView(false);
    }

    this.etatBudgetParCategorieDetailChart1.chartInstance.setOption(this.ChartOptions8);


    console.log("echart7DataName = ", echart7DataName);
    console.log("newEchart8Data = ", newEchart8Data);
  

}

onEChart7DataUnselect(){
  this.selectedDataIndex7 = undefined;
  
  this.ChartOptions8.series[0].data = [{ value: 0, name: ''}];

  this.etatBudgetParCategorieDetailChart1.chartInstance.setOption(this.ChartOptions8);
  this.etatBudgetParCategorieDetailChart1.chartInstance.dispatchAction({type: "unselect"});

  ///////

  this.selectedDataIndex8 = undefined;
  
  this.ChartOptions9.series[0].data = [{ value: 0, name: ''}];

  this.etatBudgetParCategorieDetailChart2.chartInstance.setOption(this.ChartOptions9);
  this.etatBudgetParCategorieDetailChart2.chartInstance.dispatchAction({type: "unselect"});
}

onEChart8DataSelect(data){

  console.log("onEChart7DataSelect data = ", data);
  this.selectedDataIndex8 = data;

  let echart8Data = this.ChartOptions8.series[0].data[this.selectedDataIndex8];
    //this.echart2Title = "Projets en statut '"+echart1DataName+"'";


  
    let newEchart9Data = (this.mockServerService.db[4].data as Array<any>).filter((el)=>{
      return echart8Data.name == el.dependencyDiagramDataName;
    });

    if(newEchart9Data.length){
      let projectNames = newEchart9Data.map((el)=>{return el.name});
      let dataValues = newEchart9Data.map((el)=>{return el.data});

      console.log("projectNames = ", projectNames);

      console.log("dataValues = ", dataValues);

      this.ChartOptions9.legend.data = projectNames;

      this.ChartOptions9.series[0].data = projectNames.map((name, index)=>{
        return {value :dataValues[index], name: name}
      });

      if(window.innerWidth <= 880){
        this.etatBudgetParCategorieDetailChart2.chartInstance.getDom().scrollIntoView(false);
      }

      this.etatBudgetParCategorieDetailChart2.chartInstance.setOption(this.ChartOptions9);
    }

    console.log("echart8DataName = ", echart8Data.name);
    console.log("newEchart9Data = ", newEchart9Data);

}

onEChart8DataUnselect(){
  this.selectedDataIndex8 = undefined;
  
  this.ChartOptions9.series[0].data = [{ value: 0, name: ''}];

  this.etatBudgetParCategorieDetailChart2.chartInstance.setOption(this.ChartOptions9);
  this.etatBudgetParCategorieDetailChart2.chartInstance.dispatchAction({type: "unselect"});
}

}