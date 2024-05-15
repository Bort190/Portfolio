import { Component, Inject, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from '../projects.service';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';



@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [ProjectComponent, CommonModule, ContactComponent],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss'
})
export class MyworkComponent {

  projectService = inject(ProjectsService)
 
 

}
