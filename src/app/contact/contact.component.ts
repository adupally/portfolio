import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:String=''
  feedback:String=''
  submit:boolean=true
  onSubmit(){
    this.submit = !this.submit
    console.log(this.submit)
  }
  submitForm(){
    console.log(this.name)
    console.log(this.feedback)
    this.name='' 
    this.feedback=''

  }

}
