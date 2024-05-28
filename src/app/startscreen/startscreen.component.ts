import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [HeaderComponent, TranslateModule],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent {

}
