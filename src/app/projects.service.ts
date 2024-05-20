import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects = [
    {
      img: 'join.png',
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
    },
    {
      img: 'pollo.png',
      name: 'Tombstone Tales',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    },
    {
      img: 'crm.png',
      name: 'Simple crm',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.'
    }
  ]

}
