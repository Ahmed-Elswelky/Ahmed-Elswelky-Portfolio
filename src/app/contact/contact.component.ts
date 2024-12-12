import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ToastrModule],
   providers: [
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  phoneNumber: string = '+201025586763';
  mail: string = 'ahmed.karam.elswelky@gmail.com';

  constructor(
    private clipboard: Clipboard,
    private toastr: ToastrService
  ) {}

  copyPhoneNumber(): void {
    this.clipboard.copy(this.phoneNumber);
    this.toastr.success('Phone number copied to clipboard!', 'Success');
    console.log(this.toastr.success('Phone number copied to clipboard!', 'Success'));

  }
  copyMail(): void {
    this.clipboard.copy(this.mail);
    this.toastr.success('Mail copied to clipboard!', 'Success');
  }
}
