import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() { }

  projects = [
    {
      img: 'join.png',
      name: 'Join',
      skills: 'Javascript | CSS | HTML',
      liveLink: 'http://heiko-nevoigt.developerakademie.net/Join_Gruppenarbeit/index.html',
      githubLink: 'https://github.com/maksmuehlbauer/Join_Gruppenarbeit',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionEn: 'description in english',
    },
    {
      img: 'tombstone.png',
      name: 'Tombstone Tales',
      skills: 'Javascript | CSS | HTML',
      liveLink: 'http://heiko-nevoigt.developerakademie.net/Tombstone%20Tales/startscreen.html',
      githubLink: 'https://github.com/Bort190/Tombstone-Tales',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      descriptionEn: 'description in english2',
    },
    {
      img: 'crm.png',
      name: 'Simple crm',
      skills: 'Angular | TypeScript',
      liveLink: '',
      githubLink: '',
      description:
        'A very Simple Customer Relationship Management system working with CRUD functionality.',
      descriptionEn: 'description in english3',
    },
  ];
}
