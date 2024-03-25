import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../app/services/contact.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  contactForm: FormGroup;
  
  constructor(private fb: FormBuilder, private contactService: ContactService){
    this.contactForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    })
  }

  async onSubmit(){
    try{
      if(this.contactForm.valid){
        const response = await this.contactService.addContact(this.contactForm.value);
        console.log(response);
      } else {
        console.log("Invalid Form");
        this.contactForm.markAllAsTouched();
      }
    }
    catch (error) {
      console.log(error);
    }
  }
}

