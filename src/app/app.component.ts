import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { DescriptionComponent } from './description/description.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyworkComponent } from './mywork/mywork.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StartscreenComponent, DescriptionComponent, SkillsetComponent, MyworkComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
