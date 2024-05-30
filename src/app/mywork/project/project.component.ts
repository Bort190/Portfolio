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
    img: 'join.png',
    name: 'Join',
    skills: 'Angular | TypeScript',
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    descriptionEn: 'description in english',
  };
  descriptionTranslate = {
    description: this.project.description,
    descriptionEn: this.project.descriptionEn,
  };

  @Input() index = 0;
}
