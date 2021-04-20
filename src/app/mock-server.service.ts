import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockServerService {

  db = [
    /*{
      diagramName: "etat-projet-par-statut",
      data:[
        {
          name: "En attente de versement",
          data: 15
        },
        {
          name: "En cours",
          data: 25
        },
        {
          name: "Clôturé",
          data: 60
        }
      ]
    },*/
    {
      diagramName: "etat-projet-par-statut-detail",
      data:[
        {
          name: "Projet 1",
          data: 30,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En attente de versement",
        },
        {
          name: "Projet 2",
          data: 40,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En attente de versement",
        },
        {
          name: "Projet 3",
          data: 20,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En attente de versement",
        },
        {
          name: "Projet 4",
          data: 50,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En attente de versement",
        },
        /****************/
        {
          name: "Projet 6",
          data: 45,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 7",
          data: 70,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 8",
          data: 80,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 9",
          data: 10,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 10",
          data: 70,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        /****************/
        {
          name: "Projet 11",
          data: 100,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "Clôturé",
        },
        {
          name: "Projet 12",
          data: 100,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "Clôturé",
        },
        {
          name: "Projet 13",
          data: 100,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "Clôturé",
        },
        {
          name: "Projet 14",
          data: 100,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "Clôturé",
        }
      ]
    },
    {
      diagramName: "etat-projet-par-cause-alerte-detail1",
      data:[
        {
          name: "Appui à une meilleure connexion au marché de l'emploi",
          data: 60,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets en retard",
        },
        {
          name: "Université innovante et entrepreneuriale",
          data: 20,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets en retard",
        },
        {
          name: "Services aux étudiants",
          data: 10,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets en retard",
        },
        {
          name: "Gouvernance et Capacité de Gestion",
          data: 50,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets en retard",
        },
        {
          name: "Assurance qualité\n& accréditation",
          data: 50,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets en retard",
        },
        /*************/
        {
          name: "Appui à une meilleure connexion au marché de l'emploi",
          data: 40,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets ont eu des deviations en terme de budget",
        },
        {
          name: "Université innovante et entrepreneuriale",
          data: 30,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets ont eu des deviations en terme de budget",
        },
        {
          name: "Services aux étudiants",
          data: 25,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets ont eu des deviations en terme de budget",
        },
        {
          name: "Gouvernance et Capacité de Gestion",
          data: 70,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets ont eu des deviations en terme de budget",
        },
        {
          name: "Assurance qualité\n& accréditation",
          data: 80,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets ont eu des deviations en terme de budget",
        },
        /*****************/
        {
          name: "Appui à une meilleure connexion au marché de l'emploi",
          data: 85,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets non pas encore reçu les virements des tranches",
        },
        {
          name: "Université innovante et entrepreneuriale",
          data: 10,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets non pas encore reçu les virements des tranches",
        },
        {
          name: "Services aux étudiants",
          data: 35,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets non pas encore reçu les virements des tranches",
        },
        {
          name: "Gouvernance et Capacité de Gestion",
          data: 65,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets non pas encore reçu les virements des tranches",
        },
        {
          name: "Assurance qualité\n& accréditation",
          data: 65,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets non pas encore reçu les virements des tranches",
        }
      ]
    },
    {
      diagramName: "etat-projet-par-statut-detail2",
      data:[
        {
          name: "Etudiant",
          data: 40,
          dependencyDiagramName: "etat-projet-par-statut-detail1",
          dependencyDiagramDataName: "Appui à une meilleure connexion au marché de l'emploi",
        },
        {
          name: "Enseignant",
          data: 60,
          dependencyDiagramName: "etat-projet-par-statut-detail1",
          dependencyDiagramDataName: "Appui à une meilleure connexion au marché de l'emploi",
        },
        /***************/
        {
          name: "Etudiant",
          data: 50,
          dependencyDiagramName: "etat-projet-par-statut-detail1",
          dependencyDiagramDataName: "Université innovante et entrepreneuriale",
        },
        {
          name: "Enseignant",
          data: 50,
          dependencyDiagramName: "etat-projet-par-statut-detail1",
          dependencyDiagramDataName: "Université innovante et entrepreneuriale",
        },
        /***************/
        {
          name: "Etudiant",
          data: 30,
          dependencyDiagramName: "etat-projet-par-statut-detail1",
          dependencyDiagramDataName: "Services aux étudiants",
        },
        {
          name: "Enseignant",
          data: 70,
          dependencyDiagramName: "etat-projet-par-statut-detail1",
          dependencyDiagramDataName: "Services aux étudiants",
        },
        /***************/
        {
          name: "Etudiant",
          data: 80,
          dependencyDiagramName: "etat-projet-par-statut-detail1",
          dependencyDiagramDataName: "Gouvernance et Capacité de Gestion",
        },
        {
          name: "Enseignant",
          data: 20,
          dependencyDiagramName: "etat-projet-par-statut-detail1",
          dependencyDiagramDataName: "Gouvernance et Capacité de Gestion",
        },
        /***************/
        {
          name: "Etudiant",
          data: 25,
          dependencyDiagramName: "etat-projet-par-statut-detail1",
          dependencyDiagramDataName: "Assurance qualité\n& accréditation",
        },
        {
          name: "Enseignant",
          data: 75,
          dependencyDiagramName: "etat-projet-par-statut-detail1",
          dependencyDiagramDataName: "Assurance qualité\n& accréditation",
        }
        /***************/
      ]
    },
    {
      diagramName: "etat-projet-par-statut-detail1",
      data:[
        {
          name: "PAQ Co-Construction et Innovations pédagogiques",
          data: 40,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Assurance qualité\n& accréditation",
        },
        {
          name: "PAQ CG Appui au Pilotage et aux mécanismes/structures d'insertion",
          data: 40,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Assurance qualité\n& accréditation",
        },
        {
          name: "Certification des compétences pour l'employabilité PRICE",
          data: 20,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Assurance qualité\n& accréditation",
        },
        /**************/
        {
          name: "Catégorie2-Sous Catégorie1",
          data: 34,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Gouvernance et Capacité\n de Gestion",
        },
        {
          name: "Catégorie2-Sous Catégorie2",
          data: 33,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Gouvernance et Capacité\n de Gestion",
        },
        {
          name: "Catégorie2-Sous Catégorie3",
          data: 33,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Gouvernance et Capacité\n de Gestion",
        },
        /**************/
        {
          name: "Catégorie3-Sous Catégorie1",
          data: 35,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Services aux étudiants",
        },
        {
          name: "Catégorie3-Sous Catégorie2",
          data: 65,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Services aux étudiants",
        },
        /**************/
        {
          name: "Catégorie4-Sous Catégorie1",
          data: 40,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Université innovante\n et entrepreneuriale",
        },
        {
          name: "Catégorie4-Sous Catégorie2",
          data: 60,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Université innovante\n et entrepreneuriale",
        },
        /**************/
        {
          name: "Catégorie5-Sous Catégorie1",
          data: 22,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Appui à une meilleure\nconnexion au\nmarché de l'emploi",
        },
        {
          name: "Catégorie5-Sous Catégorie2",
          data: 44,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Appui à une meilleure\nconnexion au\nmarché de l'emploi",
        },
        {
          name: "Catégorie5-Sous Catégorie3",
          data: 54,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Appui à une meilleure\nconnexion au\nmarché de l'emploi",
        }
      ]
    },
    {
      diagramName: "etat-projet-par-statut-detail2",
      data:[
        {
          name: "C1-SC1-Projet1",
          data: 50,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "PAQ Co-Construction et Innovations pédagogiques",
        },
        {
          name: "C1-SC1-Projet2",
          data: 50,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "PAQ Co-Construction et Innovations pédagogiques",
        },
        /***********/
        {
          name: "C1-SC2-Projet1",
          data: 30,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "PAQ CG Appui au Pilotage et aux mécanismes/structures d'insertion",
        },
        {
          name: "C1-SC2-Projet2",
          data: 70,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "PAQ CG Appui au Pilotage et aux mécanismes/structures d'insertion",
        },
        /***********/
        {
          name: "C1-SC3-Projet1",
          data: 25,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Certification des compétences pour l'employabilité PRICE",
        },
        {
          name: "C1-SC3-Projet2",
          data: 75,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Certification des compétences pour l'employabilité PRICE",
        },
        /***********/
        {
          name: "C2-SC1-Projet1",
          data: 35,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie2-Sous Catégorie1",
        },
        {
          name: "C2-SC1-Projet2",
          data: 65,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie2-Sous Catégorie1",
        },
        /***********/
        {
          name: "C2-SC2-Projet1",
          data: 40,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie2-Sous Catégorie2",
        },
        {
          name: "C2-SC2-Projet2",
          data: 60,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie2-Sous Catégorie2",
        },
        /***********/
        {
          name: "C2-SC3-Projet1",
          data: 15,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie2-Sous Catégorie3",
        },
        {
          name: "C2-SC3-Projet2",
          data: 85,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie2-Sous Catégorie3",
        },
        /***********/
        {
          name: "C3-SC1-Projet1",
          data: 23,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie3-Sous Catégorie1",
        },
        {
          name: "C3-SC1-Projet2",
          data: 77,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie3-Sous Catégorie1",
        },
        /***********/
        {
          name: "C3-SC2-Projet1",
          data: 38,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie3-Sous Catégorie2",
        },
        {
          name: "C3-SC2-Projet2",
          data: 62,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie3-Sous Catégorie2",
        },
        /***********/
        {
          name: "C4-SC1-Projet1",
          data: 43,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie4-Sous Catégorie1",
        },
        {
          name: "C4-SC1-Projet2",
          data: 57,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie4-Sous Catégorie1",
        },
        /***********/
        {
          name: "C4-SC2-Projet1",
          data: 53,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie4-Sous Catégorie2",
        },
        {
          name: "C4-SC2-Projet2",
          data: 47,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie4-Sous Catégorie2",
        },
        /***********/
        {
          name: "C5-SC1-Projet1",
          data: 30,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie5-Sous Catégorie1",
        },
        {
          name: "C5-SC1-Projet2",
          data: 70,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie5-Sous Catégorie1",
        },
        /***********/
        {
          name: "C5-SC2-Projet1",
          data: 24,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie5-Sous Catégorie2",
        },
        {
          name: "C5-SC2-Projet2",
          data: 76,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie5-Sous Catégorie2",
        },
        /***********/
        {
          name: "C5-SC3-Projet1",
          data: 28,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie5-Sous Catégorie3",
        },
        {
          name: "C5-SC3-Projet2",
          data: 72,
          dependencyDiagramName: "etat-budget-par-categorie-detail1",
          dependencyDiagramDataName: "Catégorie5-Sous Catégorie3",
        },
      ]
    }
  ]

  constructor() { }

  getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        const mockData = [];
        for (let i = 0; i < 7; i++) {
          mockData.push(Math.round(Math.random() * 900 + 700));
        }
        resolve(mockData);
      }, 500);
    });
  }

  getGaugeGradientColoration(){
    return [
      [
          0.013,
          "#10FF00"
      ],
      [
          0.025,
          "#2DFF00"
      ],
      [
          0.038,
          "#3DFF00"
      ],
      [
          0.051,
          "#4AFE00"
      ],
      [
          0.063,
          "#55FE00"
      ],
      [
          0.076,
          "#5EFE00"
      ],
      [
          0.089,
          "#67FE00"
      ],
      [
          0.101,
          "#6FFD00"
      ],
      [
          0.114,
          "#76FD00"
      ],
      [
          0.127,
          "#7DFD00"
      ],
      [
          0.139,
          "#83FC00"
      ],
      [
          0.152,
          "#89FC00"
      ],
      [
          0.165,
          "#8FFC00"
      ],
      [
          0.177,
          "#95FB00"
      ],
      [
          0.190,
          "#9AFB00"
      ],
      [
          0.203,
          "#9FFB00"
      ],
      [
          0.215,
          "#A5FA00"
      ],
      [
          0.228,
          "#AAFA00"
      ],
      [
          0.241,
          "#AEFA00"
      ],
      [
          0.253,
          "#B3F900"
      ],
      [
          0.266,
          "#B8F900"
      ],
      [
          0.278,
          "#BCF800"
      ],
      [
          0.291,
          "#C0F800"
      ],
      [
          0.304,
          "#C5F800"
      ],
      [
          0.316,
          "#C9F700"
      ],
      [
          0.329,
          "#CDF700"
      ],
      [
          0.342,
          "#D1F600"
      ],
      [
          0.354,
          "#D5F600"
      ],
      [
          0.367,
          "#D9F500"
      ],
      [
          0.380,
          "#DDF500"
      ],
      [
          0.392,
          "#E0F400"
      ],
      [
          0.405,
          "#E4F400"
      ],
      [
          0.418,
          "#E8F300"
      ],
      [
          0.430,
          "#EBF300"
      ],
      [
          0.443,
          "#EFF200"
      ],
      [
          0.456,
          "#F2F200"
      ],
      [
          0.468,
          "#F5F100"
      ],
      [
          0.481,
          "#F9F100"
      ],
      [
          0.494,
          "#FCF000"
      ],
      [
          0.506,
          "#FFF000"
      ],
      [
          0.519,
          "#FFEC00"
      ],
      [
          0.532,
          "#FFE700"
      ],
      [
          0.544,
          "#FFE300"
      ],
      [
          0.557,
          "#FFDF00"
      ],
      [
          0.570,
          "#FFDA00"
      ],
      [
          0.582,
          "#FFD600"
      ],
      [
          0.595,
          "#FFD200"
      ],
      [
          0.608,
          "#FFCD00"
      ],
      [
          0.620,
          "#FFC900"
      ],
      [
          0.633,
          "#FFC400"
      ],
      [
          0.646,
          "#FFC000"
      ],
      [
          0.658,
          "#FFBB00"
      ],
      [
          0.671,
          "#FFB700"
      ],
      [
          0.684,
          "#FFB200"
      ],
      [
          0.696,
          "#FFAD00"
      ],
      [
          0.709,
          "#FFA900"
      ],
      [
          0.722,
          "#FFA400"
      ],
      [
          0.734,
          "#FF9F00"
      ],
      [
          0.747,
          "#FF9A00"
      ],
      [
          0.759,
          "#FF9500"
      ],
      [
          0.772,
          "#FF9000"
      ],
      [
          0.785,
          "#FF8B00"
      ],
      [
          0.797,
          "#FF8600"
      ],
      [
          0.810,
          "#FF8100"
      ],
      [
          0.823,
          "#FF7C00"
      ],
      [
          0.835,
          "#FF7600"
      ],
      [
          0.848,
          "#FF7100"
      ],
      [
          0.861,
          "#FF6B00"
      ],
      [
          0.873,
          "#FF6500"
      ],
      [
          0.886,
          "#FF5F00"
      ],
      [
          0.899,
          "#FF5900"
      ],
      [
          0.911,
          "#FF5200"
      ],
      [
          0.924,
          "#FF4B00"
      ],
      [
          0.937,
          "#FF4400"
      ],
      [
          0.949,
          "#FF3C00"
      ],
      [
          0.962,
          "#FF3300"
      ],
      [
          0.975,
          "#FF2800"
      ],
      [
          0.987,
          "#FF1A00"
      ],
      [
          1,
          "#FF0000"
      ]
  ]
  }
}
