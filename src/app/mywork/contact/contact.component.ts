import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  termsChecked: boolean = false;

  checkTerms(event: any) {
    this.termsChecked = event.target.checked;
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted && this.termsChecked) {
      console.log(this.contactData);
    }
  }
}
