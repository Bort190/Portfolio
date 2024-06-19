import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public viewportScroller: ViewportScroller) {}

  scrollToAnchroingPosition(elementId: string): void {
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 1);
  }
}
