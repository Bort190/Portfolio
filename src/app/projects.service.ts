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
        'Ein Task-Management Programm in Anlehnung an ein Kanban Board. Es erlaubt dem Nutzer Aufgaben zu erstellen und Kontakte zuzuordnen und diese dann per drag and drop in verschiedene Kategorien zu organisieren.',
      descriptionEn: 'A task management program inspired by a Kanban board. It allows the user to create tasks and assign contacts, then organize them into different categories using drag and drop.',
    },
    {
      img: 'tombstone.png',
      name: 'Tombstone Tales',
      skills: 'Javascript | CSS | HTML',
      liveLink: 'http://heiko-nevoigt.developerakademie.net/Tombstone%20Tales/startscreen.html',
      githubLink: 'https://github.com/Bort190/Tombstone-Tales',
      description:
        'Ein Jump-and-run Spiel, welches mithilfe eines objektorientierten Ansatzes in JavaScript umgesetzt wurde. Stelle dich als tapferer Sensenmann Zombiehorden entgegen. Du hast die Wahl, sie entweder mit deinem Kampfstab anzugreifen oder ihnen Knochen entgegen zu werfen, bis du dich am Ende deiner Reise einer noch größeren Gefahr stellen musst.',
      descriptionEn: 'A jump-and-run game implemented using an object-oriented approach in JavaScript. Face hordes of zombies as the brave Grim Reaper. You have the choice to attack them with your staff or throw bones at them until you must confront an even greater danger at the end of your journey.',
    },
    {
      img: 'crm.png',
      name: 'Simple crm',
      skills: 'Angular | TypeScript',
      liveLink: '',
      githubLink: '',
      description:
        'Ein sehr einfaches Customer-Relationship-Management-System, das mit CRUD-Funktionalität arbeitet.',
      descriptionEn: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
    },
  ];
}
