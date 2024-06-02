import { Component } from '@angular/core';
import { StartscreenComponent } from '../startscreen/startscreen.component';
import { DescriptionComponent } from '../description/description.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { MyworkComponent } from '../mywork/mywork.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [StartscreenComponent, DescriptionComponent, SkillsetComponent, MyworkComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
