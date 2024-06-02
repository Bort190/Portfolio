import { Routes } from '@angular/router';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    {path: '', component: StartscreenComponent},
    {path: 'imprint', component: ImprintComponent}
];
