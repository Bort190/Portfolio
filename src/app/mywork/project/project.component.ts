import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  ngOnInit(): void {
    AOS.init();
  }


  
  @Input() project = {
    img: 'tombstone.png',
    name: 'Tombstone Tales',
    skills: 'Javascript | CSS | HTML',
    liveLink: 'http://heiko-nevoigt.developerakademie.net/Tombstone%20Tales/startscreen.html',
    githubLink: 'https://github.com/Bort190/Tombstone-Tales',
    description:
      'Ein Jump-and-run Spiel, welches mithilfe eines objektorientierten Ansatzes in JavaScript umgesetzt wurde. Stelle dich als tapferer Sensenmann Zombiehorden entgegen. Du hast die Wahl, sie entweder mit deinem Kampfstab anzugreifen oder ihnen Knochen entgegen zu werfen, bis du dich am Ende deiner Reise einer noch größeren Gefahr stellen musst.',
    descriptionEn: 'A jump-and-run game implemented using an object-oriented approach in JavaScript. Face hordes of zombies as the brave Grim Reaper. You have the choice to attack them with your staff or throw bones at them until you must confront an even greater danger at the end of your journey.',
  };

  descriptionTranslate = {
    description: this.project.description,
    descriptionEn: this.project.descriptionEn
  };

  @Input() index = 0;
}
