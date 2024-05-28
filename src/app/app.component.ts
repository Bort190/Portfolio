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
  languages = ['de', 'en'];
  private translateService = inject(TranslateService);
  
  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('language') || 'de';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }

  changeLanguage(lang: string){
    this.translateService.use(lang);
    localStorage.setItem('language' ,lang)
  }
  title = 'portfolio';
}
