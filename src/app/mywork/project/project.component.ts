import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  ngOnInit(): void {
  
    AOS.init();
  } 


  @Input() project = {
    img: 'join.png',
    name: 'Join',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
  };

  @Input() index =0;

}

