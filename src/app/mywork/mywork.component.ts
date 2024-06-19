import { Component, Inject, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from '../projects.service';
import { CommonModule, ViewportScroller } from '@angular/common';
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
  constructor(public viewportScroller: ViewportScroller) {}
  projectService = inject(ProjectsService);

  scrollToAnchroingPosition(elementId: string): void {
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 1);
  }
}
