import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockServerService {

  db = [
    {
      diagramName: "etat-avancement-par-statut",
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
    },
    {
      diagramName: "etat-avancement-par-statut-detail",
      data:[
        {
          name: "Projet 1",
          data: 30,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "En attente de versement",
        },
        {
          name: "Projet 2",
          data: 40,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "En attente de versement",
        },
        {
          name: "Projet 3",
          data: 20,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "En attente de versement",
        },
        {
          name: "Projet 4",
          data: 50,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "En attente de versement",
        },
        /****************/
        {
          name: "Projet 1",
          data: 45,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 2",
          data: 70,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 3",
          data: 80,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 4",
          data: 10,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        {
          name: "Projet 5",
          data: 70,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "En cours",
        },
        /****************/
        {
          name: "Projet 1",
          data: 100,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "Clôturé",
        },
        {
          name: "Projet 2",
          data: 100,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "Clôturé",
        },
        {
          name: "Projet 3",
          data: 100,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "Clôturé",
        },
        {
          name: "Projet 4",
          data: 100,
          dependencyDiagramName: "etat-avancement-par-statut",
          dependencyDiagramDataName: "Clôturé",
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
