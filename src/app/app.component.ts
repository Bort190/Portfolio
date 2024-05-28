import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { DescriptionComponent } from './description/description.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyworkComponent } from './mywork/mywork.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StartscreenComponent, DescriptionComponent, SkillsetComponent, MyworkComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    this.translateService.setDefaultLang('de');
    this.translateService.use('de');
  }
  title = 'portfolio';
}
