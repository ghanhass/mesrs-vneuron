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
          name: "Projet 1",
          data: 45,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 2",
          data: 70,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 3",
          data: 80,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 4",
          data: 10,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 5",
          data: 70,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        /****************/
        {
          name: "Projet 1",
          data: 100,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "Clôturé",
        },
        {
          name: "Projet 2",
          data: 100,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "Clôturé",
        },
        {
          name: "Projet 3",
          data: 100,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "Clôturé",
        },
        {
          name: "Projet 4",
          data: 100,
          dependencyDiagramName: "etat-projet-par-statut",
          dependencyDiagramDataName: "Clôturé",
        }
      ]
    },
    {
      diagramName: "etat-projet-par-cause-alerte-detail",
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
          name: "Assurance qualité & accréditation",
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
          name: "Assurance qualité & accréditation",
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
          name: "Assurance qualité & accréditation",
          data: 65,
          dependencyDiagramName: "etat-projet-par-cause-alerte",
          dependencyDiagramDataName: "Des projets non pas encore reçu les virements des tranches",
        }
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
