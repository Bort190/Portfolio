import { CommonModule, ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(public viewportScroller: ViewportScroller) {}
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };
  termsChecked: boolean = false;
  formInvalid: boolean = false;
  mailSendWindowOpen: boolean = false;

  checkTerms(event: any) {
    this.termsChecked = event.target.checked;
  }

  mailTest = false;

  post = {
    endPoint: 'https://heiko-nevoigt.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  mailSend() {
    this.mailSendWindowOpen = true;
    setTimeout(() => {
      this.mailSendWindowOpen = false;
    }, 2000);
  }

  onSubmit(ngForm: NgForm) {
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.mailTest &&
      this.termsChecked
    ) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      this.termsChecked = false;
      this.mailSend();
    } else if (
      ngForm.submitted &&
      ngForm.form.valid &&
      this.mailTest &&
      this.termsChecked
    ) {
      ngForm.resetForm();
      this.termsChecked = false;
      this.mailSend();
    }
  }

  scrollToAnchroingPosition(elementId: string): void {
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 1);
  }
}
