import { Component, Inject, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from '../projects.service';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [ProjectComponent, CommonModule, ContactComponent, TranslateModule],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss',
})
export class MyworkComponent {
  projectService = inject(ProjectsService);
}
