import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';
import { DescriptionComponent } from './description/description.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactComponent } from './mywork/contact/contact.component';
import { StartscreenComponent } from './startscreen/startscreen.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [
      { path: 'startscreen', component: StartscreenComponent },
      { path: 'about-me', component: DescriptionComponent },
      { path: 'my-skills', component: SkillsetComponent },
      { path: 'my-work', component: MyworkComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: ImprintComponent },
];
