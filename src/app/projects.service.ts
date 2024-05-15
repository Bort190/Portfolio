import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects = [
    {
      img: 'join.png',
      name: 'Join'
    },
    {
      img: 'pollo.png',
      name: 'Tombstone Tales'
    }
  ]

}
