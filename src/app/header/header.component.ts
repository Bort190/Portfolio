import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public viewportScroller: ViewportScroller) {}
  sidebarOpen: boolean = false;

  private translateService = inject(TranslateService);

  openSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }

  scrollToAnchroingPosition(elementId: string): void {
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 1);
  }
}
