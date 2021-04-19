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
}
